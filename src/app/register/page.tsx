"use client";

import CountdownTimer from "@/components/CountdownTimer";
import UpcomingEvent from "@/components/UpcomingEvent";
import RegistrationForm from "@/components/RegistrationForm";
import { eventCategory } from "@/lib/appConstant";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState, useRef } from "react";
import PaymentBarcodeGenerator from "@/components/PaymentBarcodeGenerator";
import { regsiterAdventureParticipant } from "@/services/apiServices";

function RegistrationContent() {
  const searchParams = useSearchParams();
  const [selectedEvent, setSelectedEvent] = useState<any | null>(null);

  const [priceDetails, setPriceDetails] = useState(0);
  const [focus, setFocus] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<any>(null);
  const [transactionId, setTransactionId] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [registrationComplete, setRegistrationComplete] = useState(false);
  const paymentSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (focus && paymentSectionRef.current) {
      paymentSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      setTimeout(() => setFocus(false), 3000); // Stop blinking after 3 seconds
    }
  }, [focus]);

  useEffect(() => {
    const eventType = searchParams.get("event");
    const selected = eventType
      ? eventCategory.find((e) => {
          const a = e.title.toLowerCase();
          const b = eventType.toLowerCase();
          console.log(a, b, "comparing");
          return e.title.toLowerCase() === eventType.toLowerCase();
        })
      : null;
    if (!selected) {
      window.location.href = "#events";
    }
    setSelectedEvent(selected);
  }, [selectedEvent, searchParams]);
  const getPriceDetails = (priceDetails: any, form: any) => {
    console.log(form, "form from child");
    setPriceDetails(priceDetails);
    setFormData(form);
  };

  const handleRegister = async () => {
    if (!transactionId || transactionId.trim() === "") {
      alert("Please enter Transaction ID");
      return;
    }

    if (!formData) {
      alert("Please fill the form first");
      return;
    }

    setIsRegistering(true);
    try {
      const registrationData = {
        ...formData,
        transactionId: transactionId.trim(),
      };

      await regsiterAdventureParticipant(registrationData);
      setRegistrationComplete(true);
      alert(
        "Registration successful! You will receive a confirmation email shortly."
      );
    } catch (error) {
      console.error("Registration error:", error);
      alert("Registration failed. Please try again or contact support.");
    } finally {
      setIsRegistering(false);
    }
  };

  return (
    <div className="bg-[rgb(var(--background))] pt-36">
      <div className="container mx-auto space-y-6 px-3 pb-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Registration Form
          {selectedEvent ? ` - ${selectedEvent.title}` : ""}
        </h2>
        <div className="mb-6">
          {selectedEvent &&
          selectedEvent.title ===
            "Adventure Activities for Kids and Parents" ? null : (
            <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded">
              <strong>Disclaimer:</strong> Please provide correct details to
              share event details. If incorrect details are provided your entry
              might be disqualified.
            </div>
          )}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            {selectedEvent && (
              <div className="w-full mb-8 bg-[rgb(var(--secondary))] rounded-lg overflow-hidden">
                <div className="grid md:grid-cols-9 gap-6">
                  {/* Image Section */}
                  <div className="md:col-span-3">
                    <img
                      src={selectedEvent.image}
                      alt={selectedEvent.alt}
                      className="w-full object-cover"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="md:col-span-6 p-6">
                    <h3 className="text-2xl font-bold mb-2">
                      {selectedEvent.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {selectedEvent.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span>📍 {selectedEvent.location}</span>
                      <span>🕐 {selectedEvent.time}</span>
                      <span>📅 {selectedEvent.date}</span>
                      <span className="font-bold text-red-600">
                        ₹{selectedEvent?.priceRange || selectedEvent?.price}
                      </span>
                    </div>
                    <CountdownTimer />
                  </div>
                </div>
              </div>
            )}
            {selectedEvent &&
            selectedEvent.title ===
              "Adventure Activities for Kids and Parents" ? (
              <UpcomingEvent
                onPriceChange={getPriceDetails}
                setFocus={setFocus}
                submitted={submitted}
                setSubmitted={setSubmitted}
              />
            ) : (
              <RegistrationForm
                selectedEvent={selectedEvent}
                eventonChange={setSelectedEvent}
              />
            )}
          </div>
          <div className="lg:col-span-1">
            <div className="bg-[rgb(var(--secondary))] rounded-lg p-6 sticky top-40">
              {selectedEvent &&
              selectedEvent.title ===
                "Adventure Activities for Kids and Parents" ? (
                <>
                  <style jsx>{`
                    @keyframes blink-border {
                      0%,
                      100% {
                        border-color: #ef4444;
                      }
                      50% {
                        border-color: transparent;
                      }
                    }
                    .blink-border {
                      animation: blink-border 0.8s ease-in-out infinite;
                    }
                  `}</style>
                  <div
                    ref={paymentSectionRef}
                    className={`border-4 rounded-lg p-4 transition-all ${
                      focus
                        ? "blink-border border-red-500"
                        : "border-transparent"
                    }`}
                  >
                    <PaymentBarcodeGenerator
                      value={`upi://pay?pa=9582740454@pthdfc&pn=AnkitTibrewal&am=${
                        priceDetails + 10
                      }.00&cu=INR`}
                    />
                    {submitted && (
                      <>
                        <p className="mt-4 text-center font-medium">
                          Scan this QR code to make payment and submit the
                          transaction ID below and Register.
                        </p>
                        <div className="md:col-span-2 mt-4">
                          <label className="block mb-1">
                            Transaction ID/UTR/Payment ID
                          </label>
                          <input
                            name="transactionId"
                            value={transactionId}
                            onChange={(e) => setTransactionId(e.target.value)}
                            placeholder="Enter your transaction ID"
                            className="w-full border rounded px-3 py-2"
                            disabled={registrationComplete}
                          />
                        </div>
                        <button
                          onClick={handleRegister}
                          disabled={isRegistering || registrationComplete}
                          className={`w-full mt-4 px-6 py-3 rounded font-semibold transition-colors ${
                            registrationComplete
                              ? "bg-green-600 text-white cursor-not-allowed"
                              : isRegistering
                              ? "bg-gray-400 text-white cursor-not-allowed"
                              : "bg-pink-600 text-white hover:bg-pink-700"
                          }`}
                        >
                          {registrationComplete
                            ? "✓ Registered Successfully"
                            : isRegistering
                            ? "Registering..."
                            : "Register Now"}
                        </button>
                        {registrationComplete && (
                          <p className="text-green-600 text-sm mt-2 text-center">
                            Thank you for registering we will verify the payment
                            and see you at the venue.
                          </p>
                        )}
                      </>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <h3 className="text-xl font-bold mb-4">Payment Summary</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        Ticket Price
                      </span>
                      <span className="font-medium">
                        ₹{selectedEvent?.price}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">GST (18%)</span>
                      <span className="font-medium">
                        +₹{(selectedEvent?.price || 0) * 0.18}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        Platform Fee
                      </span>
                      <span className="font-medium">+₹21</span>
                    </div>
                    <div className="border-t border-gray-600 pt-3 mt-3">
                      <div className="flex justify-between">
                        <span className="font-bold text-lg">Total Amount</span>
                        <span className="font-bold text-lg text-pink-600">
                          ₹
                          {(
                            Number(selectedEvent?.price) +
                            Number(selectedEvent?.price) * 0.18 +
                            21
                          ).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-[rgb(var(--background))] rounded-lg">
                    <p className="text-xs text-muted-foreground">
                      💡 Amount includes registration fee, platform charges, and
                      applicable GST
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const page = () => {
  return (
    <Suspense fallback={<div className="mt-36 text-center">Loading...</div>}>
      <RegistrationContent />
    </Suspense>
  );
};

export default page;
