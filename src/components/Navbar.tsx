'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/ui/Button';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Story', href: '#story' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-0.5 text-xl">
              <span className="font-display font-extrabold text-white">
                DRIVEN
              </span>
              <span className="font-display font-medium text-white/70">
                CREATIONS
              </span>
            </a>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Button variant="primary" size="sm" href="#contact">
                Get Started
              </Button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5 cursor-pointer"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <div className="w-6 h-0.5 bg-white rounded-full transition-all duration-300" />
              <div className="w-6 h-0.5 bg-white rounded-full transition-all duration-300" />
              <div className="w-4 h-0.5 bg-white rounded-full transition-all duration-300 self-end mr-1" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[80%] max-w-sm bg-brand-dark border-l border-white/10 flex flex-col"
            >
              {/* Close button */}
              <div className="flex items-center justify-between p-6">
                <span className="font-display font-bold text-white text-lg">
                  Menu
                </span>
                <button
                  className="w-8 h-8 flex items-center justify-center cursor-pointer"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <div className="relative w-5 h-5">
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white rounded-full -translate-y-1/2 rotate-45" />
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white rounded-full -translate-y-1/2 -rotate-45" />
                  </div>
                </button>
              </div>

              {/* Mobile nav links */}
              <div className="flex flex-col gap-2 px-6 flex-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
                    className="text-lg text-white/80 hover:text-white py-3 border-b border-white/5 transition-colors duration-200"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="p-6">
                <Button
                  variant="primary"
                  size="md"
                  href="#contact"
                  className="w-full"
                  onClick={() => setMobileOpen(false)}
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
