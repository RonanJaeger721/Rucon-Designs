import React from 'react';
import { School, Landmark, ShoppingBag, Factory, ArrowRight, Shield, Award } from 'lucide-react';
import { IMAGES } from '../data';

export default function About() {
  const sectors = [
    { icon: Landmark, name: 'Government Projects', desc: 'Compliant wayfinding and structural signs.' },
    { icon: School, name: 'Private & Public Schools', desc: 'Secure entrance and campus boards.' },
    { icon: ShoppingBag, name: 'Shopping Centres', desc: 'Sleek, bright backlit store fronts.' },
    { icon: Factory, name: 'Construction Sites', desc: 'Heavy-duty steel pylons and safety signage.' },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
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
    <section id="about" className="pt-36 sm:pt-44 lg:pt-52 pb-24 lg:pb-32 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Premium tall image with overlapping absolute badge (Exactly like reference image) */}
          <div className="lg:col-span-5 relative w-full">
            <div className="relative bg-slate-50 p-2.5 rounded-3xl border border-slate-100 shadow-xl overflow-hidden">
              <img
                src={IMAGES.shopfront}
                alt="Rucon Designs Shop Front Signage"
                className="w-full h-[400px] sm:h-[480px] object-cover rounded-2xl transition-transform duration-700 hover:scale-102"
                referrerPolicy="no-referrer"
              />
              {/* Overlapping Absolute Experience Badge */}
              <div className="absolute bottom-8 left-8 bg-blue-700 text-white px-6 py-5 rounded-2xl shadow-2xl flex items-center gap-4 border border-blue-500/20">
                <span className="text-4xl font-extrabold tracking-tight font-display">15+</span>
                <span className="text-xs uppercase font-bold tracking-wider leading-snug">
                  Years of<br/>Practicing
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Execution & Narrative Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-blue-700 font-bold text-xs tracking-widest uppercase">
                <span className="h-0.5 w-6 bg-blue-700" />
                <span>ABOUT OUR WORK</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-display leading-[1.1]">
                Rucon Designs Exceptional <br />
                Signage & Branding Services
              </h2>
            </div>

            <p className="text-gray-600 font-sans text-sm sm:text-base leading-relaxed">
              Rucon Designs delivers premium, high-durability physical branding and sign management services across Zimbabwe. We engineer every sign from scratch, ensuring perfect alignment with your brand guidelines and strict compliance standards.
            </p>

            <p className="text-gray-500 font-sans text-sm leading-relaxed">
              We manage the entire lifecycle of signage projects: from initial site analysis and structural drafting to heavy steel welding, CNC router cutting, precision acrylic fabrication, and safe on-site crane mounting. We never use cheap, thin vinyls; we utilize high-specification UV-stable materials designed to withstand heavy tropical sun exposure without fading.
            </p>

            {/* Feature Highlights Grid (Like reference image feature boxes) */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex gap-3 items-center p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-700">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-slate-900 font-display">Innovative Work</h4>
                  <p className="text-[11px] text-slate-500">Custom bespoke 3D & LED designs</p>
                </div>
              </div>
              <div className="flex gap-3 items-center p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-700">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-slate-900 font-display">Certified Mounting</h4>
                  <p className="text-[11px] text-slate-500">Structural safety approved rigging</p>
                </div>
              </div>
            </div>

            {/* CTA Discover More */}
            <div className="pt-4">
              <button
                onClick={scrollToContact}
                className="bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow-md transition-all duration-300 flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Discover More</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
