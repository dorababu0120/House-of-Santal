import React from 'react';
import { ChevronRight, MapPin, Award, Calendar } from 'lucide-react';

const Designers: React.FC = () => {
  const designers = [
    {
      name: "Rajesh Khanna",
      specialty: "Contemporary Indian Furniture",
      location: "Mumbai, Maharashtra",
      pieces: 24,
      experience: "25+ years",
      image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Master craftsman specializing in modern interpretations of traditional Indian woodworking techniques.",
      awards: ["National Design Award 2022", "Craft Excellence Award"],
      signature: "Teak & Brass Fusion"
    },
    {
      name: "Mishka Patel",
      specialty: "Traditional Woodworking",
      location: "Jodhpur, Rajasthan",
      pieces: 18,
      experience: "30+ years",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Third-generation artisan preserving centuries-old Rajasthani carving traditions with contemporary flair.",
      awards: ["Heritage Craft Award", "UNESCO Recognition"],
      signature: "Hand-Carved Rosewood"
    },
    {
      name: "Arjun Sharma",
      specialty: "Metal & Wood Fusion",
      location: "Jaipur, Rajasthan",
      pieces: 16,
      experience: "20+ years",
      image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Innovative designer blending traditional metalwork with sustainable wood practices for modern homes.",
      awards: ["Sustainable Design Award", "Innovation in Craft"],
      signature: "Brass Inlay Artistry"
    }
  ];

  return (
    <section id="designers" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-amber-600 text-sm font-medium tracking-[0.2em] uppercase mb-4">
            Meet the Masters
          </p>
          <h2 className="text-4xl md:text-6xl font-light text-gray-900 mb-6">
            The Artisans Behind
            <br />
            <span className="font-bold text-amber-600">Every Masterpiece</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get to know the talented craftspeople behind each piece, their stories, traditions, 
            and techniques passed down through generations of Indian artisanship
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {designers.map((designer, index) => (
            <div key={index} className="group">
              {/* Designer Image */}
              <div className="relative mb-8 overflow-hidden rounded-2xl">
                <img 
                  src={designer.image} 
                  alt={designer.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-amber-300 text-sm font-medium">{designer.signature}</p>
                </div>
              </div>

              {/* Designer Info */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{designer.name}</h3>
                <p className="text-amber-600 font-medium text-lg mb-4">{designer.specialty}</p>
                
                {/* Location & Experience */}
                <div className="flex items-center justify-center space-x-6 mb-6 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {designer.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {designer.experience}
                  </div>
                </div>

                {/* Bio */}
                <p className="text-gray-600 mb-6 leading-relaxed">{designer.bio}</p>

                {/* Awards */}
                <div className="mb-6">
                  <div className="flex items-center justify-center mb-3">
                    <Award className="h-4 w-4 text-amber-600 mr-2" />
                    <span className="text-sm font-medium text-gray-700">Recent Awards</span>
                  </div>
                  <div className="space-y-1">
                    {designer.awards.map((award, awardIndex) => (
                      <p key={awardIndex} className="text-sm text-gray-600">{award}</p>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="bg-amber-50 rounded-xl p-6 mb-6">
                  <div className="text-3xl font-bold text-amber-600 mb-1">{designer.pieces}</div>
                  <div className="text-sm text-gray-600">Curated Pieces</div>
                </div>

                {/* CTA */}
                <button className="group/btn w-full bg-gray-900 hover:bg-amber-600 text-white py-4 rounded-full font-medium transition-all duration-300 flex items-center justify-center">
                  View {designer.name.split(' ')[0]}'s Collection
                  <ChevronRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* All Designers CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Discover All Our Artisans</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Explore the complete collection of over 50 master craftspeople from across India, 
              each bringing their unique heritage and expertise to our curated marketplace
            </p>
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105">
              Meet All Designers
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Designers;