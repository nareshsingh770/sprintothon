"use client";

import { useState, useEffect, useRef } from "react";
import { registrationFormSchema, type RegistrationFormData } from "../types";
import { Send } from "lucide-react";
import { z } from "zod";
import { addOnSheet } from "@/services/apiServices";
import { eventCategory } from "@/lib/appConstant";

import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
import { useFirebase } from "@/lib/FirebaseContext";
import { initiateRazorpayPayment } from "@/lib/razorpayUtils";

export default function RegistrationForm({
  selectedEvent,
  eventonChange,
}: {
  selectedEvent: any;
  eventonChange: (event: any) => void;
}) {
  const app = useFirebase();
  const functions = getFunctions(app);
  const uuidRef = useRef(crypto.randomUUID());
  const UUID = uuidRef.current;

  // Connect to the local Functions emulator in development.
  // Enable by setting NEXT_PUBLIC_USE_FIREBASE_EMULATOR=true or running on localhost.
  if (typeof window !== "undefined") {
    const useEmulator =
      process.env.NEXT_PUBLIC_USE_FIREBASE_EMULATOR === "true" ||
      window.location.hostname === "localhost";
    if (useEmulator) {
      const port = Number(
        process.env.NEXT_PUBLIC_FIREBASE_EMULATOR_PORT || 5001
      );
      try {
        connectFunctionsEmulator(functions, "localhost", port);
        console.log(`Connected Functions emulator on localhost:${port}`);
      } catch (e) {
        console.warn("Could not connect to Functions emulator:", e);
      }
    }
  }
  const [formData, setFormData] = useState<RegistrationFormData>({
    firstname: "",
    lastname: "",
    gender: "male" as "male" | "female" | "Transgender" | "Prefer Not to Say",
    tShirtSize: "S" as
      | "XS"
      | "S"
      | "M"
      | "L"
      | "XL"
      | "XXL"
      | "XXXL"
      | "4XL"
      | "5XL",
    marathonCategory: "",
    mobile: "",
    email: "",
    age: "",
    country: "india",
    address: "",
    pincode: "",
    message: "",
    acknowledgment: false,
    referenceCode: "",
    type: "registration",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [showPaymentButton, setShowPaymentButton] = useState(false);
  const [savedFormData, setSavedFormData] =
    useState<RegistrationFormData | null>(null);

  // Load Razorpay checkout script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      marathonCategory: selectedEvent
        ? selectedEvent.title
        : prev.marathonCategory,
    }));
  }, [selectedEvent]);

  const handlePayment = () => {
    if (!selectedEvent) return;

    initiateRazorpayPayment({
      amount: selectedEvent.price,
      platformFee: 21,
      paymentTitle: "Sprintothon 2024",
      eventTitle: selectedEvent.title,
      userEmail: emailRef.current,
      userName: nameRef.current,
      functions,
      onSuccess: async (payment_id: string) => {
        try {
          const status = await addOnSheet({
            action: "update",
            type: "registration",
            payment_id,
            userId: UUID,
          });
          console.log("Update response:", status);
          alert("Payment successful! Thank you for registering.");
          setErrors({});
        } catch (error) {
          setSubmitStatus("error");
        }
      },
    });
    
      setFormData({
        firstname: "",
        lastname: "",
        gender: "" as "male" | "female" | "Transgender" | "Prefer Not to Say",
        tShirtSize: "" as
          | "XS"
          | "S"
          | "M"
          | "L"
          | "XL"
          | "XXL"
          | "XXXL"
          | "4XL"
          | "5XL",
        marathonCategory: "",
        mobile: "",
        email: "",
        age: "",
        country: "india",
        address: "",
        pincode: "",
        message: "",
        acknowledgment: false,
        referenceCode: "",
        type: "registration",
      });
  };
