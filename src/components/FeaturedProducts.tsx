import React, { useState } from 'react';
import { Heart, Eye, ShoppingBag, Star } from 'lucide-react';

const FeaturedProducts: React.FC = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const featuredProducts = [
    {
      id: 1,
      name: "Handcrafted Teak Console",
      designer: "Rajesh Khanna Studios",
      price: 2800,
      originalPrice: 3200,
      image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600",
      hoverImage: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600",
      badge: "Bestseller",
      badgeColor: "bg-green-600",
      rating: 4.9,
      reviews: 24,
      description: "Solid teak wood with brass inlay details",
      dimensions: "72\" W x 18\" D x 32\" H",
      inStock: true
    },
    {
      id: 2,
      name: "Carved Rosewood Armchair",
      designer: "Mishka Design",
      price: 1950,
      image: "https://images.pexels.com/photos/586769/pexels-photo-586769.jpeg?auto=compress&cs=tinysrgb&w=600",
      hoverImage: "https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg?auto=compress&cs=tinysrgb&w=600",
      badge: "New Arrival",
      badgeColor: "bg-blue-600",
      rating: 4.8,
      reviews: 12,
      description: "Hand-carved rosewood with silk upholstery",
      dimensions: "28\" W x 30\" D x 36\" H",
      inStock: true
    },
    {
      id: 3,
      name: "Brass Inlay Side Table",
      designer: "Arjun Craftworks",
      price: 890,
      image: "https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg?auto=compress&cs=tinysrgb&w=600",
      hoverImage: "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=600",
      badge: "Limited Edition",
      badgeColor: "bg-purple-600",
      rating: 5.0,
      reviews: 8,
      description: "Mango wood with intricate brass inlay work",
      dimensions: "20\" W x 20\" D x 24\" H",
      inStock: true
    },
    {
      id: 4,
      name: "Silk Embroidered Ottoman",
      designer: "Priya Textiles",
      price: 650,
      image: "https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg?auto=compress&cs=tinysrgb&w=600",
      hoverImage: "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=600",
      badge: "Artisan Pick",
      badgeColor: "bg-amber-600",
      rating: 4.7,
      reviews: 15,
      description: "Hand-embroidered silk with wooden frame",
      dimensions: "24\" W x 16\" D x 18\" H",
      inStock: false
    }
  ];

  const handleQuickView = (productId: number) => {
    console.log('Quick view for product:', productId);
  };

  const handleAddToCart = (productId: number) => {
    console.log('Add to cart:', productId);
  };

  const handleWishlist = (productId: number) => {
    console.log('Add to wishlist:', productId);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-amber-600 text-sm font-medium tracking-[0.2em] uppercase mb-4">
            Featured Pieces
          </p>
          <h2 className="text-4xl md:text-6xl font-light text-gray-900 mb-6">
            Handpicked
            <br />
            <span className="font-bold text-amber-600">Masterpieces</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our most coveted pieces, each selected for their exceptional craftsmanship and timeless appeal
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={hoveredProduct === product.id ? product.hoverImage : product.image} 
                  alt={product.name}
                  className="w-full h-72 object-cover transition-all duration-500 group-hover:scale-105"
                />
                
                {/* Badge */}
                <span className={`absolute top-4 left-4 ${product.badgeColor} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                  {product.badge}
                </span>

                {/* Stock Status */}
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="bg-white text-gray-900 px-4 py-2 rounded-full font-medium">
                      Out of Stock
                    </span>
                  </div>
                )}

                {/* Quick Actions */}
                <div className={`absolute top-4 right-4 flex flex-col space-y-2 transition-all duration-300 ${
                  hoveredProduct === product.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                }`}>
                  <button 
                    onClick={() => handleWishlist(product.id)}
                    className="bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                  >
                    <Heart className="h-4 w-4 text-gray-700" />
                  </button>
                  <button 
                    onClick={() => handleQuickView(product.id)}
                    className="bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                  >
                    <Eye className="h-4 w-4 text-gray-700" />
                  </button>
                </div>

                {/* Quick Add to Cart */}
                <div className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${
                  hoveredProduct === product.id && product.inStock ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <button 
                    onClick={() => handleAddToCart(product.id)}
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-full font-medium transition-all duration-200 flex items-center justify-center"
                  >
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    Quick Add
                  </button>
                </div>
              </div>

              <div className="p-6">
                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-amber-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-sm text-amber-600 font-medium mb-2">By {product.designer}</p>
                <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                <p className="text-xs text-gray-500 mb-4">{product.dimensions}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-gray-900">
                      ${product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">
                        ${product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  {product.inStock && (
                    <button 
                      onClick={() => handleAddToCart(product.id)}
                      className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105"
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products CTA */}
        <div className="text-center mt-16">
          <button className="bg-gray-900 hover:bg-gray-800 text-white px-12 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;