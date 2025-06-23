export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  gender: 'men' | 'women' | 'unisex';
  sizes: string[];
  colors: string[];
  rating: number;
  reviews: number;
  description: string;
  isNew?: boolean;
  isSale?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Essential Black Hoodie',
    price: 89.99,
    originalPrice: 129.99,
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'hoodies',
    gender: 'unisex',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Gray', 'Navy'],
    rating: 4.8,
    reviews: 124,
    description: 'Premium cotton blend hoodie with minimalist design. Perfect for everyday streetwear.',
    isSale: true
  },
  {
    id: '2',
    name: 'Minimalist Cargo Pants',
    price: 119.99,
    image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'pants',
    gender: 'men',
    sizes: ['28', '30', '32', '34', '36'],
    colors: ['Khaki', 'Black', 'Olive'],
    rating: 4.6,
    reviews: 89,
    description: 'Functional cargo pants with clean lines and modern fit.',
    isNew: true
  },
  {
    id: '3',
    name: 'Oversized Graphic Tee',
    price: 49.99,
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'tshirts',
    gender: 'unisex',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Black', 'Beige'],
    rating: 4.7,
    reviews: 156,
    description: 'Comfortable oversized fit with original artwork design.'
  },
  {
    id: '4',
    name: 'Classic Denim Jacket',
    price: 159.99,
    image: 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'jackets',
    gender: 'unisex',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Blue', 'Black', 'Light Blue'],
    rating: 4.9,
    reviews: 203,
    description: 'Timeless denim jacket with modern tailoring and premium denim.'
  },
  {
    id: '5',
    name: 'Urban Sneakers',
    price: 199.99,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'shoes',
    gender: 'unisex',
    sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44'],
    colors: ['White', 'Black', 'Gray'],
    rating: 4.5,
    reviews: 78,
    description: 'Comfortable urban sneakers with premium materials.',
    isNew: true
  },
  {
    id: '6',
    name: 'Minimalist Backpack',
    price: 89.99,
    image: 'https://images.pexels.com/photos/1262302/pexels-photo-1262302.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'accessories',
    gender: 'unisex',
    sizes: ['One Size'],
    colors: ['Black', 'Beige', 'Gray'],
    rating: 4.8,
    reviews: 92,
    description: 'Clean design backpack perfect for daily use.'
  },
  {
    id: '7',
    name: 'Women\'s Cropped Hoodie',
    price: 79.99,
    originalPrice: 99.99,
    image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'hoodies',
    gender: 'women',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Pink', 'White', 'Lavender'],
    rating: 4.7,
    reviews: 145,
    description: 'Trendy cropped hoodie with soft cotton blend fabric.',
    isSale: true
  },
  {
    id: '8',
    name: 'High-Waisted Jeans',
    price: 139.99,
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'pants',
    gender: 'women',
    sizes: ['24', '26', '28', '30', '32'],
    colors: ['Blue', 'Black', 'Light Blue'],
    rating: 4.6,
    reviews: 98,
    description: 'Classic high-waisted jeans with perfect fit and comfort.',
    isNew: true
  },
  {
    id: '9',
    name: 'Vintage Band Tee',
    price: 39.99,
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'tshirts',
    gender: 'women',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Gray'],
    rating: 4.5,
    reviews: 67,
    description: 'Vintage-inspired band tee with soft cotton fabric.'
  },
  {
    id: '10',
    name: 'Leather Bomber Jacket',
    price: 299.99,
    originalPrice: 399.99,
    image: 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'jackets',
    gender: 'men',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Brown'],
    rating: 4.9,
    reviews: 234,
    description: 'Premium leather bomber jacket with classic styling.',
    isSale: true
  },
  {
    id: '11',
    name: 'Running Sneakers',
    price: 149.99,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'shoes',
    gender: 'men',
    sizes: ['39', '40', '41', '42', '43', '44', '45'],
    colors: ['White', 'Black', 'Blue'],
    rating: 4.4,
    reviews: 156,
    description: 'High-performance running sneakers with advanced cushioning.'
  },
  {
    id: '12',
    name: 'Canvas Tote Bag',
    price: 49.99,
    image: 'https://images.pexels.com/photos/1262302/pexels-photo-1262302.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'accessories',
    gender: 'women',
    sizes: ['One Size'],
    colors: ['Beige', 'Black', 'White'],
    rating: 4.3,
    reviews: 89,
    description: 'Eco-friendly canvas tote bag perfect for daily essentials.',
    isNew: true
  }
];

export const categories = [
  { id: 'all', name: 'All Products', count: products.length },
  { id: 'hoodies', name: 'Hoodies', count: products.filter(p => p.category === 'hoodies').length },
  { id: 'tshirts', name: 'T-Shirts', count: products.filter(p => p.category === 'tshirts').length },
  { id: 'pants', name: 'Pants', count: products.filter(p => p.category === 'pants').length },
  { id: 'jackets', name: 'Jackets', count: products.filter(p => p.category === 'jackets').length },
  { id: 'shoes', name: 'Shoes', count: products.filter(p => p.category === 'shoes').length },
  { id: 'accessories', name: 'Accessories', count: products.filter(p => p.category === 'accessories').length }
];