"use client";

import { useState } from "react";
import { contactFormSchema, type ContactFormData } from "../types";
import { Send } from "lucide-react";
import { z } from "zod";

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullname: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("idle");
    setErrors({});

    // Validate with Zod
    try {
      contactFormSchema.parse(formData);
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
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwCN4-tKJWluwlu7AJVtFYRjGU-aT1hidGGYJUx6xx0eh2Cdp78TeMIqCjPTLnVa5jgfQ/exec",
        {
          method: "POST",
          mode: "no-cors", // Required for Google Apps Script
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      console.log(response, "response_response");
      setSubmitStatus("success");
      setFormData({ fullname: "", email: "", mobile: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      <div>
        <label htmlFor="fullname" className="block text-sm font-medium mb-2">
          Full Name
        </label>
        <input
          id="fullname"
          type="text"
          placeholder="John Doe"
          value={formData.fullname}
          onChange={(e) => {
            setFormData({ ...formData, fullname: e.target.value });
            if (errors.fullname) setErrors({ ...errors, fullname: "" });
          }}
          className={`w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary outline-none transition ${
            errors.fullname ? "border-red-500" : ""
          }`}
        />
        {errors.fullname && (
          <p className="text-red-600 dark:text-red-400 text-sm mt-1">
            {errors.fullname}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="john@example.com"
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
            if (errors.email) setErrors({ ...errors, email: "" });
          }}
          className={`w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary outline-none transition ${
            errors.email ? "border-red-500" : ""
          }`}
        />
        {errors.email && (
          <p className="text-red-600 dark:text-red-400 text-sm mt-1">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="mobile" className="block text-sm font-medium mb-2">
          Mobile
        </label>
        <input
          id="mobile"
          type="tel"
          placeholder="+1 234 567 8900"
          value={formData.mobile}
          onChange={(e) => {
            setFormData({ ...formData, mobile: e.target.value });
            if (errors.mobile) setErrors({ ...errors, mobile: "" });
          }}
          className={`w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary outline-none transition ${
            errors.mobile ? "border-red-500" : ""
          }`}
        />
        {errors.mobile && (
          <p className="text-red-600 dark:text-red-400 text-sm mt-1">
            {errors.mobile}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          placeholder="Your message..."
          value={formData.message}
          onChange={(e) => {
            setFormData({ ...formData, message: e.target.value });
            if (errors.message) setErrors({ ...errors, message: "" });
          }}
          rows={5}
          className={`w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary outline-none transition resize-none ${
            errors.message ? "border-red-500" : ""
          }`}
        />
        {errors.message && (
          <p className="text-red-600 dark:text-red-400 text-sm mt-1">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-pink-600 text-white border-2 cursor-pointer border-pink-600 rounded-lg font-semibold hover:bg-pink-700 transition-all hover:scale-105 backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
        <Send className="h-4 w-4" />
      </button>

      {submitStatus === "success" && (
        <p className="text-green-600 dark:text-green-400 text-center">
          Message sent successfully!
        </p>
      )}
      {submitStatus === "error" && (
        <p className="text-red-600 dark:text-red-400 text-center">
          Failed to send message. Please try again.
        </p>
      )}
    </form>
  );
}
