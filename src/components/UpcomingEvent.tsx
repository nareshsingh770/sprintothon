"use client";
import { useFirebase } from "@/lib/FirebaseContext";
import { initiateRazorpayPayment } from "@/lib/razorpayUtils";
import { addOnSheet } from "@/services/apiServices";
import { getFunctions } from "firebase/functions";
import { useState, useEffect } from "react";
import { z } from "zod";

const eventFormSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  whatsapp: z.string().regex(/^\d{10,15}$/, "Enter a valid WhatsApp number"),
  email: z.string().email("Enter a valid email"),
  society: z.string().min(2, "Society name required"),
  adults: z
    .number()
    .min(0, "Number of adults cannot be negative")
    .max(2, "Maximum 2 adults"),
  kids: z
    .number()
    .min(0, "Number of kids cannot be negative")
    .max(3, "Maximum 3 kids"),
  agree: z.boolean().refine((val) => val === true, {
    message: "You must agree to terms",
  }),
});

type FormData = {
  fullName: string;
  whatsapp: string;
  email: string;
  society: string;
  adults: number;
  kids: number;
  agree: boolean;
};

type FormErrors = {
  [key: string]: string;
};

interface UpcomingEventProps {
  onPriceChange?: (price: number, form: any) => void;
  submitted?: boolean;
  setSubmitted?: (submitted: boolean) => void;
}

const defaultForm: FormData = {
  fullName: "",
  whatsapp: "",
  email: "",
  society: "",
  adults: 0,
  kids: 0,
  agree: false,
};

const UpcomingEvent = ({
  onPriceChange,
  submitted,
  setSubmitted,
}: UpcomingEventProps) => {
  const UUID = crypto.randomUUID();
  const [form, setForm] = useState<FormData>(defaultForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const app = useFirebase();
  const functions = getFunctions(app);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleNumberChange = (name: "adults" | "kids", delta: number) => {
    setForm((prev) => {
      const newValue = Math.max(
        0,
        Math.min(name === "adults" ? 2 : 3, prev[name] + delta)
      );
      return { ...prev, [name]: newValue };
    });
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const calculatePrice = () => {
    const { adults, kids } = form;

    if (adults === 1 && kids === 0) return 129;
    if (adults === 2 && kids === 0) return 129 * 2;
    if (adults === 1 && kids === 1) return 199;
    if (adults === 1 && kids === 2) return 399;
    if (adults === 2 && kids === 2) return 399;
    if (adults === 2 && kids === 3) return 599;
    if (adults === 1 && kids === 3) return 599;
    if (adults === 2 && kids === 1) return 249;
    return 0;
  };

  useEffect(() => {
    const price = calculatePrice();
    if (onPriceChange) {
      onPriceChange(price, form);
    }
  }, [form.adults, form.kids]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (setSubmitted) setSubmitted(false);
    if (calculatePrice() === 0) {
      setErrors((prev) => ({
        ...prev,
        adults: "Please select at least one adult and one kid",
        kids: "Please select at least one adult and one kid",
      }));
      return;
    }
    try {
      eventFormSchema.parse(form);
      setErrors({});
      const registrationData = {
        ...form,
        type: "adventure",
        price: calculatePrice(),
        userId: UUID,
        payment_id: "pending",
      };

      await addOnSheet(registrationData);
      if (setSubmitted) setSubmitted(true);
      initiateRazorpayPayment({
        amount: calculatePrice(),
        platformFee: 10,
        paymentTitle: "Adventure Club Sprintothon 2024",
        eventTitle: "Adventure Club Sprintothon 2024 Registration",
        functions,
        onSuccess: async (payment_id: string) => {
          try {
            const status = await addOnSheet({
              action: "update",
              type: "adventure",
              payment_id,
              userId: UUID,
            });
            console.log("Update response:", status);
            alert("Payment Successful! Thank you for registering.");
            setErrors({});
          } catch (error) {
            console.error("Error updating payment ID:", error);
            alert(
              "Payment recorded but there was an issue updating the record. Please contact support."
            );
          }
        },
      });
    } catch (err) {
      if (err instanceof z.ZodError) {
        const fieldErrors: FormErrors = {};
        err.issues.forEach((issue) => {
          const fieldName = issue.path[0] as string;
          fieldErrors[fieldName] = issue.message;
        });
        setErrors(fieldErrors);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1">Full Name</label>
            <input
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
            {errors.fullName && (
              <p className="text-red-600 text-sm">{errors.fullName}</p>
            )}
          </div>
          <div>
            <label className="block mb-1">WhatsApp Number</label>
            <input
              name="whatsapp"
              value={form.whatsapp}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
            {errors.whatsapp && (
              <p className="text-red-600 text-sm">{errors.whatsapp}</p>
            )}
          </div>
          <div>
            <label className="block mb-1">Email Address</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
            {errors.email && (
              <p className="text-red-600 text-sm">{errors.email}</p>
            )}
          </div>
          <div>
            <label className="block mb-1">Society Name</label>
            <input
              name="society"
              value={form.society}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
            {errors.society && (
              <p className="text-red-600 text-sm">{errors.society}</p>
            )}
          </div>
          <div>
            <label className="block mb-1">Number of Adults</label>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => handleNumberChange("adults", -1)}
                className="w-10 h-10 border rounded bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-xl font-bold"
              >
                -
              </button>
              <input
                type="number"
                name="adults"
                value={form.adults}
                readOnly
                className="w-20 border rounded px-3 py-2 text-center"
              />
              <button
                type="button"
                onClick={() => handleNumberChange("adults", 1)}
                className="w-10 h-10 border rounded bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-xl font-bold"
              >
                +
              </button>
            </div>
            {errors.adults && (
              <p className="text-red-600 text-sm">{errors.adults}</p>
            )}
          </div>

          <div>
            <label className="block mb-1">Number of Kids</label>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => handleNumberChange("kids", -1)}
                className="w-10 h-10 border rounded bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-xl font-bold"
              >
                -
              </button>
              <input
                type="number"
                name="kids"
                value={form.kids}
                readOnly
                className="w-20 border rounded px-3 py-2 text-center"
              />
              <button
                type="button"
                onClick={() => handleNumberChange("kids", 1)}
                className="w-10 h-10 border rounded bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-xl font-bold"
              >
                +
              </button>
            </div>
            {errors.kids && (
              <p className="text-red-600 text-sm">{errors.kids}</p>
            )}
          </div>
          {form.kids === 2 && form.adults === 1 && (
            <p className="md:col-span-2 text-orange-400 text-sm">
              You can still add <b>ONE PARENT</b> free of cost.
            </p>
          )}

          {calculatePrice() > 0 && (
            <div className="md:col-span-2 bg-blue-50 border border-blue-200 rounded p-4">
              <p className="text-lg font-medium">
                Ticket Price:{" "}
                <span className="text-blue-600">₹{calculatePrice()}</span>
              </p>
            </div>
          )}

          <div className="md:col-span-2 flex items-center">
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
              className="mr-2"
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
          {errors.agree && (
            <p className="md:col-span-2 text-red-600 text-sm">{errors.agree}</p>
          )}

          <div className="md:col-span-2">
            <button
              type="submit"
              className="bg-pink-600 text-white px-6 py-2 rounded w-full hover:bg-pink-700"
            >
              Buy Ticket Now
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpcomingEvent;
