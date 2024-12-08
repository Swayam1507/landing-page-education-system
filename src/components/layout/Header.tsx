import React from "react";
import { BookOpen, Menu, X } from "lucide-react";
import { useState } from "react";
import { scrollToTargetAdjusted } from "/src/Helper";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    // const element = document.getElementById(id);
    // element?.scrollIntoView({ behavior: 'smooth' });
    scrollToTargetAdjusted(id);
  };

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">SmartEdu</span>
          </div>

          <div className="hidden md:flex space-x-8">
            <a
              onClick={() => scrollToSection("features")}
              className="text-gray-600 hover:text-blue-600 cursor-pointer"
            >
              Features
            </a>
            <a
              onClick={() => scrollToSection("pricing")}
              className="text-gray-600 hover:text-blue-600 cursor-pointer"
            >
              Pricing
            </a>
            <a
              onClick={() => scrollToSection("testimonials")}
              className="text-gray-600 hover:text-blue-600 cursor-pointer"
            >
              Testimonials
            </a>
            {/* <a href="#blog" className="text-gray-600 hover:text-blue-600 cursor-pointer">Blog</a> */}
            <a
              onClick={() => scrollToSection("contact")}
              className="text-gray-600 hover:text-blue-600 cursor-pointer"
            >
              Contact
            </a>
          </div>

          <button onClick={() => scrollToSection("contact")} className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
            Book Demo
          </button>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a
              className="block text-gray-600 hover:text-blue-600 cursor-pointer"
              onClick={() => scrollToSection("features")}
            >
              Features
            </a>
            <a
              className="block text-gray-600 hover:text-blue-600 cursor-pointer"
              onClick={() => scrollToSection("pricing")}
            >
              Pricing
            </a>
            <a
              className="block text-gray-600 hover:text-blue-600 cursor-pointer"
              onClick={() => scrollToSection("testimonials")}
            >
              Testimonials
            </a>
            {/* <a href="#blog" className="block text-gray-600 hover:text-blue-600 cursor-pointer">
              Blog
            </a> */}
            <a
              className="block text-gray-600 hover:text-blue-600 cursor-pointer"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </a>
            <button onClick={() => scrollToSection("contact")} className="w-full bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
              Book Demo
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
