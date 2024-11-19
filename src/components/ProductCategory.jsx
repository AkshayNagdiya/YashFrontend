import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductCategory = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts(category);
  }, [category]);

  const fetchProducts = async (category) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/products?category=${category}`);
      setProducts(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to load products');
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{category} Inventory</h2>
      {products.length === 0 ? (
        <p>No products available in this category.</p>
      ) : (
        <table className="min-w-full table-auto">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-4 py-2">Product Name</th>
              <th className="px-4 py-2">Brand</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Warranty</th>
              <th className="px-4 py-2">Colors</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td className="border px-4 py-2">{product.productName}</td>
                <td className="border px-4 py-2">{product.brand}</td>
                <td className="border px-4 py-2">${product.price}</td>
                <td className="border px-4 py-2">{product.warranty}</td>
                <td className="border px-4 py-2">
                  <ul>
                    {product.colors && product.colors.length > 0 ? (
                      product.colors.map((color, idx) => (
                        <li key={idx}>
                          {color.name} - {color.quantity} units - ${color.price}
                        </li>
                      ))
                    ) : (
                      <li>No colors available</li>
                    )}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductCategory;
