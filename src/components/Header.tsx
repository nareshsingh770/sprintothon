"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-[rgb(var(--background))] border-b border-gray-200 shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link
          href="/"
          className="text-2xl font-bold text-orange-600"
          onClick={closeMenu}
        >
          <img src={"/logo.png"} alt="logo" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-orange-600 font-medium">
            Home
          </Link>
          <Link href="/#aboutus" className="text-orange-600 font-medium">
            About Us
          </Link>
          <Link href="/#events" className="text-orange-600 font-medium">
            Events
          </Link>
          <Link href="/contact-us" className="text-orange-600 font-medium">
            Contact Us
          </Link>
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-orange-400" />
            ) : (
              <Menu className="h-6 w-6 text-orange-400" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden border-t bg-[rgb(var(--background))]">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              href="/"
              className="px-4 py-2 rounded-lg hover:bg-muted transition-colors text-orange-400"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              href="/#aboutus"
              className="px-4 py-2 rounded-lg hover:bg-muted transition-colors text-orange-400"
              onClick={closeMenu}
            >
              About Us
            </Link>
            <Link
              href="/#events"
              className="px-4 py-2 rounded-lg hover:bg-muted transition-colors text-orange-400"
              onClick={closeMenu}
            >
              Events
            </Link>
            <Link
              href="/contact-us"
              className="px-4 py-2 rounded-lg hover:bg-muted transition-colors text-orange-400"
              onClick={closeMenu}
            >
              Contact Us
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
