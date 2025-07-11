import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent z-10"></div>
        <img 
          src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920" 
          alt="Handcrafted Indian Furniture" 
          className="absolute inset-0 w-full h-full object-cover scale-110 animate-slow-zoom"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-left text-white px-4 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl">
          {/* Subtitle */}
          <p className="text-amber-300 text-sm font-medium tracking-[0.2em] uppercase mb-6 animate-fade-in-up">
            Curated from India's Master Craftsmen
          </p>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 leading-[0.9] animate-fade-in-up animation-delay-200">
            <br />
            <br />
            <br />
            <span className="font-bold text-amber-300 italic">Artistry</span>
            <br />
            Meets Modern
            <br />
            <span className="font-bold">Luxury</span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-2xl leading-relaxed animate-fade-in-up animation-delay-400">
            Discover extraordinary furniture and artisanal pieces from over 50 celebrated Indian designers, 
            each piece telling a story of heritage, craftsmanship, and contemporary elegance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up animation-delay-600">
            <button className="group bg-amber-600 hover:bg-amber-700 text-white px-10 py-5 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center">
              Explore Collections
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-5 rounded-full text-lg font-medium transition-all duration-300 flex items-center justify-center">
              <Play className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
              Meet Our Artisans
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-16 animate-fade-in-up animation-delay-800">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-300">50+</div>
              <div className="text-sm text-gray-300 tracking-wide">Master Designers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-300">500+</div>
              <div className="text-sm text-gray-300 tracking-wide">Curated Pieces</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-300">25+</div>
              <div className="text-sm text-gray-300 tracking-wide">Years Heritage</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;