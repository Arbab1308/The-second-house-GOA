'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Second House</h3>
            <p className="text-gray-300 leading-relaxed text-sm">
              Where culinary excellence meets innovative bartending in the heart of Goa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-secondary/30 pb-2">
              Explore
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#experience"
                  className="text-gray-300 hover:text-secondary transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#culinary"
                  className="text-gray-300 hover:text-secondary transition-colors"
                >
                  Culinary
                </a>
              </li>
              <li>
                <a
                  href="#spaces"
                  className="text-gray-300 hover:text-secondary transition-colors"
                >
                  Spaces
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className="text-gray-300 hover:text-secondary transition-colors"
                >
                  Menu
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-secondary/30 pb-2">
              Hours
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Tuesday - Thursday: 6:00 PM - 11:00 PM</li>
              <li>Friday - Saturday: 6:00 PM - 12:00 AM</li>
              <li>Sunday: 6:00 PM - 11:00 PM</li>
              <li>Monday: Closed</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-secondary/30 pb-2">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:+919876543210"
                  className="text-gray-300 hover:text-secondary transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@secondhousegoa.com"
                  className="text-gray-300 hover:text-secondary transition-colors"
                >
                  hello@secondhousegoa.com
                </a>
              </li>
              <li className="text-gray-300">
                Goa, India
              </li>
            </ul>
          </div>
        </div>

        {/* Featured Image Section */}
        <div className="mb-12">
          <h4 className="text-lg font-semibold mb-6 border-b border-secondary/30 pb-4">
            The Bunker
          </h4>
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
            <Image
              src="/images/bartender-bunker-showcase.jpg"
              alt="The Bartender's Bunker - where innovation happens with premium cocktails and craft tools"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              quality={85}
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>
          <p className="text-gray-300 text-sm mt-4">
            Our bartender's laboratory - where tradition meets innovation
          </p>
        </div>

        {/* Social Links */}
        <div className="mb-12 text-center">
          <h4 className="text-lg font-semibold mb-6">Follow Our Journey</h4>
          <div className="flex justify-center gap-6">
            <a
              href="https://instagram.com/thesecondhousegoa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-secondary transition-colors text-2xl"
              title="Instagram"
            >
              📷
            </a>
            <a
              href="https://facebook.com/secondhousegoa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-secondary transition-colors text-2xl"
              title="Facebook"
            >
              📘
            </a>
            <a
              href="https://wa.me/919876543210"
              className="text-gray-300 hover:text-secondary transition-colors text-2xl"
              title="WhatsApp"
            >
              💬
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary/30 pt-8"></div>

        {/* Bottom Links */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2026 Second House Goa. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              href="/"
              className="text-gray-300 hover:text-secondary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/"
              className="text-gray-300 hover:text-secondary transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/"
              className="text-gray-300 hover:text-secondary transition-colors"
            >
              Cancellation Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-gray-400 text-xs">
          Crafted with passion for unforgettable moments | Second House Goa
        </div>
      </div>
    </footer>
  )
}
