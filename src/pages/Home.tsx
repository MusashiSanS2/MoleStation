import React from 'react';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import CategoryBanner from '../components/CategoryBanner';
import Newsletter from '../components/Newsletter';
import { products } from '../data/products';

interface HomeProps {
  onNavigate: (page: string, productId?: string) => void;
  onAddToCart: (productId: string) => void;
  onToggleFavorite: (productId: string) => void;
  favorites: string[];
}

const Home: React.FC<HomeProps> = ({ onNavigate, onAddToCart, onToggleFavorite, favorites }) => {
  const featuredProducts = products.filter(product => product.isNew || product.isSale);
  
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <ProductGrid
        products={featuredProducts.length > 0 ? featuredProducts : products}
        onNavigate={onNavigate}
        onAddToCart={onAddToCart}
        onToggleFavorite={onToggleFavorite}
        favorites={favorites}
        title="Featured Products"
      />
      <CategoryBanner onNavigate={onNavigate} />
      <Newsletter />
    </>
  );
};

export default Home;