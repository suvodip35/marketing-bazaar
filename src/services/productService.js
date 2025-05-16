
// Types for products
/**
 * @typedef {Object} Product
 * @property {string} id - The product ID (e.g. Amazon ASIN)
 * @property {string} title - Product name/title
 * @property {string} image - URL to product image
 * @property {number} rating - Product rating (0-5)
 * @property {string} price - Formatted price string
 * @property {string} description - Product description
 * @property {string} [badge] - Optional badge text (e.g. "Best Seller")
 * @property {string} [category] - Product category
 */

/**
 * Fetches product details by ID
 * @param {string} id - Product ID
 * @returns {Promise<Product>} - Product details
 */
export const getProductById = async (id) => {
  // In production, this would be a call to your backend API
  // that interfaces with Amazon PA API or your product database
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Sample data lookup by ID
      const allProducts = require('./sampleData').products;
      const product = allProducts.find(p => p.id === id);
      
      if (product) {
        resolve(product);
      } else {
        reject(new Error('Product not found'));
      }
    }, 500);
  });
};

/**
 * Fetches products by category
 * @param {string} category - Category slug
 * @returns {Promise<Product[]>} - List of products
 */
export const getProductsByCategory = async (category) => {
  // In production, this would be a call to your backend API
  
  return new Promise((resolve) => {
    setTimeout(() => {
      // Sample product data filtered by category
      const allProducts = require('./sampleData').products;
      const filteredProducts = allProducts.filter(
        p => p.category && p.category.toLowerCase() === category.toLowerCase()
      );
      resolve(filteredProducts);
    }, 500);
  });
};

/**
 * Fetches featured/popular products
 * @param {number} limit - Maximum number of products to return
 * @returns {Promise<Product[]>} - List of featured products
 */
export const getFeaturedProducts = async (limit = 4) => {
  // In production, this would be a call to your backend API
  
  return new Promise((resolve) => {
    setTimeout(() => {
      // Sample featured products (would normally be determined by algorithm)
      const allProducts = require('./sampleData').products;
      const featured = allProducts.filter(p => p.badge === "Best Seller" || p.rating >= 4.5);
      resolve(featured.slice(0, limit));
    }, 500);
  });
};

