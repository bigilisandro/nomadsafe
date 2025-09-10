import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <span className="text-lg sm:text-xl font-bold font-black-ops-one">NomadSafe .</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted companion for protecting your electronic devices during your travels as a digital nomad.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#how-it-works" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                  How it works
                </Link>
              </li>
              <li>
                <Link href="#what-it-covers" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                  What it covers
                </Link>
              </li>
              <li>
                <Link href="#plans" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                  Plans
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            © 2025 NomadSafe. All rights reserved. Made with ❤️ for digital nomads worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
}
