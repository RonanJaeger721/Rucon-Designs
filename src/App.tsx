import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between overflow-x-hidden selection:bg-blue-600 selection:text-white">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Corporate Sections */}
      <main className="flex-grow">
        {/* Hero Section (Typography-centric, zero image-clutter) */}
        <Hero />

        {/* About Section (Text-focused & high impact) */}
        <About />

        {/* Services Directory Section (Clean grid with modern icons) */}
        <Services />

        {/* Testimonials Section (Clean text reviews) */}
        <Testimonials />

        {/* Contact form & Simple details */}
        <Contact />
      </main>

      {/* Footer Branding & Links */}
      <Footer />
    </div>
  );
}
