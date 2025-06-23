import React from 'react';
import { X, Heart, ShoppingBag } from 'lucide-react';
import { products } from '../data/products';

interface FavoritesPanelProps {
  isOpen: boolean;
  onClose: () => void;
  favorites: string[];
  onRemoveFromFavorites: (productId: string) => void;
  onNavigate: (page: string, productId?: string) => void;
  onAddToCart: (productId: string) => void;
}

const FavoritesPanel: React.FC<FavoritesPanelProps> = ({
  isOpen,
  onClose,
  favorites,
  onRemoveFromFavorites,
  onNavigate,
  onAddToCart
}) => {
  const favoriteProducts = products.filter(product => favorites.includes(product.id));

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose}></div>
      )}
      
      {/* Panel */}
      <div className={`fixed right-0 top-0 h-full w-96 bg-white shadow-2xl transform transition-transform duration-300 z-50 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <Heart className="h-5 w-5 text-red-500" />
              Favorites ({favorites.length})
            </h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {favoriteProducts.length === 0 ? (
            <div className="text-center py-12">
              <Heart className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No favorites yet</p>
              <p className="text-sm text-gray-400 mt-2">
                Click the heart icon on products to add them here
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {favoriteProducts.map((product) => (
                <div key={product.id} className="border border-gray-200 rounded-lg p-3">
                  <div className="flex gap-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded-lg cursor-pointer"
                      onClick={() => {
                        onNavigate('product', product.id);
                        onClose();
                      }}
                    />
                    <div className="flex-1">
                      <h4 
                        className="font-medium text-gray-900 text-sm cursor-pointer hover:text-yellow-600 transition-colors"
                        onClick={() => {
                          onNavigate('product', product.id);
                          onClose();
                        }}
                      >
                        {product.name}
                      </h4>
                      <p className="font-semibold text-gray-900">${product.price}</p>
                      <div className="flex gap-2 mt-2">
                        <button
                          onClick={() => onAddToCart(product.id)}
                          className="flex items-center gap-1 bg-black text-white px-3 py-1 rounded text-xs hover:bg-gray-800 transition-colors"
                        >
                          <ShoppingBag className="h-3 w-3" />
                          Add to Cart
                        </button>
                        <button
                          onClick={() => onRemoveFromFavorites(product.id)}
                          className="text-red-500 hover:text-red-700 transition-colors px-2 py-1 text-xs"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FavoritesPanel;