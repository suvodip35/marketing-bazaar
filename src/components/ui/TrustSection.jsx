
import React from "react";
import { 
  ShieldCheck, 
  Truck, 
  Award, 
  ThumbsUp 
} from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Honest Reviews",
    description: "Our product reviews are based on extensive research and actual user experiences."
  },
  {
    icon: <Truck className="h-8 w-8 text-primary" />,
    title: "Free & Fast Shipping",
    description: "Most products come with Amazon Prime delivery benefits for fast, free shipping."
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "Expert Recommendations",
    description: "Our team thoroughly tests products to provide you with the best recommendations."
  },
  {
    icon: <ThumbsUp className="h-8 w-8 text-primary" />,
    title: "Verified Products",
    description: "We only feature products from trusted sellers with positive customer feedback."
  }
];

const TrustSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Why Shop With Us</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            We're committed to helping you find the perfect products for your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6">
              <div className="mb-4 p-3 bg-primary/10 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