const emailRef = useRef("");
const nameRef = useRef("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("idle");
    setErrors({});
emailRef.current = formData.email;
nameRef.current = `${formData.firstname} ${formData.lastname}`;

    // Validate with Zod
    try {
      registrationFormSchema.parse(formData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.issues.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(fieldErrors);
        return;
      }
    }

    setIsSubmitting(true);

    try {
      const status = await addOnSheet({
        ...formData,
        type: "registration",
        price: selectedEvent.price,
        payment_id: "pending",
        userId: UUID,
      });
      setSubmitStatus("success");

      // Save form data before clearing for payment button prefill
      setSavedFormData(formData);

      // Show payment button after successful registration
      setShowPaymentButton(true);

      setErrors({});
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      handlePayment();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-3">
        <div>
          <label htmlFor="firstname" className="block text-sm font-medium mb-2">
            First Name
          </label>
          <input
            id="firstname"
            type="text"
            placeholder="First Name"
            value={formData.firstname}
            onChange={(e) => {
              setFormData({ ...formData, firstname: e.target.value });
              if (errors.firstname) setErrors({ ...errors, firstname: "" });
            }}
            className={`w-full px-4 py-3 rounded-lg border bg-[rgb(var(--background))] focus:ring-2 focus:ring-primary outline-none transition ${
              errors.firstname ? "border-red-500" : ""
            }`}
          />
          {errors.firstname && (
            <p className="text-red-600 dark:text-red-400 text-sm mt-1">
              {errors.firstname}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="lastname" className="block text-sm font-medium mb-2">
            Last Name
          </label>
          <input
            id="lastname"
            type="text"
            placeholder="Last Name"
            value={formData.lastname}
            onChange={(e) => {
              setFormData({ ...formData, lastname: e.target.value });
              if (errors.lastname) setErrors({ ...errors, lastname: "" });
            }}
            className={`w-full px-4 py-3 rounded-lg border bg-[rgb(var(--background))] focus:ring-2 focus:ring-primary outline-none transition ${
              errors.lastname ? "border-red-500" : ""
            }`}
          />
          {errors.lastname && (
            <p className="text-red-600 dark:text-red-400 text-sm mt-1">
              {errors.lastname}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-3">
        <div>
          <label htmlFor="gender" className="block text-sm font-medium mb-2">
            Gender
          </label>
          <select
            id="gender"
            value={formData.gender}
            onChange={(e) => {
              setFormData({
                ...formData,
                gender: e.target.value as
                  | "male"
                  | "female"
                  | "Transgender"
                  | "Prefer Not to Say",
              });
              if (errors.gender) setErrors({ ...errors, gender: "" });
            }}
            className={`w-full px-4 py-3 rounded-lg border bg-[rgb(var(--background))] focus:ring-2 focus:ring-primary outline-none transition ${
              errors.gender ? "border-red-500" : ""
            }`}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Transgender</option>
            <option value="other">Prefer Not to Say</option>
          </select>
          {errors.gender && (
            <p className="text-red-600 dark:text-red-400 text-sm mt-1">
              {errors.gender}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="age" className="block text-sm font-medium mb-2">
            Age
          </label>
          <input
            id="age"
            type="number"
            placeholder="25"
            value={formData.age}
            onChange={(e) => {
              setFormData({ ...formData, age: e.target.value });
              if (errors.age) setErrors({ ...errors, age: "" });
            }}
            className={`w-full px-4 py-3 rounded-lg border bg-[rgb(var(--background))] focus:ring-2 focus:ring-primary outline-none transition ${
              errors.age ? "border-red-500" : ""
            }`}
          />
          {errors.age && (
            <p className="text-red-600 dark:text-red-400 text-sm mt-1">
              {errors.age}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-3">
        <div>
          <label
            htmlFor="tShirtSize"
            className="block text-sm font-medium mb-2"
          >
            T-Shirt Size
          </label>
          <select
            id="tShirtSize"
            value={formData.tShirtSize}
            onChange={(e) => {
              setFormData({
                ...formData,
                tShirtSize: e.target.value as
                  | "XS"
                  | "S"
                  | "M"
                  | "L"
                  | "XL"
                  | "XXL",
              });
              if (errors.tShirtSize) setErrors({ ...errors, tShirtSize: "" });
            }}
            className={`w-full px-4 py-3 rounded-lg border bg-[rgb(var(--background))] focus:ring-2 focus:ring-primary outline-none transition ${
              errors.tShirtSize ? "border-red-500" : ""
            }`}
          >
            <option value="">Select Size</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
            <option value="XXXL">XXXL</option>
            <option value="4XL">4XL</option>
            <option value="5XL">5XL</option>
          </select>
          {errors.tShirtSize && (
            <p className="text-red-600 dark:text-red-400 text-sm mt-1">
              {errors.tShirtSize}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="marathonCategory"
            className="block text-sm font-medium mb-2"
          >
            Marathon Category
          </label>
          <select
            id="marathonCategory"
            value={formData.marathonCategory}
            onChange={(e) => {
              const selected = eventCategory.find(
                (cat) => cat.title === e.target.value
              );
              if (selected?.title) {
                window.location.href = `/register?event=${encodeURIComponent(
                  selected.title
                )}`;
              }

              if (errors.marathonCategory)
                setErrors({ ...errors, marathonCategory: "" });
            }}
            className={`w-full px-4 py-3 rounded-lg border bg-[rgb(var(--background))] focus:ring-2 focus:ring-primary outline-none transition ${
              errors.marathonCategory ? "border-red-500" : ""
            }`}
          >
            <option value="">Select Category</option>
            {eventCategory.map((category, index) => (
              <option key={index} value={category.title}>
                {category.title}
              </option>
            ))}
          </select>
          {errors.marathonCategory && (
            <p className="text-red-600 dark:text-red-400 text-sm mt-1">
              {errors.marathonCategory}
            </p>
          )}
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="xyz@example.com"
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
            if (errors.email) setErrors({ ...errors, email: "" });
          }}
          className={`w-full px-4 py-3 rounded-lg border bg-[rgb(var(--background))] focus:ring-2 focus:ring-primary outline-none transition ${
            errors.email ? "border-red-500" : ""
          }`}
        />
        {errors.email && (
          <p className="text-red-600 dark:text-red-400 text-sm mt-1">
            {errors.email}
          </p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="mobile" className="block text-sm font-medium mb-2">
          Mobile
        </label>
        <input
          id="mobile"
          type="tel"
          placeholder="+91 9999999999"
          value={formData.mobile}
          onChange={(e) => {
            setFormData({ ...formData, mobile: e.target.value });
            if (errors.mobile) setErrors({ ...errors, mobile: "" });
          }}
          className={`w-full px-4 py-3 rounded-lg border bg-[rgb(var(--background))] focus:ring-2 focus:ring-primary outline-none transition ${
            errors.mobile ? "border-red-500" : ""
          }`}
        />
        {errors.mobile && (
          <p className="text-red-600 dark:text-red-400 text-sm mt-1">
            {errors.mobile}
          </p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="address" className="block text-sm font-medium mb-2">
          Address
        </label>
        <textarea
          id="address"
          placeholder="Enter your full address"
          value={formData.address}
          onChange={(e) => {
            setFormData({ ...formData, address: e.target.value });
            if (errors.address) setErrors({ ...errors, address: "" });
          }}
          rows={3}
          className={`w-full px-4 py-3 rounded-lg border bg-[rgb(var(--background))] focus:ring-2 focus:ring-primary outline-none transition resize-none ${
            errors.address ? "border-red-500" : ""
          }`}
        />
        {errors.address && (
          <p className="text-red-600 dark:text-red-400 text-sm mt-1">
            {errors.address}
          </p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="pincode" className="block text-sm font-medium mb-2">
          Pincode
        </label>
        <input
          id="pincode"
          type="text"
          placeholder="110001"
          maxLength={6}
          value={formData.pincode}
          onChange={(e) => {
            setFormData({ ...formData, pincode: e.target.value });
            if (errors.pincode) setErrors({ ...errors, pincode: "" });
          }}
          className={`w-full px-4 py-3 rounded-lg border bg-[rgb(var(--background))] focus:ring-2 focus:ring-primary outline-none transition ${
            errors.pincode ? "border-red-500" : ""
          }`}
        />
        {errors.pincode && (
          <p className="text-red-600 dark:text-red-400 text-sm mt-1">
            {errors.pincode}
          </p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="referenceCode" className="block text-sm font-medium mb-2">
          Reference Code (Optional)
        </label>
        <input
          id="referenceCode"
          type="text"
          placeholder="Enter reference code"
          value={formData.referenceCode}
          onChange={(e) => {
            setFormData({ ...formData, referenceCode: e.target.value });
            if (errors.referenceCode) setErrors({ ...errors, referenceCode: "" });
          }}
          className={`w-full px-4 py-3 rounded-lg border bg-[rgb(var(--background))] focus:ring-2 focus:ring-primary outline-none transition ${
            errors.referenceCode ? "border-red-500" : ""
          }`}
        />
        {errors.referenceCode && (
          <p className="text-red-600 dark:text-red-400 text-sm mt-1">
            {errors.referenceCode}
          </p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Additional Notes (Optional)
        </label>
        <textarea
          id="message"
          placeholder="Any additional information..."
          value={formData.message}
          onChange={(e) => {
            setFormData({ ...formData, message: e.target.value });
            if (errors.message) setErrors({ ...errors, message: "" });
          }}
          rows={4}
          className={`w-full px-4 py-3 rounded-lg border bg-[rgb(var(--background))] focus:ring-2 focus:ring-primary outline-none transition resize-none ${
            errors.message ? "border-red-500" : ""
          }`}
        />
        {errors.message && (
          <p className="text-red-600 dark:text-red-400 text-sm mt-1">
            {errors.message}
          </p>
        )}
      </div>

      {/* Acknowledgment Checkbox */}
      <div className="flex items-start mb-6">
        <input
          id="acknowledgment"
          type="checkbox"
          className="mt-1 mr-2 accent-pink-600"
          checked={!!formData.acknowledgment}
          onChange={(e) =>
            setFormData({ ...formData, acknowledgment: e.target.checked })
          }
        />
        <label htmlFor="acknowledgment" className="text-sm select-none">
          I have read and agree to the
          <a
            href="/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 underline mx-1"
          >
            Privacy Policy
          </a>
          and
          <a
            href="/cancellation"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 underline mx-1"
          >
            Cancellation Policy
          </a>
          .
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting || !formData.acknowledgment}
        className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-orange-600 text-white border-2 cursor-pointer border-pink-600 rounded-lg font-semibold hover:bg-orange-700 transition-all hover:scale-105 backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {isSubmitting
          ? "Submitting..."
          : `Register and Pay ₹${(
              Number(selectedEvent?.price) +
              Number(selectedEvent?.price) * 0.18 +
              21
            ).toFixed(2)} with Razorpay`}
        <Send className="h-4 w-4" />
      </button>

      {submitStatus === "success" && (
        <div className="space-y-4">
          <p className="text-green-600 dark:text-green-400 text-center font-medium">
            Registration submitted successfully!
          </p>
        </div>
      )}

      {/* Razorpay Payment Button */}
      {/* <div className="flex justify-center">
            <button
              onClick={handlePayment}
              type="button"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all hover:scale-105 shadow-lg"
            >
              Pay Now with Razorpay
            </button>
          </div> */}
      {submitStatus === "error" && (
        <p className="text-red-600 dark:text-red-400 text-center font-medium">
          Failed to submit registration. Please try again.
        </p>
      )}
    </form>
  );
}
