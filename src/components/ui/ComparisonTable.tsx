
import React from "react";
import { CheckCircle2, XCircle, HelpCircle } from "lucide-react";
import { Product } from "@/services/productService";

interface ComparisonTableProps {
  products: Product[];
}

// This component would normally be fed with more detailed product specs
// For demonstration purposes, we'll generate some comparison data
const ComparisonTable = ({ products }: ComparisonTableProps) => {
  // Generate random specs for demonstration
  const generateSpecs = (product: Product) => {
    // Use product ID to generate somewhat consistent "random" values
    const idSum = product.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    
    return {
      resolution: ['HD', 'Full HD', '4K', '8K'][idSum % 4],
      batteryLife: `${10 + (idSum % 15)} hours`,
      waterproof: Boolean(idSum % 2),
      warranty: `${1 + (idSum % 3)} year${idSum % 3 !== 0 ? 's' : ''}`,
      connectivity: ['Bluetooth 4.0', 'Bluetooth 5.0', 'Bluetooth 5.2', 'WiFi + Bluetooth 5.0'][idSum % 4],
      weight: `${0.5 + (idSum % 10) / 10} lbs`,
      dimensions: `${5 + (idSum % 5)}\" x ${3 + (idSum % 3)}\" x ${0.5 + (idSum % 5) / 10}\"`,
      releaseYear: 2020 + (idSum % 4),
      storage: ['32GB', '64GB', '128GB', '256GB', '512GB'][idSum % 5],
      processor: ['Dual-core', 'Quad-core', 'Octa-core', 'Single-core'][idSum % 4],
    };
  };
  
  const productSpecs = products.map(p => ({
    product: p,
    specs: generateSpecs(p)
  }));
  
  // Rendering helpers
  const renderBoolean = (value: boolean) => {
    return value ? 
      <CheckCircle2 className="mx-auto text-green-500" size={20} /> : 
      <XCircle className="mx-auto text-red-500" size={20} />;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="p-4 text-left font-medium text-gray-600 border-b border-r">Feature</th>
              {productSpecs.map(({ product }) => (
                <th key={product.id} className="p-4 text-center font-medium text-gray-600 border-b">
                  {product.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4 font-medium border-r border-b">Image</td>
              {productSpecs.map(({ product }) => (
                <td key={`${product.id}-image`} className="p-4 text-center border-b">
                  <div className="flex justify-center h-28">
                    <img src={product.image} alt={product.title} className="h-full object-contain" />
                  </div>
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 font-medium border-r border-b">Price</td>
              {productSpecs.map(({ product }) => (
                <td key={`${product.id}-price`} className="p-4 text-center border-b font-bold text-primary">
                  {product.price}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 font-medium border-r border-b">Rating</td>
              {productSpecs.map(({ product }) => (
                <td key={`${product.id}-rating`} className="p-4 text-center border-b">
                  {product.rating} / 5
                </td>
              ))}
            </tr>
            
            {/* Specs rows - would normally be dynamic based on product category */}
            <tr>
              <td className="p-4 font-medium border-r border-b">Resolution</td>
              {productSpecs.map(({ specs, product }) => (
                <td key={`${product.id}-resolution`} className="p-4 text-center border-b">
                  {specs.resolution}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 font-medium border-r border-b">Battery Life</td>
              {productSpecs.map(({ specs, product }) => (
                <td key={`${product.id}-battery`} className="p-4 text-center border-b">
                  {specs.batteryLife}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 font-medium border-r border-b">Waterproof</td>
              {productSpecs.map(({ specs, product }) => (
                <td key={`${product.id}-waterproof`} className="p-4 text-center border-b">
                  {renderBoolean(specs.waterproof)}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 font-medium border-r border-b">Warranty</td>
              {productSpecs.map(({ specs, product }) => (
                <td key={`${product.id}-warranty`} className="p-4 text-center border-b">
                  {specs.warranty}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 font-medium border-r border-b">Connectivity</td>
              {productSpecs.map(({ specs, product }) => (
                <td key={`${product.id}-connectivity`} className="p-4 text-center border-b">
                  {specs.connectivity}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 font-medium border-r border-b">Weight</td>
              {productSpecs.map(({ specs, product }) => (
                <td key={`${product.id}-weight`} className="p-4 text-center border-b">
                  {specs.weight}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 font-medium border-r border-b">Dimensions</td>
              {productSpecs.map(({ specs, product }) => (
                <td key={`${product.id}-dimensions`} className="p-4 text-center border-b">
                  {specs.dimensions}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 font-medium border-r border-b">Release Year</td>
              {productSpecs.map(({ specs, product }) => (
                <td key={`${product.id}-year`} className="p-4 text-center border-b">
                  {specs.releaseYear}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 font-medium border-r border-b">Storage</td>
              {productSpecs.map(({ specs, product }) => (
                <td key={`${product.id}-storage`} className="p-4 text-center border-b">
                  {specs.storage}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 font-medium border-r">Processor</td>
              {productSpecs.map(({ specs, product }) => (
                <td key={`${product.id}-processor`} className="p-4 text-center">
                  {specs.processor}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparisonTable;
