"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Fingerprint } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="py-4 px-4 shadow-md backdrop-blur-sm  sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Fingerprint className="w-5 h-5" />
            Passkey Demo
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/get-started"
              className="font-bold hover:text-gray-900 px-3 py-2 rounded-md text-md transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/passkey"
              className="font-bold hover:text-gray-900 px-3 py-2 rounded-md text-md transition-colors"
            >
              Passkey
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
              <Link
                href="/get-started"
                className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
              <Link
                href="/passkey"
                className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Passkey
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
