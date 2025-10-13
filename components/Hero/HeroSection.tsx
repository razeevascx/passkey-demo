import Link from "next/link";
import { ArrowRight, Shield, Zap, Lock, Fingerprint } from "lucide-react";
import { H1, H3, P } from "../Typography";

export default function HeroSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Content */}`
      <div className="flex items-center justify-center mb-5 h-[70vh]">
        <div className="max-w-3xl">
          <H1 className="font-bold text-white leading-tight ">
            Experience the Future of
            <span
              className="text-blue-600 block text-4xl md:text-7xl  inline-f
"
            >
              Passwordless Authentication
            </span>
          </H1>

          <P className="text-lg text-gray-100 leading-relaxed">
            Discover WebAuthn passkeys - a secure, convenient, and
            phishing-resistant way to authenticate without passwords.
          </P>

          <div className="pt-4">
            <Link
              href="/get-started"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Fingerprint className="w-5 h-5" />
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>{" "}
        <div className="flex-1 flex justify-center lg:justify-end items-center">
          <Fingerprint className="size-80  " />
        </div>
      </div>
    </div>
  );
}
