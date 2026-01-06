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
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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

    if (adults === 1 && kids === 0) return 249;
    if (adults === 2 && kids === 0) return 249 * 2;
    if (adults === 1 && kids === 1) return 399;
    if (adults === 1 && kids === 2) return 799;
    if (adults === 2 && kids === 2) return 799;
    if (adults === 2 && kids === 3) return 1199;
    if (adults === 1 && kids === 3) return 1199;
    if (adults === 2 && kids === 1) return 499;
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
    setIsLoading(true);
    if (setSubmitted) setSubmitted(false);
    if (calculatePrice() === 0) {
      setErrors((prev) => ({
        ...prev,
        adults: "Please select at least one adult and one kid",
        kids: "Please select at least one adult and one kid",
      }));
      setIsLoading(false);
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
            setShowSuccessModal(true);
            setIsLoading(false);
            const status = await addOnSheet({
              action: "update",
              type: "adventure",
              payment_id,
              userId: UUID,
            });
            setErrors({});
          } catch (error) {
            console.error("Error updating payment ID:", error);
            setIsLoading(false);
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
      setIsLoading(false);
    }
  };

  return (
    <div>
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md mx-4 text-center">
            <div className="mb-4 flex justify-center">
              <div className="relative">
                <svg
                  className="animate-[checkmark_0.6s_ease-in-out]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 52 52"
                  width="80"
                  height="80"
                >
                  <circle
                    className="animate-[circle_0.6s_ease-in-out]"
                    cx="26"
                    cy="26"
                    r="25"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                  />
                  <path
                    className="animate-[check_0.6s_ease-in-out_0.3s_both]"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="3"
                    strokeLinecap="round"
                    d="M14 27l7 7 16-16"
                  />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Payment Successful!
            </h2>
            <p className="text-gray-600 mb-6">
              Dear Parent Thank You For Registering Your Family. We are eager to
              host you at the venue.
            </p>
            <p className="text-gray-600 mb-6 bg-amber-100 px-4 py-2 rounded text-[0.875rem]">
              If you refer 5 Kids you will get 50% Flat Discount on your kid's
              entry. If you have any queries please email us at{" "}
              <b>contact@sprintothon.com</b>
            </p>
            <button
              onClick={() => {
                setShowSuccessModal(false);
                setForm(defaultForm);
              }}
              className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <div className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-pink-50 rounded-lg p-4 shadow-sm flex flex-col h-full">
            <h2 className="text-2xl font-bold text-pink-700 mb-2">
              In just Rs.399 Kids will get
            </h2>
            <ul className="list-disc pl-6 text-gray-800 space-y-1 flex-1">
              <li>Zip-Line</li>
              <li>Zorb Roller</li>
              <li>Tarzan Swing</li>
              <li>Archery</li>
              <li>Mickey Mouse Bouncy</li>
              <li>Trampoline</li>
              <li>Burma Bridge</li>
              <li>Commando Net</li>
              <li>Air Ball</li>
              <li>Dart Game</li>
              <li>Wall climbing and much more</li>
            </ul>
          </div>
          <div className="bg-blue-50 rounded-lg p-4 shadow-sm flex flex-col h-full">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Activities for Parents
            </h3>
            <ul className="list-disc pl-6 text-gray-800 space-y-1 flex-1">
              <li>Box Cricket</li>
              <li>Hit The Basket</li>
              <li>Tug of War</li>
            </ul>
          </div>
          <div className="bg-green-50 rounded-lg p-4 shadow-sm flex flex-col h-full">
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Activities For Couples
            </h3>
            <ul className="list-disc pl-6 text-gray-800 space-y-1 flex-1">
              <li>Paper Dance</li>
              <li>Musical Chair</li>
              <li>Hit The Basket</li>
              <li>Tug of War</li>
            </ul>
          </div>
        </div>
        {/* Info and disclaimer section */}
        <div className="mt-8 space-y-4">
          <div className="bg-amber-100 border-l-4 border-amber-400 p-4 rounded text-amber-800 font-medium">
            If you refer 5 kids your kid will get{" "}
            <span className="font-bold">50% discount</span>
          </div>
        </div>
      </div>
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
                className="w-10 h-10 border rounded bg-[rgb(var(--secondary))] hover:bg-gray-200 flex items-center justify-center text-xl font-bold"
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
                className="w-10 h-10 border rounded bg-[rgb(var(--secondary))] hover:bg-gray-200 flex items-center justify-center text-xl font-bold"
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
                className="w-10 h-10 border rounded bg-[rgb(var(--secondary))] hover:bg-gray-200 flex items-center justify-center text-xl font-bold"
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
                className="w-10 h-10 border rounded bg-[rgb(var(--secondary))] hover:bg-gray-200 flex items-center justify-center text-xl font-bold"
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
            <div className="md:col-span-2 bg-[rgb(var(--secondary))] border border-blue-200 rounded p-4">
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
              disabled={isLoading}
              className="bg-pink-600 text-white px-6 py-2 rounded w-full hover:bg-pink-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading && (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              )}
              {isLoading ? "Processing..." : "Buy Ticket Now"}
            </button>
          </div>
        </div>
      </form>

      <div className="mt-4 flex flex-col gap-4 max-w-4xl">
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded text-blue-800">
          <span className="font-semibold">Please Note :</span>
          <br />
          Our charges have been revised due to a flood of registrations. These
          charges are subject to change anytime.
        </div>
        <div className="bg-gray-100 border-l-4 border-gray-400 p-4 rounded text-gray-700">
          <span className="font-semibold">Disclaimer:</span>
          <br />
          Few activities could be chargeable and subject to change as per the
          availability.
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvent;
