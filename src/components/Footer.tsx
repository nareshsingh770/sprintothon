import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Github,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted bg-stone-800">
      <div className="container mx-auto px-4 py-12 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div className="space-y-4">
            <Link className="block mb-4" href={"/"}>
              <img src={"/logo.png"} alt="logo" />
            </Link>
            <p className="text-muted-foreground">
              Building digital excellence with cutting-edge technology and
              innovative solutions.
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/people/Next-Generation-Software/61582076636712/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[rgb(var(--background))] hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-orange-600" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[rgb(var(--background))] hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-orange-600" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-600">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#aboutus"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/#events"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/#team"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Team
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-600">
              Support
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/terms"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/cancellation"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Cancellation and Refund
                </a>
              </li>
              <li>
                <a
                  href="mailto:connect@sprintothon.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact Support
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@sprintothon.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-600">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground">
                <Mail className="h-5 w-5 mt-0.5 text-orange-600" />
                <a
                  href="mailto:connect@sprintothon.com"
                  className="hover:text-primary transition-colors"
                >
                  connect@sprintothon.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <Phone className="h-5 w-5 mt-0.5 text-orange-600" />
                <a
                  href="tel:+919582740454"
                  className="hover:text-primary transition-colors"
                >
                  +91 9582740454
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 mt-0.5 text-orange-600" />
                <span>
                  Laxmi Nagar
                  <br />
                  East Delhi, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              ©2025. All rights reserved. Design and Developed by{" "}
              <a
                href="https://nexgensoft.co.in/"
                className="text-orange-600 hover:underline"
              >
                NextGenSoft
              </a>
              .
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/cancellation"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Cancellation and Refund
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
