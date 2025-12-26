"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { z } from "zod";

const sponsorSchema = z.object({
  iam: z.enum(["Brand", "Influencer", "YouTuber"]),
  fullname: z.string().min(2, "Full name must be at least 2 characters"),
  brandName: z.string().min(2, "Brand name must be at least 2 characters"),
  facebook: z.string().optional(),
  instagram: z.string().optional(),
  youtube: z.string().optional(),
  other: z.string().optional(),
  mobile: z
    .string()
    .regex(/^\+?[1-9]\d{9,14}$/, "Please enter a valid mobile number"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

type SponsorForm = z.infer<typeof sponsorSchema>;

export default function SponsorsPage() {
  const [form, setForm] = useState<SponsorForm>({
    iam: "Brand",
    fullname: "",
    brandName: "",
    facebook: "",
    instagram: "",
    youtube: "",
    other: "",
    mobile: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    debugger;
    e.preventDefault();
    setErrors({});
    setStatus("idle");

    try {
      sponsorSchema.parse(form);
    } catch (err) {
      if (err instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        err.issues.forEach((issue) => {
          const key = issue.path[0] as string;
          fieldErrors[key] = issue.message;
        });
        setErrors(fieldErrors);
        return;
      }
    }

    setIsSubmitting(true);
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxLdI1r1l86nVSArb-Un0gg3QKGw36pqtTK06P8QFJS9hkH2qejFvRfemhqlxTP6HY/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ type: "sponsor", ...form }),
        }
      );
      setStatus("success");
      setForm({
        iam: "Brand",
        fullname: "",
        brandName: "",
        facebook: "",
        instagram: "",
        youtube: "",
        other: "",
        mobile: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[rgb(var(--background))] pt-36">
      <div className="container mx-auto px-3 pb-12">
        <h2 className="text-3xl font-bold text-center mb-6">Sponsorships</h2>

        <p className="text-center mb-4">
          For sponsorships & collaborations please reach out to
          <strong className="px-1"> connect@sprintothon.com</strong> or fill the
          form below.
        </p>

        <p className="text-center mb-8">
          If you are an Influencer or YouTuber who wants to partner with us,
          please reach out to the same email or complete the form below.
        </p>

        <div className="max-w-3xl mx-auto bg-[rgb(var(--secondary))] p-6 rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">I am A</label>
              <select
                value={form.iam}
                onChange={(e) =>
                  setForm({ ...form, iam: e.target.value as any })
                }
                className="w-full px-4 py-3 rounded-lg border bg-[rgb(var(--background))] outline-none"
              >
                <option>Brand</option>
                <option>Influencer</option>
                <option>YouTuber</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                value={form.fullname}
                onChange={(e) => setForm({ ...form, fullname: e.target.value })}
                className={`w-full px-4 py-3 rounded-lg border bg-[rgb(var(--background))] outline-none ${
                  errors.fullname ? "border-red-500" : ""
                }`}
                placeholder="John Doe"
              />
              {errors.fullname && (
                <p className="text-red-600 text-sm mt-1">{errors.fullname}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Brand Name
              </label>
              <input
                value={form.brandName}
                onChange={(e) =>
                  setForm({ ...form, brandName: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg border bg-[rgb(var(--background))] outline-none"
                placeholder="Your brand / company name"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Facebook URL
                </label>
                <input
                  value={form.facebook}
                  onChange={(e) =>
                    setForm({ ...form, facebook: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border bg-[rgb(var(--background))] outline-none"
                  placeholder="https://facebook.com/yourpage"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Instagram URL
                </label>
                <input
                  value={form.instagram}
                  onChange={(e) =>
                    setForm({ ...form, instagram: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border bg-[rgb(var(--background))] outline-none"
                  placeholder="https://instagram.com/yourhandle"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                YouTube URL
              </label>
              <input
                value={form.youtube}
                onChange={(e) => setForm({ ...form, youtube: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border bg-[rgb(var(--background))] outline-none"
                placeholder="https://youtube.com/channel/..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Other</label>
              <input
                value={form.other}
                onChange={(e) => setForm({ ...form, other: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border bg-[rgb(var(--background))] outline-none"
                placeholder="Any other links or notes"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Mobile Number
                </label>
                <input
                  value={form.mobile}
                  onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg border bg-[rgb(var(--background))] outline-none ${
                    errors.mobile ? "border-red-500" : ""
                  }`}
                  placeholder="+91XXXXXXXXXX"
                />
                {errors.mobile && (
                  <p className="text-red-600 text-sm mt-1">{errors.mobile}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email address
                </label>
                <input
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg border bg-[rgb(var(--background))] outline-none ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                className={`w-full px-4 py-3 rounded-lg border bg-[rgb(var(--background))] outline-none resize-none ${
                  errors.message ? "border-red-500" : ""
                }`}
                placeholder="Tell us briefly why you'd like to partner / any proposal"
              />
              {errors.message && (
                <p className="text-red-600 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-orange-600 text-white border-2 cursor-pointer border-pink-600 rounded-lg font-semibold hover:bg-orange-700 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Inquiry"}
              <Send className="h-4 w-4" />
            </button>

            {status === "success" && (
              <p className="text-green-600 text-center">
                Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 text-center">
                Failed to send message. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
