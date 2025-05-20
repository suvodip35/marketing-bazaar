
// Import sample data
const { products } = require('./sampleData');

/**
 * Searches products based on query
 * @param {string} query - Search query text
 * @returns {Promise<Array>} - Matching products
 */
export const searchProducts = async (query) => {
  // In production, this would be a call to your backend API
  // that interfaces with your product database
  
  return new Promise((resolve) => {
    setTimeout(() => {
      // If no query is provided, return all products
      if (!query || query.trim() === '') {
        resolve(products);
        return;
      }
      
      // Filter products by query
      const lowercaseQuery = query.toLowerCase();
      const results = products.filter(product => 
        product.title.toLowerCase().includes(lowercaseQuery) ||
        product.description.toLowerCase().includes(lowercaseQuery) ||
        (product.category && product.category.toLowerCase().includes(lowercaseQuery))
      );
      
      resolve(results);
    }, 500); // Simulate network delay
  });
};
