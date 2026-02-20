import { Instagram, Linkedin, Youtube, Twitter } from 'lucide-react';

const quickLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Story', href: '#story' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { label: 'Instagram', icon: Instagram, href: '#' },
  { label: 'LinkedIn', icon: Linkedin, href: '#' },
  { label: 'YouTube', icon: Youtube, href: '#' },
  { label: 'X / Twitter', icon: Twitter, href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-white/5">
      <div className="section-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 - Brand */}
          <div>
            <div>
              <span className="font-display font-bold text-xl text-white">
                DRIVEN
              </span>
              <span className="font-display font-light text-xl text-brand-purple-light">
                CREATIONS
              </span>
            </div>
            <p className="text-text-secondary text-sm mt-4 italic">
              Stay Driven.
            </p>
            <p className="text-text-muted text-sm mt-2">
              Building brands that fight for attention &mdash; and win.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-widest mb-4">
              Navigate
            </h4>
            <nav>
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-text-secondary hover:text-brand-purple-light transition-colors text-sm block mb-2"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3 - Social */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-widest mb-4">
              Follow Us
            </h4>
            <nav>
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="flex items-center gap-2 text-text-secondary hover:text-brand-purple-light transition-colors text-sm mb-2"
                  >
                    <Icon size={16} />
                    {social.label}
                  </a>
                );
              })}
            </nav>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-widest mb-4">
              Get In Touch
            </h4>
            <p className="text-text-secondary text-sm mb-2">Maryland, USA</p>
            <a
              href="mailto:hello@drivencreations.com"
              className="text-text-secondary hover:text-brand-purple-light text-sm mb-2 block"
            >
              hello@drivencreations.com
            </a>
            <p className="text-text-muted text-sm italic">
              Let&apos;s build something great.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs">
            &copy; 2025 Driven Creations. All rights reserved.
          </p>
          <p className="text-text-muted text-xs">
            Powered by pixels and passion.
          </p>
        </div>
      </div>
    </footer>
  );
}
