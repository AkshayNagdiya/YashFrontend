// import React, { useState } from 'react';
// import axios from 'axios';

// const AddProductForm = ({ category }) => {
//   // Initial state for new product
//   const [newProduct, setNewProduct] = useState({
//     productName: '',
//     category,
//     brand: '',
//     price: '',
//     warranty: '',
//     colors: [],
//   });

//   // State for additional category-specific fields
//   const [categoryFields, setCategoryFields] = useState({
//     ram: '',
//     storage: '',
//     capacity: '',
//     energyRating: '',
//     spinSpeed: '',
//     type: '',
//   });

//   // Color state
//   const [color, setColor] = useState({ name: '', quantity: '', price: '' });

//   // Handle adding colors
//   const handleAddColor = () => {
//     if (color.name && color.quantity && color.price) {
//       setNewProduct((prev) => ({
//         ...prev,
//         colors: [...prev.colors, color],
//       }));
//       setColor({ name: '', quantity: '', price: '' });
//     } else {
//       alert('Please fill all color details before adding!');
//     }
//   };

//   // Handle category-specific fields
//   const handleCategoryFieldsChange = (e) => {
//     const { name, value } = e.target;
//     setCategoryFields((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // Update product details
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewProduct((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // Handle form submission
//   const handleAddProduct = async () => {
//     try {
//       const productData = {
//         ...newProduct,
//         ...categoryFields,
//       };
//       const response = await axios.post('http://localhost:5000/api/products', productData);
//       alert('Product added successfully!');
//       setNewProduct({
//         productName: '',
//         category,
//         brand: '',
//         price: '',
//         warranty: '',
//         colors: [],
//       });
//       setCategoryFields({});
//     } catch (error) {
//       alert('Failed to add product');
//     }
//   };

//   // Render different fields based on the category
//   const renderCategoryFields = () => {
//     switch (category) {
//       case 'Mobile':
//         return (
//           <>
//             <input
//               type="text"
//               name="ram"
//               value={categoryFields.ram}
//               onChange={handleCategoryFieldsChange}
//               placeholder="RAM"
//               className="input"
//             />
//             <input
//               type="text"
//               name="storage"
//               value={categoryFields.storage}
//               onChange={handleCategoryFieldsChange}
//               placeholder="Storage"
//               className="input"
//             />
//           </>
//         );
//       case 'Washing Machine':
//         return (
//           <>
//             <input
//               type="text"
//               name="capacity"
//               value={categoryFields.capacity}
//               onChange={handleCategoryFieldsChange}
//               placeholder="Capacity"
//               className="input"
//             />
//             <input
//               type="text"
//               name="spinSpeed"
//               value={categoryFields.spinSpeed}
//               onChange={handleCategoryFieldsChange}
//               placeholder="Spin Speed"
//               className="input"
//             />
//           </>
//         );
//       case 'Refrigerator':
//         return (
//           <>
//             <input
//               type="text"
//               name="capacity"
//               value={categoryFields.capacity}
//               onChange={handleCategoryFieldsChange}
//               placeholder="Capacity"
//               className="input"
//             />
//             <input
//               type="text"
//               name="energyRating"
//               value={categoryFields.energyRating}
//               onChange={handleCategoryFieldsChange}
//               placeholder="Energy Rating"
//               className="input"
//             />
//             <input
//               type="text"
//               name="type"
//               value={categoryFields.type}
//               onChange={handleCategoryFieldsChange}
//               placeholder="Type (Single/Double Door)"
//               className="input"
//             />
//           </>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Add New Product ({category})</h2>

//       <input
//         type="text"
//         name="productName"
//         value={newProduct.productName}
//         onChange={handleChange}
//         placeholder="Product Name"
//         className="input"
//       />
//       <input
//         type="text"
//         name="brand"
//         value={newProduct.brand}
//         onChange={handleChange}
//         placeholder="Brand"
//         className="input"
//       />
//       <input
//         type="number"
//         name="price"
//         value={newProduct.price}
//         onChange={handleChange}
//         placeholder="Price"
//         className="input"
//       />
//       <input
//         type="text"
//         name="warranty"
//         value={newProduct.warranty}
//         onChange={handleChange}
//         placeholder="Warranty"
//         className="input"
//       />

//       {/* Render category-specific fields */}
//       {renderCategoryFields()}

//       <h3 className="mt-4">Add Color</h3>
//       <input
//         type="text"
//         value={color.name}
//         onChange={(e) => setColor({ ...color, name: e.target.value })}
//         placeholder="Color Name"
//         className="input"
//       />
//       <input
//         type="number"
//         value={color.quantity}
//         onChange={(e) => setColor({ ...color, quantity: e.target.value })}
//         placeholder="Quantity"
//         className="input"
//       />
//       <input
//         type="number"
//         value={color.price}
//         onChange={(e) => setColor({ ...color, price: e.target.value })}
//         placeholder="Price"
//         className="input"
//       />
//       <button
//         onClick={handleAddColor}
//         className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
//       >
//         Add Color
//       </button>

//       <div className="mt-4">
//         <button
//           onClick={handleAddProduct}
//           className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
//         >
//           Add Product
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AddProductForm;

import React, { useState } from 'react';
import axios from 'axios';

const AddProductForm = ({ category }) => {
  // Initial state for the new product
  const [newProduct, setNewProduct] = useState({
    productName: '',
    category,
    brand: '',
    price: '',
    warranty: '',
    colors: [],
  });

  // State for category-specific fields
  const [categoryFields, setCategoryFields] = useState({
    ram: '',
    storage: '',
    capacity: '',
    energyRating: '',
    spinSpeed: '',
    type: '',
  });

  // Color state
  const [color, setColor] = useState({ name: '', quantity: '', price: '' });

  // Handle adding colors
  const handleAddColor = () => {
    if (color.name && color.quantity && color.price) {
      setNewProduct((prev) => ({
        ...prev,
        colors: [...prev.colors, color],
      }));
      setColor({ name: '', quantity: '', price: '' });
    } else {
      alert('Please fill all color details before adding!');
    }
  };

  // Handle category-specific fields changes
  const handleCategoryFieldsChange = (e) => {
    const { name, value } = e.target;
    setCategoryFields((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Update product details
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleAddProduct = async () => {
    try {
      const productData = {
        ...newProduct,
        ...categoryFields,
      };
      const response = await axios.post('http://localhost:5000/api/products', productData);
      alert('Product added successfully!');
      // Clear the form
      setNewProduct({
        productName: '',
        category,
        brand: '',
        price: '',
        warranty: '',
        colors: [],
      });
      setCategoryFields({});
    } catch (error) {
      alert('Failed to add product');
    }
  };

  // Render category-specific fields
  const renderCategoryFields = () => {
    switch (category) {
      case 'Mobile':
        return (
          <>
            <div className="mb-4">
              <label className="block text-gray-700">RAM</label>
              <input
                type="text"
                name="ram"
                value={categoryFields.ram}
                onChange={handleCategoryFieldsChange}
                placeholder="RAM"
                className="input"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Storage</label>
              <input
                type="text"
                name="storage"
                value={categoryFields.storage}
                onChange={handleCategoryFieldsChange}
                placeholder="Storage"
                className="input"
              />
            </div>
          </>
        );
      case 'Washing Machine':
        return (
          <>
            <div className="mb-4">
              <label className="block text-gray-700">Capacity</label>
              <input
                type="text"
                name="capacity"
                value={categoryFields.capacity}
                onChange={handleCategoryFieldsChange}
                placeholder="Capacity"
                className="input"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Spin Speed</label>
              <input
                type="text"
                name="spinSpeed"
                value={categoryFields.spinSpeed}
                onChange={handleCategoryFieldsChange}
                placeholder="Spin Speed"
                className="input"
              />
            </div>
          </>
        );
      case 'Refrigerator':
        return (
          <>
            <div className="mb-4">
              <label className="block text-gray-700">Capacity</label>
              <input
                type="text"
                name="capacity"
                value={categoryFields.capacity}
                onChange={handleCategoryFieldsChange}
                placeholder="Capacity"
                className="input"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Energy Rating</label>
              <input
                type="text"
                name="energyRating"
                value={categoryFields.energyRating}
                onChange={handleCategoryFieldsChange}
                placeholder="Energy Rating"
                className="input"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Type (Single/Double Door)</label>
              <input
                type="text"
                name="type"
                value={categoryFields.type}
                onChange={handleCategoryFieldsChange}
                placeholder="Type (Single/Double Door)"
                className="input"
              />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Add New Product ({category})</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="mb-4">
          <label className="block text-gray-700">Product Name</label>
          <input
            type="text"
            name="productName"
            value={newProduct.productName}
            onChange={handleChange}
            placeholder="Product Name"
            className="input"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Brand</label>
          <input
            type="text"
            name="brand"
            value={newProduct.brand}
            onChange={handleChange}
            placeholder="Brand"
            className="input"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Price</label>
          <input
            type="number"
            name="price"
            value={newProduct.price}
            onChange={handleChange}
            placeholder="Price"
            className="input"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Warranty</label>
          <input
            type="text"
            name="warranty"
            value={newProduct.warranty}
            onChange={handleChange}
            placeholder="Warranty"
            className="input"
          />
        </div>
      </div>

      {/* Render category-specific fields */}
      {renderCategoryFields()}

      <h3 className="mt-6 text-xl font-semibold">Add Color</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
        <div className="mb-4">
          <label className="block text-gray-700">Color Name</label>
          <input
            type="text"
            value={color.name}
            onChange={(e) => setColor({ ...color, name: e.target.value })}
            placeholder="Color Name"
            className="input"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Quantity</label>
          <input
            type="number"
            value={color.quantity}
            onChange={(e) => setColor({ ...color, quantity: e.target.value })}
            placeholder="Quantity"
            className="input"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Price</label>
          <input
            type="number"
            value={color.price}
            onChange={(e) => setColor({ ...color, price: e.target.value })}
            placeholder="Price"
            className="input"
          />
        </div>
      </div>

      <button
        onClick={handleAddColor}
        className="mb-4 px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
      >
        Add Color
      </button>

      <div className="mt-6">
        <button
          onClick={handleAddProduct}
          className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Add Product
        </button>
      </div>
    </div>
  );
};

export default AddProductForm;
