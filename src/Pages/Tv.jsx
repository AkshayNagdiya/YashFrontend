import React, { useState, useEffect } from "react";
import axios from "axios";

const TV = () => {
  const [products, setProducts] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editProductId, setEditProductId] = useState(null);

  const [newProduct, setNewProduct] = useState({
    productName: "",
    brand: "",
    warranty: "",
    size: "",
    energyRating: "",
    type: "",
    variants: [],
  });

  const [variant, setVariant] = useState({
    color: "",
    price: "",
    quantity: "",
    model: "",
  });

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://yashbackend.onrender.com/api/tvs");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddVariant = () => {
    if (variant.color && variant.price && variant.quantity) {
      setNewProduct((prev) => ({
        ...prev,
        variants: [...prev.variants, variant],
      }));
      setVariant({
        color: "",
        price: "",
        quantity: "",
        model: "",
      });
    } else {
      alert("Please fill all required fields for the variant!");
    }
  };

  const handleRemoveVariant = (index) => {
    const updatedVariants = newProduct.variants.filter(
      (_, idx) => idx !== index
    );
    setNewProduct((prev) => ({
      ...prev,
      variants: updatedVariants,
    }));
  };

  const handleSaveProduct = async () => {
    try {
      if (editProductId) {
        // Edit Product
        await axios.put(
          `https://yashbackend.onrender.com/api/tvs/${editProductId}`,
          newProduct
        );
      } else {
        // Add New Product
        await axios.post("https://yashbackend.onrender.com/api/tvs", newProduct);
      }
      setNewProduct({
        productName: "",
        brand: "",
        warranty: "",
        size: "",
        energyRating: "",
        type: "",
        variants: [],
      });
      setShowAddModal(false);
      setShowEditModal(false);
      fetchProducts();
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  const handleEditProduct = (product) => {
    setNewProduct({ ...product });
    setEditProductId(product._id);
    setShowEditModal(true);
  };

  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`https://yashbackend.onrender.com/api/tvs/${id}`);
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="container mx-auto p-4 bg-gray-100 h-screen">
      <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">
        TV Inventory
      </h1>

      <button
        onClick={() => setShowAddModal(true)}
        className="mb-4 bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 flex items-center justify-center"
      >
        <i className="fas fa-plus-circle mr-2"></i> Add New Product
      </button>

      {/* Add/Edit Modal */}
      {(showAddModal || showEditModal) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-md h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">
              {showEditModal ? "Edit TV" : "Add TV"}
            </h2>
            <label className="block mb-2">
              Product Name:
              <input
                type="text"
                value={newProduct.productName}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, productName: e.target.value })
                }
                className="border p-2 w-full"
              />
            </label>
            <label className="block mb-2">
              Brand:
              <input
                type="text"
                value={newProduct.brand}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, brand: e.target.value })
                }
                className="border p-2 w-full"
              />
            </label>
            <label className="block mb-2">
              Warranty:
              <input
                type="text"
                value={newProduct.warranty}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, warranty: e.target.value })
                }
                className="border p-2 w-full"
              />
            </label>
            <label className="block mb-2">
              Size:
              <input
                type="text"
                value={newProduct.size}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, size: e.target.value })
                }
                className="border p-2 w-full"
              />
            </label>
            <label className="block mb-2">
              Energy Rating:
              <input
                type="text"
                value={newProduct.energyRating}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, energyRating: e.target.value })
                }
                className="border p-2 w-full"
              />
            </label>
            <label className="block mb-2">
              Type:
              <input
                type="text"
                value={newProduct.type}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, type: e.target.value })
                }
                className="border p-2 w-full"
              />
            </label>
            <h3 className="mt-4 font-bold">Add Variants</h3>
            <label className="block mb-2">
              Color:
              <input
                type="text"
                value={variant.color}
                onChange={(e) =>
                  setVariant({ ...variant, color: e.target.value })
                }
                className="border p-2 w-full"
              />
            </label>
            <label className="block mb-2">
              Price:
              <input
                type="number"
                value={variant.price}
                onChange={(e) =>
                  setVariant({ ...variant, price: e.target.value })
                }
                className="border p-2 w-full"
              />
            </label>
            <label className="block mb-2">
              Quantity:
              <input
                type="number"
                value={variant.quantity}
                onChange={(e) =>
                  setVariant({ ...variant, quantity: e.target.value })
                }
                className="border p-2 w-full"
              />
            </label>
            <label className="block mb-2">
              Model:
              <input
                type="text"
                value={variant.model}
                onChange={(e) =>
                  setVariant({ ...variant, model: e.target.value })
                }
                className="border p-2 w-full"
              />
            </label>
            <button
              className="bg-green-500 text-white px-4 py-2 mt-2 rounded"
              onClick={handleAddVariant}
            >
              Add Variant
            </button>

            {/* Display Added Variants */}
            <div className="mt-4">
              <h4 className="font-bold">Variants:</h4>
              <ul>
                {newProduct.variants.map((v, idx) => (
                  <li key={idx} className="flex justify-between mb-2">
                    <span>
                      {v.color} - ${v.price} - {v.quantity} units
                    </span>
                    <button
                      className="text-red-500"
                      onClick={() => handleRemoveVariant(idx)}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-between w-full">
              <button
                className="bg-gray-500 text-white px-4 py-2 mt-2 rounded"
                onClick={() => {
                  setShowAddModal(false);
                  setShowEditModal(false);
                }}
              >
                Close
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
                onClick={handleSaveProduct}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Product List */}
      <div className="overflow-x-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Inventory List</h2>
        <table className="min-w-full table-auto">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-4 py-2">Product Name</th>
              <th className="px-4 py-2">Brand</th>
              <th className="px-4 py-2">Size</th>
              <th className="px-4 py-2">Energy Rating</th>
              <th className="px-4 py-2">Type</th>
              <th className="px-4 py-2">Variant Color</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Quantity</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) =>
              // Iterate through product variants and display each variant in a row under the same product
              product.variants.map((variant, idx) => (
                <tr key={`${product._id}-${idx}`}>
                  {/* Product Details (shown once for the product) */}
                  {idx === 0 && (
                    <>
                      <td
                        rowSpan={product.variants.length}
                        className="border px-4 py-2"
                      >
                        {product.productName}
                      </td>
                      <td
                        rowSpan={product.variants.length}
                        className="border px-4 py-2"
                      >
                        {product.brand}
                      </td>
                      <td
                        rowSpan={product.variants.length}
                        className="border px-4 py-2"
                      >
                        {product.size}
                      </td>
                      <td
                        rowSpan={product.variants.length}
                        className="border px-4 py-2"
                      >
                        {product.energyRating}
                      </td>
                      <td
                        rowSpan={product.variants.length}
                        className="border px-4 py-2"
                      >
                        {product.type}
                      </td>
                    </>
                  )}

                  {/* Variant Details */}
                  <td className="border px-4 py-2">{variant.color}</td>
                  <td className="border px-4 py-2">${variant.price}</td>
                  <td className="border px-4 py-2">{variant.quantity}</td>

                  {/* Actions Button Column (shown once for the product) */}
                  {idx === 0 && (
                    <td
                      rowSpan={product.variants.length}
                      className="border px-4 py-2 text-center"
                    >
                      {/* Edit Button */}
                      <button
                        onClick={() => handleEditProduct(product)}
                        className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 flex items-center justify-center"
                        title="Edit Product"
                      >
                        <i className="fas fa-edit mr-2"></i> Edit
                      </button>

                      {/* Remove Button */}
                      <button
                        onClick={() => handleDeleteProduct(product)}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 flex items-center justify-center"
                        title="Delete Product"
                      >
                        <i className="fas fa-trash-alt mr-2"></i> Remove
                      </button>
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TV;
