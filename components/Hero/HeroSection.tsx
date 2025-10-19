import Link from "next/link";
import { ArrowRight, Shield, Zap, Lock, Fingerprint } from "lucide-react";
import { H1, H3, P } from "../Typography";

export default function HeroSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-center mb-5 h-[70vh] ">
        <div className="glass-card p-8 border-dashed border-4 shadow-lg m-4">
          <H1 className="font-bold text-white leading-tight m-4">
            Experience the Future of
            <span className="text-blue-600 block text-4xl md:text-7xl mt-5 ">
              Passwordless Authentication
            </span>
          </H1>

          <P className="text-lg text-gray-100 leading-relaxed mt-4 p-4">
            Discover WebAuthn passkeys - a secure, convenient, and
            phishing-resistant way to authenticate without passwords.
          </P>

          <div className="p-4">
            <Link
              href="/passkey"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Fingerprint className="w-5 h-5" />
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
