import React from 'react';
import { X, ShoppingBag, Trash2 } from 'lucide-react';
import { products } from '../data/products';

interface CartDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: string[];
  onRemoveFromCart: (productId: string) => void;
  onNavigate: (page: string) => void;
}

const CartDropdown: React.FC<CartDropdownProps> = ({
  isOpen,
  onClose,
  cartItems,
  onRemoveFromCart,
  onNavigate
}) => {
  if (!isOpen) return null;

  const cartProducts = products.filter(product => cartItems.includes(product.id));
  const subtotal = cartProducts.reduce((sum, product) => sum + product.price, 0);

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-40" onClick={onClose}></div>
      
      {/* Dropdown */}
      <div className="absolute right-0 top-full mt-2 w-96 bg-white rounded-lg shadow-2xl border border-gray-200 z-50">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Shopping Cart</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="max-h-96 overflow-y-auto">
          {cartProducts.length === 0 ? (
            <div className="p-8 text-center">
              <ShoppingBag className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">Your cart is empty</p>
            </div>
          ) : (
            <div className="p-4 space-y-4">
              {cartProducts.map((product) => (
                <div key={product.id} className="flex gap-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 text-sm">{product.name}</h4>
                    <p className="text-sm text-gray-600">Size: M, Color: Black</p>
                    <p className="font-semibold text-gray-900">${product.price}</p>
                  </div>
                  <button
                    onClick={() => onRemoveFromCart(product.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors p-1"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartProducts.length > 0 && (
          <div className="p-4 border-t border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold text-gray-900">Subtotal:</span>
              <span className="font-bold text-lg text-gray-900">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  onNavigate('checkout');
                  onClose();
                }}
                className="flex-1 bg-gray-100 text-gray-900 py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                View Cart
              </button>
              <button
                onClick={() => {
                  onNavigate('checkout');
                  onClose();
                }}
                className="flex-1 bg-black text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDropdown;