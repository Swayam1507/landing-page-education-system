import React from 'react';
import { ArrowRight } from 'lucide-react';
import { scrollToTargetAdjusted } from '/src/Helper'

export function Hero() {
  const scrollToSection = (id: string) => {
    // const element = document.getElementById(id);
    // element?.scrollIntoView({ behavior: 'smooth' });
    scrollToTargetAdjusted(id);
  };

  return (
    <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transform Your School Management with Smart Solutions
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Streamline administrative tasks, enhance communication, and improve learning outcomes with our comprehensive school management system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition flex items-center justify-center"
                onClick={() => scrollToSection('contact')}
              >
                Book a Demo <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button 
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition"
                onClick={() => scrollToSection('features')}
              >
                View Features
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
              alt="School Management System Dashboard"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}