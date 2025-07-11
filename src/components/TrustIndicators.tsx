import React from 'react';
import { Shield, Truck, Award, Star, Leaf, Globe } from 'lucide-react';

const TrustIndicators: React.FC = () => {
  const indicators = [
    {
      icon: Shield,
      title: "Authenticity Guaranteed",
      description: "Every piece verified by our craft experts and comes with a certificate of authenticity"
    },
    {
      icon: Truck,
      title: "White Glove Delivery",
      description: "Premium setup service included with climate-controlled shipping worldwide"
    },
    {
      icon: Award,
      title: "Award-Winning Designers",
      description: "Curated exclusively from India's most celebrated and internationally recognized artisans"
    },
    {
      icon: Star,
      title: "Lifetime Craftsmanship",
      description: "30-day returns with lifetime craftsmanship warranty on all handmade pieces"
    },
    {
      icon: Leaf,
      title: "Sustainable Sourcing",
      description: "Ethically sourced materials supporting traditional communities and eco-friendly practices"
    },
    {
      icon: Globe,
      title: "Global Heritage",
      description: "Bringing centuries-old Indian craftsmanship to discerning collectors worldwide"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            The House of Santal Promise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every piece in our collection meets the highest standards of authenticity, craftsmanship, and ethical sourcing
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {indicators.map((indicator, index) => {
            const IconComponent = indicator.icon;
            return (
              <div key={index} className="group text-center p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6 group-hover:bg-amber-600 group-hover:scale-110 transition-all duration-300">
                  <IconComponent className="h-8 w-8 text-amber-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{indicator.title}</h3>
                <p className="text-gray-600 leading-relaxed">{indicator.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;