import React, { useState } from 'react';
import { Star, Heart, Truck, Shield, RotateCcw, Minus, Plus } from 'lucide-react';
import { products, Product } from '../data/products';

interface ProductPageProps {
  productId?: string;
  onNavigate: (page: string, productId?: string) => void;
  onAddToCart: (productId: string) => void;
  onToggleFavorite: (productId: string) => void;
  favorites: string[];
  onBuyNow: (productId: string) => void;
}

const ProductPage: React.FC<ProductPageProps> = ({ 
  productId, 
  onNavigate, 
  onAddToCart, 
  onToggleFavorite, 
  favorites,
  onBuyNow 
}) => {
  const product = products.find(p => p.id === productId) || products[0];
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);

  const relatedProducts = products.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4);
  const isFavorite = favorites.includes(product.id);

  const features = [
    { icon: Truck, text: 'Free shipping on orders over $50' },
    { icon: RotateCcw, text: '30-day easy returns' },
    { icon: Shield, text: '2-year warranty included' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li>
              <button onClick={() => onNavigate('home')} className="hover:text-gray-700">
                Home
              </button>
            </li>
            <span>/</span>
            <li>
              <button onClick={() => onNavigate('category')} className="hover:text-gray-700">
                Shop
              </button>
            </li>
            <span>/</span>
            <li className="text-gray-900 font-medium">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="aspect-square bg-gray-100 rounded-lg overflow-hidden cursor-pointer opacity-60 hover:opacity-100 transition-opacity">
                  <img
                    src={product.image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
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
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">({product.reviews} reviews)</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                )}
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed">{product.description}</p>

            {/* Size Selection */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Size</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-lg font-medium transition-colors ${
                      selectedSize === size
                        ? 'bg-black text-white border-black'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Color: {selectedColor}</h3>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded-full border-2 ${
                      selectedColor === color ? 'border-black' : 'border-gray-300'
                    } ${
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
                  />
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Quantity</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-100 transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-100 transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <button
                onClick={() => onAddToCart(product.id)}
                className="flex-1 bg-gray-100 text-black py-3 px-6 rounded-full font-semibold hover:bg-gray-200 transition-colors"
              >
                Add to Cart
              </button>
              <button
                onClick={() => onBuyNow(product.id)}
                className="flex-1 bg-black text-white py-3 px-6 rounded-full font-semibold hover:bg-gray-800 transition-colors"
              >
                Buy Now
              </button>
              <button
                onClick={() => onToggleFavorite(product.id)}
                className="p-3 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
              >
                <Heart className={`h-5 w-5 ${isFavorite ? 'text-red-500 fill-current' : 'text-gray-600'}`} />
              </button>
            </div>

            {/* Features */}
            <div className="space-y-3 pt-6 border-t border-gray-200">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-sm text-gray-600">
                  <feature.icon className="h-5 w-5 text-gray-400" />
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">You might also like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <div key={relatedProduct.id} className="group cursor-pointer" onClick={() => onNavigate('product', relatedProduct.id)}>
                  <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-medium text-gray-900 group-hover:text-yellow-600 transition-colors">
                    {relatedProduct.name}
                  </h3>
                  <p className="text-gray-600">${relatedProduct.price}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;