
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

import { useState, useEffect } from 'react';

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

/**
 * React hook for fetching featured products
 * @param {number} limit - Maximum number of products to return
 * @returns {Object} - { products, loading, error }
 */
export const useFeaturedProducts = (limit = 4) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        setLoading(true);
        const data = await getFeaturedProducts(limit);
        setProducts(data);
        setError(null);
      } catch (err) {
        console.error("Error fetching featured products:", err);
        setError("Failed to load featured products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, [limit]);

  return { products, loading, error };
};

/**
 * React hook for fetching deals
 * @param {number} limit - Maximum number of deals to return
 * @returns {Object} - { deals, loading, error }
 */
export const useDeals = (limit = 3) => {
  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        setLoading(true);
        // In a real app, this would be a separate API call
        // For now, we'll just filter products with a discount
        const allProducts = require('./sampleData').products;
        const dealsData = allProducts
          .filter(p => p.discount) // Only products with discount
          .slice(0, limit);
        
        setDeals(dealsData);
        setError(null);
      } catch (err) {
        console.error("Error fetching deals:", err);
        setError("Failed to load deals. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchDeals();
  }, [limit]);

  return { deals, loading, error };
};
