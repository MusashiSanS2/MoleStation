import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingHelp from './components/FloatingHelp';
import FavoritesPanel from './components/FavoritesPanel';
import Home from './pages/Home';
import ProductPage from './pages/Product';
import CategoryPage from './pages/Category';
import CheckoutPage from './pages/Checkout';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProductId, setSelectedProductId] = useState<string | undefined>();
  const [cartItems, setCartItems] = useLocalStorage<string[]>('cart', []);
  const [favorites, setFavorites] = useLocalStorage<string[]>('favorites', []);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [genderFilter, setGenderFilter] = useState('all');

  const handleNavigation = (page: string, productId?: string) => {
    setCurrentPage(page);
    setSelectedProductId(productId);
  };

  const handleAddToCart = (productId: string) => {
    setCartItems(prev => [...prev, productId]);
  };

  const handleRemoveFromCart = (productId: string) => {
    setCartItems(prev => prev.filter(id => id !== productId));
  };

  const handleToggleFavorite = (productId: string) => {
    setFavorites(prev => 
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const handleRemoveFromFavorites = (productId: string) => {
    setFavorites(prev => prev.filter(id => id !== productId));
  };

  const handleBuyNow = (productId: string) => {
    // Clear cart and add only this product
    setCartItems([productId]);
    // Navigate to checkout
    setCurrentPage('checkout');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <Home 
            onNavigate={handleNavigation} 
            onAddToCart={handleAddToCart}
            onToggleFavorite={handleToggleFavorite}
            favorites={favorites}
          />
        );
      case 'product':
        return (
          <ProductPage
            productId={selectedProductId}
            onNavigate={handleNavigation}
            onAddToCart={handleAddToCart}
            onToggleFavorite={handleToggleFavorite}
            favorites={favorites}
            onBuyNow={handleBuyNow}
          />
        );
      case 'category':
        return (
          <CategoryPage
            onNavigate={handleNavigation}
            onAddToCart={handleAddToCart}
            onToggleFavorite={handleToggleFavorite}
            favorites={favorites}
            genderFilter={genderFilter}
          />
        );
      case 'checkout':
        return (
          <CheckoutPage
            onNavigate={handleNavigation}
            cartItems={cartItems}
          />
        );
      default:
        return (
          <Home 
            onNavigate={handleNavigation} 
            onAddToCart={handleAddToCart}
            onToggleFavorite={handleToggleFavorite}
            favorites={favorites}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigation}
        cartCount={cartItems.length}
        cartItems={cartItems}
        onRemoveFromCart={handleRemoveFromCart}
        onToggleFavorites={() => setIsFavoritesOpen(true)}
        favoritesCount={favorites.length}
        genderFilter={genderFilter}
        onGenderFilter={setGenderFilter}
      />
      <main>
        {renderPage()}
      </main>
      <Footer />
      <FloatingHelp />
      <FavoritesPanel
        isOpen={isFavoritesOpen}
        onClose={() => setIsFavoritesOpen(false)}
        favorites={favorites}
        onRemoveFromFavorites={handleRemoveFromFavorites}
        onNavigate={handleNavigation}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}

export default App;