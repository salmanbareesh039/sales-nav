import React from 'react';
import { useScrollDirection } from '../hooks/useScrollDirection';
import { Briefcase } from 'lucide-react';

export default function Navbar() {
  const isHidden = useScrollDirection();

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-[#0A051E]/80 backdrop-blur-md transition-transform duration-300 ${
      isHidden ? '-translate-y-full' : 'translate-y-0'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Brand */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:from-blue-500/30 group-hover:via-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300">
              <Briefcase className="w-5 h-5 text-blue-400" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Professionals
            </span>
          </a>

          {/* Main Navigation */}
          <div className="flex items-center gap-8">
            <a href="#features" className="text-white hover:text-purple-400 text-base font-medium transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-white hover:text-purple-400 text-base font-medium transition-colors">
              Pricing
            </a>
            <a href="#how-it-works" className="text-white hover:text-purple-400 text-base font-medium transition-colors">
              How It Works
            </a>
            <a href="#founder" className="text-white hover:text-purple-400 text-base font-medium transition-colors">
              Founder
            </a>
            <a href="#testimonials" className="text-white hover:text-purple-400 text-base font-medium transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-white hover:text-purple-400 text-base font-medium transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}