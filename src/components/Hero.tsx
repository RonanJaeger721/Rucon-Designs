import React from 'react';
import { ArrowRight, Award, ShieldCheck, Layers, Cpu, Compass } from 'lucide-react';
import { IMAGES } from '../data';

export default function Hero() {
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

  const scrollToServices = () => {
    const element = document.getElementById('services');
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

  // 4 Premium Pillars to overlap into the next section (Matching Reference Image)
  const pillars = [
    {
      icon: Cpu,
      title: 'Precision Fabrication',
      desc: 'Heavy industrial CNC steel routing and high-spec custom fabrication.'
    },
    {
      icon: Layers,
      title: 'UV-Stable Materials',
      desc: 'Strictly UV-stable imported cast acrylics and heavy weathering laminates.'
    },
    {
      icon: ShieldCheck,
      title: 'Certified Rigging',
      desc: 'Safe, certified high-altitude mounting and structural sign anchoring.'
    },
    {
      icon: Compass,
      title: 'Brand Consistency',
      desc: 'Flawless execution rendering your corporate guideline with 100% precision.'
    }
  ];

  return (
    <section 
      id="home" 
      className="relative pt-40 pb-28 sm:pt-48 sm:pb-36 lg:pt-56 lg:pb-48 overflow-visible bg-cover bg-center"
      style={{ backgroundImage: `url('${IMAGES.hero}')` }}
    >
      {/* Dark Gradient Overlay to ensure stunning high-contrast white text */}
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[2px] -z-10" />
      {/* Subtle bottom blue glow */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-blue-950/20 to-transparent pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-10">
        
        {/* Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-400 text-xs font-extrabold uppercase tracking-widest animate-fade-in">
          <Award className="w-3.5 h-3.5 text-blue-400" />
          <span>Rucon Designs &bull; Your Benchmark of Quality</span>
        </div>

        {/* Huge High-Contrast Display Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-[1.08] tracking-tight max-w-4xl mx-auto drop-shadow-md">
          Professional Signage & <br />
          <span className="text-blue-400 bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">Branding Solutions</span>
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-xl text-slate-300 font-sans max-w-3xl mx-auto leading-relaxed drop-shadow">
          Premium physical branding, custom sign writing, exhibition stands, and architectural sign management. Custom engineered and safely installed nationwide across Zimbabwe.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2 max-w-md mx-auto">
          <button
            onClick={scrollToContact}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg hover:shadow-blue-500/20 transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
          >
            <span>Get A Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={scrollToServices}
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-xl transition-all duration-300 active:scale-95 border border-white/20 backdrop-blur-sm cursor-pointer"
          >
            <span>Our Services</span>
          </button>
        </div>

        {/* Floating Pillars Overlay Grid (Exactly like reference image overlapping layout) */}
        <div className="pt-16 lg:pt-24">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left transform translate-y-16 sm:translate-y-24 lg:translate-y-32">
            {pillars.map((pil, idx) => {
              const Icon = pil.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-inner">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="font-display font-extrabold text-base text-slate-900 group-hover:text-blue-700 transition-colors">
                        {pil.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 font-sans leading-relaxed">
                        {pil.desc}
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 flex items-center text-xs font-bold text-blue-600 group-hover:text-blue-800 transition-colors mt-auto">
                    <span>Learn More</span>
                    <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
