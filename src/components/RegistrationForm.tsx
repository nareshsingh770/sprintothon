"use client";

import { useState, useEffect, useRef } from "react";
import { registrationFormSchema, type RegistrationFormData } from "../types";
import { Send } from "lucide-react";
import { z } from "zod";
import { regsiterParticipant } from "@/services/apiServices";
import { eventCategory } from "@/lib/appConstant";

export default function RegistrationForm({
  selectedEvent,
  eventonChange,
}: {
  selectedEvent: any;
  eventonChange: (event: any) => void;
}) {
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

    const totalAmount =
      selectedEvent?.price + Math.round(selectedEvent?.price * 0.18) + 21 || 0;

    const options = {
      key: "rzp_live_Rjr6kDsmmEBbfb",
      amount: totalAmount * 100, // Amount in paise
      currency: "INR",
      name: "Marathon Registration",
      description: `${selectedEvent.title} Marathon Registration`,
      image: "/logo.png", // Your logo
      config: {
        display: {
          preferences: {
            show_default_blocks: false,
          },
          blocks: {
            upi: {
              name: "Pay using UPI",
              instruments: [
                {
                  method: "upi",
                },
              ],
            },
          },
          sequence: ["block.upi"],
        },
      },
      theme: {
        color: "#db2777", // Pink color
      },
      handler: function (response: any) {
        alert("Payment successful! Thank you for registering.");
        setShowPaymentButton(false);
        window.location.href = "/";
      },
      modal: {
        ondismiss: function () {
          console.log("Payment cancelled");
        },
      },
    };

    const razorpay = new (window as any).Razorpay(options);
    razorpay.open();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("idle");
    setErrors({});

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
      const status = await regsiterParticipant(formData);
      console.log(status, "response_response");
      setSubmitStatus("success");

      // Save form data before clearing for payment button prefill
      setSavedFormData(formData);

      // Show payment button after successful registration
      setShowPaymentButton(true);

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
      });
      setErrors({});
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      console.log("initiating payment");
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
              debugger;
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
