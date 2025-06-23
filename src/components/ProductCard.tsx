import React, { useState } from 'react';
import { Heart, ShoppingBag, Star } from 'lucide-react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  onNavigate: (page: string, productId?: string) => void;
  onAddToCart: (productId: string) => void;
  onToggleFavorite: (productId: string) => void;
  isFavorite: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  onNavigate, 
  onAddToCart, 
  onToggleFavorite,
  isFavorite 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-green-500 text-white px-2 py-1 text-xs font-semibold rounded">
              NEW
            </span>
          )}
          {product.isSale && (
            <span className="bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded">
              SALE
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={() => onToggleFavorite(product.id)}
          className="absolute top-3 right-3 p-2 bg-white/90 hover:bg-white rounded-full shadow-sm transition-all duration-200"
        >
          <Heart
            className={`h-4 w-4 transition-colors duration-200 ${
              isFavorite ? 'text-red-500 fill-current' : 'text-gray-600'
            }`}
          />
        </button>

        {/* Quick Actions */}
        <div
          className={`absolute inset-x-3 bottom-3 flex gap-2 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <button
            onClick={() => onNavigate('product', product.id)}
            className="flex-1 bg-white text-black py-2 px-4 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200"
          >
            Quick View
          </button>
          <button
            onClick={() => onAddToCart(product.id)}
            className="bg-yellow-600 hover:bg-yellow-700 text-white p-2 rounded-full transition-colors duration-200"
          >
            <ShoppingBag className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="flex items-center gap-1 mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-600">({product.reviews})</span>
        </div>

        <h3
          className="font-semibold text-gray-900 mb-2 cursor-pointer hover:text-yellow-600 transition-colors duration-200"
          onClick={() => onNavigate('product', product.id)}
        >
          {product.name}
        </h3>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg text-gray-900">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
          
          {/* Color Options */}
          <div className="flex gap-1">
            {product.colors.slice(0, 3).map((color, index) => (
              <div
                key={index}
                className={`w-4 h-4 rounded-full border-2 border-gray-200 ${
                  color.toLowerCase() === 'black'
                    ? 'bg-black'
                    : color.toLowerCase() === 'white'
                    ? 'bg-white'
                    : color.toLowerCase() === 'gray'
                    ? 'bg-gray-400'
                    : color.toLowerCase() === 'beige'
                    ? 'bg-yellow-100'
                    : color.toLowerCase() === 'pink'
                    ? 'bg-pink-300'
                    : color.toLowerCase() === 'lavender'
                    ? 'bg-purple-200'
                    : color.toLowerCase() === 'blue'
                    ? 'bg-blue-500'
                    : color.toLowerCase() === 'brown'
                    ? 'bg-yellow-800'
                    : 'bg-blue-500'
                }`}
                title={color}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;