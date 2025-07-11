import React, { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-r from-amber-900 via-amber-800 to-orange-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8">
          <Mail className="h-16 w-16 text-amber-300 mx-auto mb-6" />
          <h2 className="text-4xl md:text-6xl font-light mb-6">
            Stay
            <br />
            <span className="font-bold text-amber-300">Inspired</span>
          </h2>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto leading-relaxed">
            Be the first to discover new collections, designer stories, exclusive pieces, 
            and behind-the-scenes glimpses into India's finest craftsmanship
          </p>
        </div>

        {!isSubscribed ? (
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-amber-300/50 text-lg"
                required
              />
              <button 
                type="submit"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center text-lg"
              >
                Subscribe
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            <p className="text-amber-200 text-sm mt-4">
              Join 10,000+ design enthusiasts. Unsubscribe anytime.
            </p>
          </form>
        ) : (
          <div className="max-w-lg mx-auto">
            <div className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-medium">
              ✓ Thank you for subscribing! Check your email for a welcome gift.
            </div>
          </div>
        )}

        {/* Newsletter Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
          <div>
            <h4 className="text-lg font-semibold text-amber-300 mb-2">Exclusive Previews</h4>
            <p className="text-amber-100 text-sm">First access to new collections and limited editions</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-amber-300 mb-2">Designer Stories</h4>
            <p className="text-amber-100 text-sm">Behind-the-scenes content and artisan interviews</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-amber-300 mb-2">Special Offers</h4>
            <p className="text-amber-100 text-sm">Subscriber-only discounts and early bird pricing</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;