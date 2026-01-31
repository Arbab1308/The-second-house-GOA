'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Experience', href: '#experience' },
    { label: 'Culinary', href: '#culinary' },
    { label: 'Spaces', href: '#spaces' },
    { label: 'Menu', href: '#menu' },
    { label: 'Story', href: '#story' },
    { label: 'Reserve', href: '#reserve' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link
            href="/"
            className="text-2xl font-serif font-bold text-primary hover:text-secondary transition-colors"
          >
            Second House
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-primary hover:text-secondary transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#reserve"
              className="px-6 py-2 bg-secondary text-white rounded-sm hover:bg-secondary/90 transition-colors font-medium"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-background border-b border-border pb-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-2 text-sm font-medium text-primary hover:text-secondary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="px-4 pt-2">
              <a
                href="#reserve"
                className="block w-full px-6 py-2 bg-secondary text-white rounded-sm hover:bg-secondary/90 transition-colors font-medium text-center"
              >
                Book Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
