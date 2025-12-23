"use client";

import { useState, useEffect } from "react";

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

const COUNTDOWN_DURATION = 2 * 60 * 60 * 1000; // 2 hours in milliseconds
const STORAGE_KEY = "offerCountdownStart";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Function to get or set the start time in localStorage
    const getStartTime = (): number => {
      if (typeof window === "undefined") return Date.now();

      const stored = localStorage.getItem(STORAGE_KEY);
      const now = Date.now();

      if (stored) {
        const startTime = parseInt(stored, 10);
        const elapsed = now - startTime;

        // If more than 2 hours have passed, reset the timer
        if (elapsed >= COUNTDOWN_DURATION) {
          localStorage.setItem(STORAGE_KEY, now.toString());
          return now;
        }
        return startTime;
      } else {
        // First visit - set the start time
        localStorage.setItem(STORAGE_KEY, now.toString());
        return now;
      }
    };

    const startTime = getStartTime();
    const targetTime = startTime + COUNTDOWN_DURATION;

    const timer = setInterval(() => {
      const now = Date.now();
      const difference = targetTime - now;

      if (difference > 0) {
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ hours, minutes, seconds });
      } else {
        // Timer expired - reset to 2 hours
        const newStartTime = Date.now();
        localStorage.setItem(STORAGE_KEY, newStartTime.toString());
        setTimeLeft({ hours: 2, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full mt-2 mb-2">
      <div className="bg-gradient-to-br from-red-600 via-orange-600 to-yellow-500 rounded-lg p-[1px] shadow-lg">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-2">
          <div className="flex items-center justify-center gap-1.5 mb-1.5">
            <div className="w-1 h-1 bg-red-500 rounded-full animate-pulse"></div>
            <p className="text-white text-[0.6rem] font-bold tracking-wider uppercase">
              Limited Time Offer
            </p>
            <div className="w-1 h-1 bg-red-500 rounded-full animate-pulse"></div>
          </div>
          <div className="flex gap-1.5 justify-center items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600 rounded blur-sm opacity-60 group-hover:opacity-100 transition"></div>
              <div className="relative bg-gray-900 rounded px-2 py-1 min-w-[45px]">
                <div className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-red-500 text-center">
                  {String(timeLeft.hours).padStart(2, "0")}
                </div>
                <div className="text-[0.5rem] text-gray-400 font-semibold text-center uppercase">
                  Hours
                </div>
              </div>
            </div>
            <div className="text-orange-500 text-base font-bold animate-pulse">
              :
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600 rounded blur-sm opacity-60 group-hover:opacity-100 transition"></div>
              <div className="relative bg-gray-900 rounded px-2 py-1 min-w-[45px]">
                <div className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-red-500 text-center">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </div>
                <div className="text-[0.5rem] text-gray-400 font-semibold text-center uppercase">
                  Mins
                </div>
              </div>
            </div>
            <div className="text-orange-500 text-base font-bold animate-pulse">
              :
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600 rounded blur-sm opacity-60 group-hover:opacity-100 transition"></div>
              <div className="relative bg-gray-900 rounded px-2 py-1 min-w-[45px]">
                <div className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-red-500 text-center">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </div>
                <div className="text-[0.5rem] text-gray-400 font-semibold text-center uppercase">
                  Secs
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
