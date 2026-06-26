import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-widest rounded-full">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-display leading-tight">
            Trusted by Leaders in Zimbabwe
          </h2>
          <div className="w-16 h-1 bg-blue-700 mx-auto rounded-full" />
        </div>

        {/* Clean Testimonial Grid (Matching the mockup styling) */}
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.slice(0, 3).map((t, idx) => (
            <div
              key={idx}
              className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between text-left group hover:bg-white hover:shadow-xl hover:border-blue-100 transition-all duration-300 relative overflow-hidden"
            >
              {/* Giant absolute quote symbol for design rhythm */}
              <div className="absolute right-6 top-6 text-slate-200/50 group-hover:text-blue-100/60 transition-colors pointer-events-none">
                <Quote className="w-12 h-12 stroke-[1.5]" />
              </div>

              <div className="space-y-4 relative z-10">
                {/* Stars */}
                <div className="flex gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-slate-600 font-sans text-xs sm:text-sm italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              {/* Author info */}
              <div className="mt-8 pt-5 border-t border-slate-200 relative z-10">
                <h4 className="font-display font-extrabold text-sm text-slate-950">{t.name}</h4>
                <p className="text-[11px] text-blue-700 font-bold uppercase tracking-wider mt-0.5">{t.role}</p>
                <p className="text-[10px] text-slate-400 font-sans mt-0.5">{t.company} &bull; {t.location}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
