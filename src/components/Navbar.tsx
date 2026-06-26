import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Mail, Globe, Award } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const scrollPosition = window.scrollY + 140;
      for (const item of navItems) {
        const targetId = item.href.substring(1);
        const element = document.getElementById(targetId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(targetId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // height of sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setIsOpen(false);
      setActiveSection(targetId);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Utility Bar - High Contrast Blue (Exactly like reference image) */}
      <div 
        className={`bg-blue-800 text-white text-xs py-2 px-4 transition-all duration-300 overflow-hidden ${
          scrolled ? 'h-0 opacity-0 pointer-events-none py-0' : 'h-10 opacity-100'
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center h-full">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-blue-100">
              <MapPin className="w-3.5 h-3.5" />
              <span>Harare Office & Workshop, Zimbabwe</span>
            </span>
            <span className="hidden sm:flex items-center gap-1.5 text-blue-100 border-l border-blue-700/60 pl-6">
              <Phone className="w-3.5 h-3.5" />
              <span>+263 712 263 907</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-blue-100 border-l border-blue-700/60 pl-6">
              <Mail className="w-3.5 h-3.5" />
              <span>amrucondesigns7@gmail.com</span>
            </span>
          </div>
          <div className="flex items-center gap-4 text-blue-200">
            <span className="font-semibold text-[10px] uppercase tracking-wider text-blue-100">Pure Quality Craftsmanship</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-md py-3 border-b border-slate-200'
            : 'bg-white py-5 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="block transition-transform hover:scale-[1.01]">
              <Logo />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`text-sm font-bold tracking-wide transition-colors duration-200 relative py-1 uppercase ${
                      isActive
                        ? 'text-blue-700'
                        : 'text-slate-700 hover:text-blue-700'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-700 rounded-full animate-pulse" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="bg-blue-700 text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg hover:bg-blue-800 transition-all duration-250 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
              >
                Get A Quote
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-800 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-slate-100 animate-in fade-in slide-in-from-top-5 duration-200">
          <div className="px-4 py-5 space-y-2 flex flex-col">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-base font-bold uppercase tracking-wide px-4 py-2.5 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-800'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <div className="pt-4 border-t border-slate-100">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="block w-full bg-blue-700 text-white text-center font-bold uppercase tracking-wider py-3.5 rounded-lg hover:bg-blue-800 transition-colors"
              >
                Get A Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
