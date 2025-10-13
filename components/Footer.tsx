import Link from "next/link";
import { Github, Twitter, Globe } from "lucide-react";
import { H3, List, P } from "./Typography";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <H3>Passkey Demo</H3>
            <P>
              A demonstration of WebAuthn passkey implementation for secure,
              passwordless authentication.
            </P>
          </div>

          {/* Quick Links */}
          <div>
            <H3>Quick Links</H3>
            <List>
              <li>
                <Link href="/get-started" className="text-sm transition-colors">
                  Get Started
                </Link>
              </li>
              <li>
                <Link href="/passkey" className="text-sm transition-colors">
                  Passkey
                </Link>
              </li>
            </List>
          </div>

          <div>
            <H3>Connect</H3>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://webauthn.guide"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <P className="text-center text-gray-600 text-sm">
            © {new Date().getFullYear()} Passkey Demo. Built with Next.js and
            WebAuthn.
          </P>
        </div>
      </div>
    </footer>
  );
}
