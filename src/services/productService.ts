
import { useEffect, useState } from "react";

// Define types for our product data
export interface Product {
  id: string;
  title: string;
  image: string;
  rating: number;
  price: string;
  description: string;
  badge?: string;
}

export interface Deal extends Product {
  originalPrice: string;
  salePrice: string;
  discount: string;
  endTime: string;
}

// We'll use this hook to fetch featured products
export const useFeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        // In a real implementation, this would hit a secure backend endpoint
        // that manages the PA API calls using your credentials
        const response = await fetch('/api/featured-products');
        
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to load products. Please try again later.');
        // Fall back to sample data in case of error
        setProducts(sampleFeaturedProducts);
      } finally {
        setLoading(false);
      }
    };

    // For now, simulate API call with sample data to avoid exposing credentials
    setTimeout(() => {
      setProducts(sampleFeaturedProducts);
      setLoading(false);
    }, 500);

    // Uncomment this when you have a secure backend endpoint
    // fetchProducts();
  }, []);

  return { products, loading, error };
};

// Similar hook for deals
export const useDeals = () => {
  const [deals, setDeals] = useState<Deal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        setLoading(true);
        // In a real implementation, this would hit a secure backend endpoint
        const response = await fetch('/api/deals');
        
        if (!response.ok) {
          throw new Error('Failed to fetch deals');
        }
        
        const data = await response.json();
        setDeals(data);
      } catch (err) {
        console.error('Error fetching deals:', err);
        setError('Failed to load deals. Please try again later.');
        // Fall back to sample data in case of error
        setDeals(sampleDeals);
      } finally {
        setLoading(false);
      }
    };

    // For now, simulate API call with sample data
    setTimeout(() => {
      setDeals(sampleDeals);
      setLoading(false);
    }, 500);

    // Uncomment this when you have a secure backend endpoint
    // fetchDeals();
  }, []);

  return { deals, loading, error };
};

// Sample product data - this would be replaced with API call results in production
const sampleFeaturedProducts: Product[] = [
  {
    id: "B09G9FPHY6",
    title: "Apple AirPods Pro (2nd Generation) Wireless Earbuds",
    image: "https://m.media-amazon.com/images/I/71bhWgQK-cL._AC_SL1500_.jpg",
    rating: 4.7,
    price: "$249.00",
    description: "Active Noise Cancellation reduces unwanted background noise. Adaptive Transparency lets outside sounds in while reducing loud environmental noise.",
    badge: "Best Seller"
  },
  {
    id: "B0CHX3QBCH",
    title: "Amazon Fire TV Stick 4K streaming device",
    image: "https://m.media-amazon.com/images/I/51cYet1f5QL._AC_SL1000_.jpg",
    rating: 4.6,
    price: "$49.99",
    description: "Our most powerful streaming stick - 30% more powerful than Fire TV Stick 4K Max (2021), with faster app starts and more fluid navigation."
  },
  {
    id: "B0BSL1JPZW",
    title: "Sony WH-1000XM5 Wireless Noise Canceling Headphones",
    image: "https://m.media-amazon.com/images/I/61+btxzpfDL._AC_SL1500_.jpg",
    rating: 4.5,
    price: "$398.00",
    description: "Industry Leading noise cancellation-two processors control 8 microphones for unprecedented noise cancellation."
  },
  {
    id: "B07ZPML7NP",
    title: "Kindle Paperwhite 16 GB – Now with a 6.8\" display",
    image: "https://m.media-amazon.com/images/I/61Ww4abGclL._AC_SL1000_.jpg",
    rating: 4.8,
    price: "$149.99",
    description: "Kindle Paperwhite – Now with a 6.8\" display and thinner borders, adjustable warm light, up to 10 weeks of battery life."
  }
];

// Sample deals data
const sampleDeals: Deal[] = [
  {
    id: "B07V4GCFP9",
    title: "Instant Pot Duo Plus 9-in-1 Electric Pressure Cooker",
    image: "https://m.media-amazon.com/images/I/71V1LrY1MSL._AC_SL1500_.jpg",
    rating: 4.6,
    price: "$99.95",
    description: "9-in-1 functionality: pressure cook, slow cook, rice cooker, yogurt maker, steamer, sauté pan, yogurt maker, sterilizer and food warmer.",
    originalPrice: "$149.99",
    salePrice: "$99.95",
    discount: "33%",
    endTime: "2023-11-20T23:59:59"
  },
  {
    id: "B08N5LNQCX",
    title: "Keurig K-Mini Coffee Maker, Single Serve K-Cup Pod Coffee Brewer",
    image: "https://m.media-amazon.com/images/I/61tgXQBeYkL._AC_SL1500_.jpg",
    rating: 4.4,
    price: "$69.99",
    description: "Less than 5 inches wide, perfect for small spaces. Brew 6-12oz of your favorite ground coffee.",
    originalPrice: "$99.99",
    salePrice: "$69.99",
    discount: "30%",
    endTime: "2023-11-18T23:59:59",
    badge: "Limited Time"
  },
  {
    id: "B07Q2M2YL5",
    title: "Shark Navigator Lift-Away Upright Vacuum",
    image: "https://m.media-amazon.com/images/I/61HWKs7sfVL._AC_SL1500_.jpg",
    rating: 4.7,
    price: "$149.99",
    description: "Lift-Away: Lift away the detachable pod and easily clean, above-floor areas like stairs and furniture.",
    originalPrice: "$199.99",
    salePrice: "$149.99",
    discount: "25%",
    endTime: "2023-11-22T23:59:59"
  }
];
