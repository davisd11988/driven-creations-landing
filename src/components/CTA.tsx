'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import SectionTag from '@/components/ui/SectionTag';
import Button from '@/components/ui/Button';

export default function CTA() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', projectType: '', message: '' });
    }, 3000);
  };

  const inputStyles =
    'glass rounded-xl px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-text-muted focus:border-brand-purple focus:outline-none focus:ring-2 focus:ring-brand-purple/20 transition-all w-full';

  return (
    <section id="contact" className="relative bg-gradient-to-b from-brand-bg-purple to-brand-dark">
      {/* Decorative background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-gradient-radial from-brand-purple/10 to-transparent blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        {/* Content */}
        <div className="max-w-2xl mx-auto text-center">
          <SectionTag>Let&apos;s Connect</SectionTag>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
            Ready to Go Beyond?
          </h2>
          <p className="text-text-secondary text-lg mb-10">
            Let&apos;s create something that makes your competition nervous.
          </p>

          {/* Contact form */}
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name */}
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputStyles}
                required
              />

              {/* Email */}
              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputStyles}
                required
              />

              {/* Project Type */}
              <select
                value={form.projectType}
                onChange={(e) =>
                  setForm({ ...form, projectType: e.target.value })
                }
                className={`${inputStyles} col-span-full appearance-none cursor-pointer`}
                required
              >
                <option value="" disabled>
                  Select Project Type
                </option>
                <option value="web-design">Web Design</option>
                <option value="branding">Branding</option>
                <option value="digital-marketing">Digital Marketing</option>
                <option value="full-package">Full Package</option>
                <option value="other">Other</option>
              </select>

              {/* Message */}
              <textarea
                placeholder="Tell us about your project..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                className={`${inputStyles} col-span-full resize-none`}
                required
              />

              {/* Submit */}
              <div className="col-span-full mt-2">
                {!submitted ? (
                  <Button variant="primary" size="lg" className="w-full">
                    Send Message
                  </Button>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center justify-center gap-2 text-green-400 font-medium py-3"
                  >
                    <Check size={20} />
                    Message sent! We&apos;ll be in touch.
                  </motion.div>
                )}
              </div>
            </div>
          </form>

          {/* Divider + extra buttons */}
          <div className="mt-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 h-px bg-white/10" />
              <span className="text-text-muted text-sm">Or</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>

            <div className="flex gap-4 justify-center flex-wrap">
              <Button variant="outline" href="#contact">
                Schedule a Call
              </Button>
              <Button variant="secondary" href="#contact">
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
