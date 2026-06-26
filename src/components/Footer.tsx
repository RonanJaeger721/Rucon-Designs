import React from 'react';
import { Mail, Phone, MessageSquare } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-8 items-center border-b border-slate-850 pb-8">
          
          {/* Column 1: Logo & Tagline */}
          <div className="md:col-span-5 space-y-3">
            <Logo light={true} />
            <p className="text-xs text-slate-500 font-sans max-w-sm leading-relaxed">
              Premium physical branding, custom sign writing, exhibition stands, and architectural sign management. Handcrafted and safely installed nationwide.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-4 flex gap-6 md:justify-center">
            <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="text-xs hover:text-white transition-colors">Home</a>
            <a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="text-xs hover:text-white transition-colors">About</a>
            <a href="#services" onClick={(e) => handleLinkClick(e, '#services')} className="text-xs hover:text-white transition-colors">Services</a>
            <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="text-xs hover:text-white transition-colors">Contact</a>
          </div>

          {/* Column 3: Accreditation Credits */}
          <div className="md:col-span-3 text-left md:text-right text-[10px] text-slate-500">
            <p className="font-semibold text-slate-400 uppercase tracking-widest font-display">Rucon Designs</p>
            <p className="mt-0.5">Harare, Zimbabwe</p>
            <p className="mt-0.5">&copy; {currentYear}. All rights reserved.</p>
          </div>

        </div>

        {/* Micro footer copyright */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] text-slate-600 font-sans gap-4">
          <span>Registered in Zimbabwe &bull; Pure Quality Craftsmanship</span>
          <span>Designed with high-density materials built to last.</span>
        </div>
      </div>
    </footer>
  );
}
