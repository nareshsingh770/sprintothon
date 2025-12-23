"use client";

import CountdownTimer from "@/components/CountdownTimer";
import RegistrationForm from "@/components/RegistrationForm";
import { eventCategory } from "@/lib/appConstant";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

function RegistrationContent() {
  const searchParams = useSearchParams();
  const [selectedEvent, setSelectedEvent] = useState<any | null>(null);

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

  return (
    <div className="bg-[rgb(var(--background))] pt-36">
      <div className="container mx-auto space-y-6 px-3 pb-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Marathon Registration Form
          {selectedEvent ? ` - ${selectedEvent.title}` : ""}
        </h2>
        <div className="mb-6">
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded">
            <strong>Disclaimer:</strong> Please provide correct details to share
            event details. If incorrect details are provided your entry might be
            disqualified.
          </div>
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
                        ₹{selectedEvent.price}
                      </span>
                    </div>
                    <CountdownTimer />
                  </div>
                </div>
              </div>
            )}
            <RegistrationForm
              selectedEvent={selectedEvent}
              eventonChange={setSelectedEvent}
            />
          </div>
          <div className="lg:col-span-1">
            {selectedEvent && (
              <div className="bg-[rgb(var(--secondary))] rounded-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-4">Payment Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Ticket Price</span>
                    <span className="font-medium">₹{selectedEvent.price}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Platform Fee</span>
                    <span className="font-medium">+₹21</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">GST (18%)</span>
                    <span className="font-medium">
                      ₹{Math.round((selectedEvent.price + 21) * 0.18)}
                    </span>
                  </div>
                  <div className="border-t border-gray-600 pt-3 mt-3">
                    <div className="flex justify-between">
                      <span className="font-bold text-lg">Total Amount</span>
                      <span className="font-bold text-lg text-pink-600">
                        ₹{selectedEvent.price}
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
              </div>
            )}
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
