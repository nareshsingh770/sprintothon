"use client";

import CountdownTimer from "@/components/CountdownTimer";
import UpcomingEvent from "@/components/UpcomingEvent";
import RegistrationForm from "@/components/RegistrationForm";
import { eventCategory } from "@/lib/appConstant";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import PaymentSummary from "@/components/PaymentSummary";

function RegistrationContent() {
  const searchParams = useSearchParams();
  const [selectedEvent, setSelectedEvent] = useState<any | null>(null);

  const [priceDetails, setPriceDetails] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<any>(null);

  useEffect(() => {
    const eventType = searchParams.get("event");
    const selected = eventType
      ? eventCategory.find((e) => {
          const a = e.title.toLowerCase();
          const b = eventType.toLowerCase();
          return e.title.toLowerCase() === eventType.toLowerCase();
        })
      : null;
    if (!selected) {
      window.location.href = "#events";
    }
    setSelectedEvent(selected);
  }, [selectedEvent, searchParams]);
  const getPriceDetails = (priceDetails: any, form: any) => {
    setPriceDetails(priceDetails);
    setFormData(form);
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
                  <PaymentSummary price={priceDetails || 0} platformFee={10} />
                </>
              ) : (
                <PaymentSummary
                  price={selectedEvent?.price || 0}
                  platformFee={21}
                />
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
