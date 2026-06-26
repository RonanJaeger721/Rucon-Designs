import React, { useState } from 'react';
import {
  PenTool,
  LayoutGrid,
  Truck,
  Store,
  Briefcase,
  Palette,
  Paintbrush,
  Building2,
  Milestone,
  Compass,
  ArrowRight,
  X,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { SERVICES, IMAGES } from '../data';
import { Service } from '../types';

const iconMap: Record<string, React.ComponentType<any>> = {
  PenTool,
  LayoutGrid,
  Truck,
  Store,
  Briefcase,
  Palette,
  Paintbrush,
  Building2,
  Milestone,
  Compass
};

// Rich Unsplash photos matching each corporate branding sector for maximum eye-catching visual impact (Similar to the reference image)
const serviceImages: Record<string, string> = {
  'sign-writing': 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=600&auto=format&fit=crop',
  'exhibition-stands': IMAGES.exhibition,
  'vehicle-branding': IMAGES.vehicle,
  'shop-branding': IMAGES.shopfront,
  'corporate-branding': 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop',
  'design-services': 'https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?q=80&w=600&auto=format&fit=crop',
  'painting': 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=600&auto=format&fit=crop',
  'architectural-sign-management': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop',
  'indoor-signage': IMAGES.indoor,
  'outdoor-signage': IMAGES.hero,
};

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleInquireClick = (serviceTitle: string) => {
    setSelectedService(null);

    // Scroll to contact form
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Optionally pre-fill contact form message
      const subjectInput = document.getElementById('contact-subject') as HTMLInputElement;
      if (subjectInput) {
        subjectInput.value = `Inquiry: ${serviceTitle}`;
        subjectInput.dispatchEvent(new Event('input', { bubbles: true }));
      }
    }
  };

  return (
    <section id="services" className="py-24 lg:py-32 bg-slate-50 border-b border-slate-100 relative overflow-hidden">
      {/* Wave/pattern decoration bg to add depth (Like the grid lines in the reference) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Staggered and elegant) */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-widest rounded-full">
            OUR SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-display leading-tight">
            We're Providing Quality <br className="hidden sm:inline" />
            Signage & Branding Services
          </h2>
          <div className="w-16 h-1 bg-blue-700 mx-auto rounded-full" />
        </div>

        {/* 10 Services Immersive Cards Grid (Exact matching of Roofing Mockup design) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const IconComponent = iconMap[service.iconName] || Compass;
            const cardImg = serviceImages[service.id] || 'https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?q=80&w=600&auto=format&fit=crop';
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-slate-100 hover:border-slate-200 transition-all duration-300 flex flex-col justify-between h-full overflow-hidden shadow-sm hover:shadow-xl group"
              >
                <div>
                  {/* Photo with absolute overlay badge for icon (Beautiful Roofing Style) */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={cardImg} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                    
                    {/* Overlapping circular blue icon badge on the bottom-right */}
                    <div className="absolute -bottom-5 right-6 w-12 h-12 rounded-full bg-blue-600 border-4 border-white text-white flex items-center justify-center shadow-md group-hover:bg-blue-700 transition-all duration-300 transform group-hover:scale-110 z-10">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="p-6 pt-8 space-y-3">
                    <h3 className="font-display font-extrabold text-lg text-slate-950 group-hover:text-blue-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-sans leading-relaxed line-clamp-3">
                      {service.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Learn More Action Row */}
                <div className="p-6 pt-0 border-t border-slate-100/50 mt-4 flex justify-between items-center">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 group-hover:text-blue-800 transition-colors cursor-pointer"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase">ZIM QUALITY</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Sleek Minimalist Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
          
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-slate-100 relative animate-in zoom-in-95 duration-200">
            
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-slate-100 px-6 py-4 flex justify-between items-center z-10">
              <div className="flex items-center gap-2.5">
                <div className="text-white bg-blue-600 p-2 rounded-xl">
                  {React.createElement(iconMap[selectedService.iconName] || Compass, { className: 'w-4.5 h-4.5' })}
                </div>
                <h3 className="font-display font-extrabold text-lg text-slate-950">{selectedService.title}</h3>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors"
                aria-label="Close"
              >
                <X className="w-4.5 h-4.5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-6 space-y-5 text-sm">
              <p className="text-gray-600 font-sans leading-relaxed text-xs sm:text-sm">{selectedService.longDescription}</p>

              <div className="grid sm:grid-cols-2 gap-5 pt-4 border-t border-slate-100">
                <div className="space-y-2">
                  <h4 className="font-display font-bold text-xs text-slate-800 uppercase tracking-wider">Premium Materials</h4>
                  <ul className="space-y-1.5">
                    {selectedService.materials.map((mat, i) => (
                      <li key={i} className="flex gap-1.5 items-start text-xs text-gray-500 font-sans">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-700 flex-shrink-0 mt-0.5" />
                        <span>{mat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="font-display font-bold text-xs text-slate-800 uppercase tracking-wider">Applications</h4>
                  <ul className="space-y-1.5">
                    {selectedService.typicalProjects.map((proj, i) => (
                      <li key={i} className="flex gap-1.5 items-start text-xs text-gray-500 font-sans">
                        <span className="w-1 h-1 bg-blue-700 rounded-full flex-shrink-0 mt-1.5" />
                        <span>{proj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Footer Action */}
            <div className="bg-slate-50 border-t border-slate-100 px-6 py-4 flex gap-4 justify-between items-center">
              <span className="text-[10px] text-slate-400 font-sans">Zim-owned and operated quality.</span>
              <button
                onClick={() => handleInquireClick(selectedService.title)}
                className="bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs px-5 py-2.5 rounded-lg flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
              >
                <span>Request Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
