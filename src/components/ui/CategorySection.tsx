
import React from "react";
import { Link } from "react-router-dom";
import { 
  Smartphone, 
  Home, 
  ShoppingBag, 
  Dumbbell, 
  BookOpen,
  Monitor,
  Baby,
  UtensilsCrossed
} from "lucide-react";

const categories = [
  {
    icon: <Smartphone size={24} />,
    name: "Electronics",
    description: "Gadgets & devices",
    link: "/category/electronics",
    color: "bg-blue-50 text-blue-600"
  },
  {
    icon: <Home size={24} />,
    name: "Home & Kitchen",
    description: "Appliances & decor",
    link: "/category/home",
    color: "bg-green-50 text-green-600"
  },
  {
    icon: <ShoppingBag size={24} />,
    name: "Fashion",
    description: "Clothing & accessories",
    link: "/category/fashion",
    color: "bg-purple-50 text-purple-600"
  },
  {
    icon: <Dumbbell size={24} />,
    name: "Fitness",
    description: "Equipment & gear",
    link: "/category/fitness",
    color: "bg-red-50 text-red-600"
  },
  {
    icon: <BookOpen size={24} />,
    name: "Books & Media",
    description: "Books, movies & music",
    link: "/category/books",
    color: "bg-yellow-50 text-yellow-600"
  },
  {
    icon: <Monitor size={24} />,
    name: "Computers",
    description: "Laptops & accessories",
    link: "/category/computers",
    color: "bg-indigo-50 text-indigo-600"
  },
  {
    icon: <Baby size={24} />,
    name: "Baby Products",
    description: "Essentials for babies",
    link: "/category/baby",
    color: "bg-pink-50 text-pink-600"
  },
  {
    icon: <UtensilsCrossed size={24} />,
    name: "Kitchen Gadgets",
    description: "Cooking tools & accessories",
    link: "/category/kitchen",
    color: "bg-orange-50 text-orange-600"
  }
];

const CategorySection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Shop by Category</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Browse our curated selection of top-rated products across popular categories
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link 
              key={index} 
              to={category.link} 
              className="group flex flex-col items-center text-center p-6 rounded-lg border bg-white transition-all duration-200 hover:shadow-md"
            >
              <div className={`p-4 rounded-full ${category.color} mb-4 transition-transform group-hover:scale-110`}>
                {category.icon}
              </div>
              <h3 className="font-semibold mb-1 text-gray-900 group-hover:text-primary">
                {category.name}
              </h3>
              <p className="text-sm text-gray-500">
                {category.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
