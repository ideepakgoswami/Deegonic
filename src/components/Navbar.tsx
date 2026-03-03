"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "Process", href: "/process" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm"
          : "bg-transparent border-b-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-[72px] items-center relative">
          <div className="shrink-0 flex items-center">
            <Link
              href="/"
              className="font-display text-2xl font-bold text-primary tracking-tight"
            >
              DEEGONIC<span className="text-accent">.</span>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-10 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[15px] font-semibold text-slate-600 hover:text-primary transition-colors tracking-wide"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="bg-primary text-white px-7 py-2.5 rounded-lg text-[15px] font-bold hover:bg-primary-dark transition-all shadow-none active:scale-[0.98]"
            >
              Start a project
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground p-2 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-border animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-8 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-5 text-base font-bold text-foreground hover:text-primary border-b border-border/10 last:border-0"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-6 px-3">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-primary text-white px-6 py-4 rounded-xl text-md font-bold hover:bg-primary-dark transition-all shadow-sm"
              >
                Start a project
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
