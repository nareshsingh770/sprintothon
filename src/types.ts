import { z } from "zod";

// Contact Form Schema
export const contactFormSchema = z.object({
  fullname: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .regex(/^[a-zA-Z\s]+$/, "Full name can only contain letters"),
  email: z.string().email("Please enter a valid email address"),
  mobile: z
    .string()
    .regex(
      /^\+?[1-9]\d{9,14}$/,
      "Please enter a valid mobile number (10-15 digits)"
    ),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Registration Form Schema
export const registrationFormSchema = z.object({
  firstname: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .regex(/^[a-zA-Z]+$/, "First name can only contain letters"),
  lastname: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .regex(/^[a-zA-Z]+$/, "Last name can only contain letters"),
  gender: z.enum(["male", "female", "Transgender", "Prefer Not to Say"], {
    message: "Please select a gender",
  }),
  tShirtSize: z.enum(["XS", "S", "M", "L", "XL", "XXL", "XXXL", "4XL", "5XL"], {
    message: "Please select a t-shirt size",
  }),
  marathonCategory: z.string().min(1, "Please select a marathon category"),
  mobile: z
    .string()
    .regex(
      /^\+?[1-9]\d{9,14}$/,
      "Please enter a valid mobile number (10-15 digits)"
    ),
  email: z.string().email("Please enter a valid email address"),
  age: z.string().refine((val) => {
    const num = parseInt(val);
    return !isNaN(num) && num >= 5 && num <= 120;
  }, "Please enter a valid age between 5 and 120"),
  country: z.literal("india"),
  address: z.string().min(10, "Address must be at least 10 characters"),
  pincode: z.string().regex(/^\d{6}$/, "Please enter a valid 6-digit pincode"),
  message: z.string().optional(),
  acknowledgment: z.boolean().refine((val) => val === true, {
    message: "You must acknowledge the terms and conditions",
  }),
  type: z.string(),
});

export type RegistrationFormData = z.infer<typeof registrationFormSchema>;

export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  screenshot: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}
