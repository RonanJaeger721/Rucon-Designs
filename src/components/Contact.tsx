import React, { useState } from 'react';
import { Phone, Mail, MessageSquare, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 5000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-widest rounded-full">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-display leading-tight">
            Start Your Sign Project Today
          </h2>
          <div className="w-16 h-1 bg-blue-700 mx-auto rounded-full" />
        </div>

        {/* 2-Column Corporate Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Coordinates & Map */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Contact Cards */}
            <div className="space-y-4">
              
              {/* Primary Contact */}
              <div className="flex gap-4 items-center p-5 bg-white border border-slate-100 rounded-2xl shadow-sm">
                <div className="bg-blue-50 border border-blue-100 p-2.5 rounded-xl text-blue-700">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-slate-400 font-display">Sales & Estimations</span>
                  <a href="tel:+263712263907" className="block text-base font-extrabold text-slate-950 hover:text-blue-700 transition-colors">
                    +263 712 263 907
                  </a>
                  <a href="tel:+263773678408" className="block text-xs text-slate-500 hover:text-blue-700 transition-colors mt-0.5">
                    Alternative: +263 773 678 408
                  </a>
                </div>
              </div>

              {/* Email Address */}
              <div className="flex gap-4 items-center p-5 bg-white border border-slate-100 rounded-2xl shadow-sm">
                <div className="bg-blue-50 border border-blue-100 p-2.5 rounded-xl text-blue-700">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-slate-400 font-display">Email Helpdesk</span>
                  <a href="mailto:amrucondesigns7@gmail.com" className="block text-base font-extrabold text-slate-950 hover:text-blue-700 transition-colors">
                    amrucondesigns7@gmail.com
                  </a>
                </div>
              </div>

            </div>

            {/* High-Contrast Large WhatsApp Callout */}
            <div className="p-6 bg-emerald-50 border border-emerald-100 rounded-2xl space-y-3 shadow-sm">
              <div className="flex gap-2 items-center text-emerald-800">
                <MessageSquare className="w-5 h-5 text-emerald-600" />
                <span className="font-display font-bold text-sm uppercase tracking-wider">Fast WhatsApp Desk</span>
              </div>
              <p className="text-xs text-emerald-700 font-sans leading-relaxed">
                Need a quick quote or have branding artwork to share? Chat directly with our signage technician.
              </p>
              <a
                href="https://wa.me/263712263907?text=Hi%20Rucon%20Designs,%20I'm%20interested%20in%20getting%20a%20quote%20for%20some%20signage."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-5 rounded-xl transition-all shadow-md hover:shadow-emerald-600/10 active:scale-95"
              >
                <span>Message on WhatsApp</span>
              </a>
            </div>

            {/* Clean Map Placeholder Card */}
            <div className="p-5 bg-white border border-slate-100 rounded-2xl space-y-3 shadow-sm">
              <div className="flex gap-2 items-center text-slate-800">
                <MapPin className="w-4 h-4 text-slate-600" />
                <span className="font-display font-bold text-xs uppercase tracking-wider">Harare Office & Workshop</span>
              </div>
              
              {/* Minimalist Grid Illustration representing Map */}
              <div className="h-28 bg-slate-100 rounded-xl flex flex-col items-center justify-center border border-slate-200/60 relative overflow-hidden group">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-700 text-white p-2.5 rounded-full shadow-lg relative z-10 animate-bounce">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-[11px] text-slate-600 font-sans font-semibold mt-8 relative z-10">Harare, Zimbabwe</span>
              </div>
              
              <div className="flex justify-between items-center text-[11px] text-slate-500 font-sans px-1">
                <span>Site inspections available nationwide</span>
                <span className="font-bold text-blue-700 hover:underline cursor-pointer">Get Directions &rarr;</span>
              </div>
            </div>

          </div>

          {/* Right Column: Pristine Form (Incredibly eye-catching white background) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-slate-150 shadow-lg">
            <h3 className="font-display font-extrabold text-xl text-slate-950 mb-6">Send an Inquiry</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Tendai Moyo"
                    className="w-full bg-slate-50 border border-slate-200/80 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all text-slate-800 font-sans"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                    Email / Phone
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. tendai@company.co.zw"
                    className="w-full bg-slate-50 border border-slate-200/80 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all text-slate-800 font-sans"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="contact-subject" className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                  Subject
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="e.g. Quote request for Shopfront Acrylic Sign"
                  className="w-full bg-slate-50 border border-slate-200/80 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all text-slate-800 font-sans"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                  Inquiry Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Please describe your sign dimensions, preferred materials, and any installation requirements..."
                  className="w-full bg-slate-50 border border-slate-200/80 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all text-slate-800 font-sans resize-none"
                />
              </div>

              {submitted ? (
                <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl flex items-center gap-3 text-blue-800">
                  <CheckCircle2 className="w-5 h-5 text-blue-700 flex-shrink-0" />
                  <div className="text-xs sm:text-sm font-sans">
                    <p className="font-bold">Inquiry Sent Successfully!</p>
                    <p className="text-slate-500 mt-0.5">Our Estimator will contact you within 2-4 hours with a draft proposal.</p>
                  </div>
                </div>
              ) : (
                <button
                  type="submit"
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3.5 px-6 rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-4 h-4" />
                </button>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
