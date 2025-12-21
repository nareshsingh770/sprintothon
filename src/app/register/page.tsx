"use client";

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
      <div className="max-w-5xl mx-auto space-y-6 px-3 mb-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Marathon Registration Form
          {selectedEvent ? ` - ${selectedEvent.title}` : ""}
        </h2>
        {selectedEvent && (
          <div className="w-full mb-8 bg-[rgb(var(--secondary))] rounded-lg overflow-hidden">
            <div className="grid md:grid-cols-8 gap-6">
              {/* Image Section */}
              <div className="md:col-span-2">
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
              </div>
            </div>
          </div>
        )}
        <RegistrationForm
          selectedEvent={selectedEvent}
          eventonChange={setSelectedEvent}
        />
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
