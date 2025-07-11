import React from 'react';
import { Leaf, Users, Recycle, Heart } from 'lucide-react';

const Sustainability: React.FC = () => {
  const initiatives = [
    {
      icon: Leaf,
      title: "Sustainable Materials",
      description: "We source only from certified sustainable forests and use eco-friendly finishes that protect both your family and the environment.",
      impact: "100% sustainable wood sourcing"
    },
    {
      icon: Users,
      title: "Artisan Communities",
      description: "Every purchase directly supports traditional craftspeople and their families, preserving ancient techniques for future generations.",
      impact: "Supporting 200+ artisan families"
    },
    {
      icon: Recycle,
      title: "Zero Waste Production",
      description: "Our partners utilize every piece of material, turning wood scraps into smaller decorative items and using natural waste as fuel.",
      impact: "95% waste reduction achieved"
    },
    {
      icon: Heart,
      title: "Fair Trade Practices",
      description: "We ensure fair wages and safe working conditions, building long-term partnerships that benefit entire communities.",
      impact: "Fair wages guaranteed"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-green-600 text-sm font-medium tracking-[0.2em] uppercase mb-4">
            Conscious Craftsmanship
          </p>
          <h2 className="text-4xl md:text-6xl font-light text-gray-900 mb-6">
            Beauty That
            <br />
            <span className="font-bold text-green-600">Gives Back</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every piece in our collection represents our commitment to sustainable practices, 
            fair trade, and preserving traditional craftsmanship for future generations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {initiatives.map((initiative, index) => {
            const IconComponent = initiative.icon;
            return (
              <div key={index} className="group">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center group-hover:bg-green-600 transition-colors duration-300">
                      <IconComponent className="h-8 w-8 text-green-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{initiative.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{initiative.description}</p>
                    <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                      {initiative.impact}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Impact Stats */}
        <div className="bg-white rounded-3xl shadow-xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Impact in Numbers</h3>
            <p className="text-lg text-gray-600">Measurable change through conscious commerce</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Partner Workshops</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">200+</div>
              <div className="text-gray-600">Artisan Families Supported</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-gray-600">Waste Reduction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-gray-600">Sustainable Sourcing</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;