import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      title: "Interior Designer",
      location: "New York, NY",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
      rating: 5,
      text: "House of Santal has completely transformed how I source furniture for my clients. The quality is exceptional, and each piece tells a story. My clients are always amazed by the craftsmanship and authenticity.",
      purchase: "Handcrafted Teak Dining Set"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      title: "Architect",
      location: "Los Angeles, CA",
      image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=300",
      rating: 5,
      text: "The attention to detail and sustainable practices make House of Santal stand out. I've furnished three luxury homes with their pieces, and every client has been thrilled with the unique character each item brings.",
      purchase: "Brass Inlay Console Collection"
    },
    {
      id: 3,
      name: "Emily Watson",
      title: "Art Collector",
      location: "Chicago, IL",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
      rating: 5,
      text: "As someone who appreciates fine craftsmanship, I'm constantly impressed by the artistry. The delivery service was impeccable, and the pieces arrived in perfect condition. Truly museum-quality furniture.",
      purchase: "Carved Rosewood Armchair"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section className="py-24 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-amber-600 text-sm font-medium tracking-[0.2em] uppercase mb-4">
            Client Stories
          </p>
          <h2 className="text-4xl md:text-6xl font-light text-gray-900 mb-6">
            What Our Clients
            <br />
            <span className="font-bold text-amber-600">Are Saying</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-12 relative">
            {/* Quote Icon */}
            <div className="absolute top-8 left-8">
              <Quote className="h-12 w-12 text-amber-200" />
            </div>

            <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12">
              {/* Client Image */}
              <div className="flex-shrink-0">
                <img 
                  src={current.image} 
                  alt={current.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-amber-100"
                />
              </div>

              {/* Testimonial Content */}
              <div className="flex-1 text-center lg:text-left">
                {/* Rating */}
                <div className="flex justify-center lg:justify-start items-center mb-6">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                  "{current.text}"
                </blockquote>

                {/* Client Info */}
                <div className="mb-4">
                  <h4 className="text-xl font-bold text-gray-900">{current.name}</h4>
                  <p className="text-amber-600 font-medium">{current.title}</p>
                  <p className="text-gray-500 text-sm">{current.location}</p>
                </div>

                {/* Purchase Info */}
                <div className="inline-flex items-center bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                  Purchased: {current.purchase}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center space-x-4 mt-12">
              <button 
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-amber-100 hover:bg-amber-200 text-amber-600 transition-colors duration-200"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              
              {/* Dots */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      index === currentTestimonial ? 'bg-amber-600' : 'bg-amber-200'
                    }`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-amber-100 hover:bg-amber-200 text-amber-600 transition-colors duration-200"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-20 text-center">
          <p className="text-gray-600 mb-8">Trusted by leading designers and collectors worldwide</p>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            <div className="text-2xl font-bold text-gray-400">ARCHITECTURAL DIGEST</div>
            <div className="text-2xl font-bold text-gray-400">ELLE DECOR</div>
            <div className="text-2xl font-bold text-gray-400">HOUSE BEAUTIFUL</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;