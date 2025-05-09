
// This simulates searching products from a database or API
export const searchProducts = async (query) => {
  // In production, this would be a call to your backend API
  // that interfaces with Amazon PA API
  
  // For now, we'll simulate a search with a delay
  return new Promise((resolve) => {
    setTimeout(() => {
      // Sample product data filtered by query
      const results = sampleProducts.filter(product => 
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
      );
      resolve(results);
    }, 500);
  });
};

// Sample product data for search results
const sampleProducts = [
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
  },
  {
    id: "B08TQPBMJN",
    title: "Logitech MX Master 3S - Wireless Mouse",
    image: "https://m.media-amazon.com/images/I/614w3LuZTYL._AC_SL1500_.jpg",
    rating: 4.7,
    price: "$99.99",
    description: "Ergonomic design with ultra-fast scrolling and precise tracking on any surface, even glass."
  },
  {
    id: "B07V4GCFP9",
    title: "Instant Pot Duo Plus 9-in-1 Electric Pressure Cooker",
    image: "https://m.media-amazon.com/images/I/71V1LrY1MSL._AC_SL1500_.jpg",
    rating: 4.6,
    price: "$99.95",
    description: "9-in-1 functionality: pressure cook, slow cook, rice cooker, yogurt maker, steamer, sauté pan, yogurt maker, sterilizer and food warmer."
  }
];
