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
    <header className="fixed top-0 z-50 w-full bg-background backdrop-blur-sm shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="text-2xl font-bold" onClick={closeMenu}>
          <img className={"h-12"} src={"/images/logo.png"} alt="logo" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            style={{ color: "#fff" }}
            className="hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            href="/portfolio"
            style={{ color: "#fff" }}
            className="hover:text-primary transition-colors"
          >
            Portfolio
          </Link>
          <Link
            href="/blogs"
            style={{ color: "#fff" }}
            className="hover:text-primary transition-colors"
          >
            Blogs
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
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden border-t bg-background">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              href="/"
              className="px-4 py-2 rounded-lg hover:bg-muted transition-colors text-white"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              href="/portfolio"
              className="px-4 py-2 rounded-lg hover:bg-muted transition-colors text-white"
              onClick={closeMenu}
            >
              Portfolio
            </Link>
            <Link
              href="/blogs"
              className="px-4 py-2 rounded-lg hover:bg-muted transition-colors text-white"
              onClick={closeMenu}
            >
              Blogs
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
