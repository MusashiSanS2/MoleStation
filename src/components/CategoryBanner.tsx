import React from 'react';

interface CategoryBannerProps {
  onNavigate: (page: string) => void;
}

const CategoryBanner: React.FC<CategoryBannerProps> = ({ onNavigate }) => {
  const categories = [
    {
      title: "Men's Collection",
      description: "Bold and contemporary designs",
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800",
      cta: "Shop Men"
    },
    {
      title: "Women's Collection",
      description: "Elegant streetwear essentials",
      image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=800",
      cta: "Shop Women"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gray-900 cursor-pointer"
              onClick={() => onNavigate('category')}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10"></div>
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-80 md:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 z-20 flex flex-col justify-center p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  {category.title}
                </h3>
                <p className="text-gray-300 text-lg mb-6">
                  {category.description}
                </p>
                <button className="bg-yellow-600 hover:bg-yellow-700 text-black px-6 py-3 rounded-full font-semibold transition-all duration-300 transform group-hover:scale-105 w-fit">
                  {category.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryBanner;