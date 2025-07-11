import React, { useState } from 'react';
import { ArrowRight, Eye, Heart, ShoppingBag } from 'lucide-react';

const Collections: React.FC = () => {
  const [hoveredCollection, setHoveredCollection] = useState<number | null>(null);

  const collections = [
    {
      id: 1,
      name: "Living Room Luxe",
      subtitle: "Contemporary Comfort",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      pieces: 24,
      designer: "Rajesh Khanna Studios",
      priceRange: "$1,200 - $8,500",
      description: "Sophisticated seating and tables that blend traditional Indian woodworking with modern aesthetics"
    },
    {
      id: 2,
      name: "Bedroom Sanctuaries",
      subtitle: "Restful Elegance",
      image: "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=800",
      pieces: 18,
      designer: "Mishka Design",
      priceRange: "$900 - $6,200",
      description: "Handcrafted beds, wardrobes, and nightstands that create serene, luxurious sleeping spaces"
    },
    {
      id: 3,
      name: "Dining Elegance",
      subtitle: "Gathering Spaces",
      image: "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=800",
      pieces: 16,
      designer: "Arjun Craftworks",
      priceRange: "$1,500 - $12,000",
      description: "Exquisite dining sets and sideboards perfect for entertaining with Indian hospitality"
    }
  ];

  return (
    <section id="collections" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-amber-600 text-sm font-medium tracking-[0.2em] uppercase mb-4">
            Curated Collections
          </p>
          <h2 className="text-4xl md:text-6xl font-light text-gray-900 mb-6">
            Spaces That Tell
            <br />
            <span className="font-bold text-amber-600">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Each collection represents a carefully curated journey through India's rich design heritage, 
            bringing together pieces that complement and elevate your living spaces
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <div 
              key={collection.id} 
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredCollection(collection.id)}
              onMouseLeave={() => setHoveredCollection(null)}
            >
              <div className="relative overflow-hidden rounded-3xl mb-8 h-96">
                <img 
                  src={collection.image} 
                  alt={collection.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className="text-white">
                    <p className="text-amber-300 text-sm font-medium tracking-wide uppercase mb-2">
                      {collection.subtitle}
                    </p>
                    <h3 className="text-3xl font-bold mb-3">{collection.name}</h3>
                    <p className="text-gray-200 mb-4 leading-relaxed">
                      {collection.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-amber-200 text-sm">{collection.pieces} pieces</p>
                        <p className="text-white font-medium">{collection.priceRange}</p>
                      </div>
                      <ArrowRight className="h-6 w-6 text-amber-300 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className={`absolute top-6 right-6 flex flex-col space-y-3 transition-all duration-300 ${
                  hoveredCollection === collection.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                }`}>
                  <button className="bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110">
                    <Eye className="h-5 w-5 text-gray-700" />
                  </button>
                  <button className="bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110">
                    <Heart className="h-5 w-5 text-gray-700" />
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-600 text-sm mb-1">Curated by</p>
                  <p className="text-gray-900 font-medium">{collection.designer}</p>
                </div>
                <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 flex items-center">
                  View Collection
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;