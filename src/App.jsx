// // // // // import { useState } from "react";

// // // // // function App() {
// // // // //   const [items, setItems] = useState([
// // // // //     { id: 1, name: "Washing Machine", quantity: 10, price: 200 },
// // // // //     { id: 2, name: "Microwave", quantity: 5, price: 150 },
// // // // //     { id: 3, name: "Refrigerator", quantity: 3, price: 500 },
// // // // //   ]);

// // // // //   const [newItem, setNewItem] = useState({
// // // // //     name: "",
// // // // //     quantity: "",
// // // // //     price: "",
// // // // //   });

// // // // //   const handleAddItem = () => {
// // // // //     const item = {
// // // // //       id: items.length + 1,
// // // // //       name: newItem.name,
// // // // //       quantity: parseInt(newItem.quantity),
// // // // //       price: parseFloat(newItem.price),
// // // // //     };

// // // // //     setItems([...items, item]);
// // // // //     setNewItem({ name: "", quantity: "", price: "" });
// // // // //   };

// // // // //   const handleRemoveItem = (id) => {
// // // // //     setItems(items.filter((item) => item.id !== id));
// // // // //   };

// // // // //   return (
// // // // //     <div className="min-h-screen bg-gray-100 p-6">
// // // // //       <div className="max-w-7xl mx-auto">
// // // // //         <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">
// // // // //           Electric Shop Inventory
// // // // //         </h1>

// // // // //         {/* Add Item Form */}
// // // // //         <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
// // // // //           <h2 className="text-xl font-semibold mb-4">Add New Item</h2>
// // // // //           <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
// // // // //             <input
// // // // //               type="text"
// // // // //               className="border p-2 rounded"
// // // // //               placeholder="Item Name"
// // // // //               value={newItem.name}
// // // // //               onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
// // // // //             />
// // // // //             <input
// // // // //               type="number"
// // // // //               className="border p-2 rounded"
// // // // //               placeholder="Quantity"
// // // // //               value={newItem.quantity}
// // // // //               onChange={(e) =>
// // // // //                 setNewItem({ ...newItem, quantity: e.target.value })
// // // // //               }
// // // // //             />
// // // // //             <input
// // // // //               type="number"
// // // // //               className="border p-2 rounded"
// // // // //               placeholder="Price"
// // // // //               value={newItem.price}
// // // // //               onChange={(e) =>
// // // // //                 setNewItem({ ...newItem, price: e.target.value })
// // // // //               }
// // // // //             />
// // // // //           </div>
// // // // //           <button
// // // // //             onClick={handleAddItem}
// // // // //             className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
// // // // //           >
// // // // //             Add Item
// // // // //           </button>
// // // // //         </div>

// // // // //         {/* Inventory Table */}
// // // // //         <div className="overflow-x-auto bg-white p-6 rounded-lg shadow-lg">
// // // // //           <h2 className="text-xl font-semibold mb-4">Inventory List</h2>
// // // // //           <table className="min-w-full table-auto">
// // // // //             <thead className="bg-blue-600 text-white">
// // // // //               <tr>
// // // // //                 <th className="px-4 py-2">Item</th>
// // // // //                 <th className="px-4 py-2">Quantity</th>
// // // // //                 <th className="px-4 py-2">Price</th>
// // // // //                 <th className="px-4 py-2">Actions</th>
// // // // //               </tr>
// // // // //             </thead>
// // // // //             <tbody>
// // // // //               {items.map((item) => (
// // // // //                 <tr key={item.id}>
// // // // //                   <td className="border px-4 py-2">{item.name}</td>
// // // // //                   <td className="border px-4 py-2">{item.quantity}</td>
// // // // //                   <td className="border px-4 py-2">${item.price}</td>
// // // // //                   <td className="border px-4 py-2">
// // // // //                     <button
// // // // //                       onClick={() => handleRemoveItem(item.id)}
// // // // //                       className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
// // // // //                     >
// // // // //                       Remove
// // // // //                     </button>
// // // // //                   </td>
// // // // //                 </tr>
// // // // //               ))}
// // // // //             </tbody>
// // // // //           </table>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default App;

// // // // import React from 'react';
// // // // import { useState } from "react";
// // // // import axios from "axios"; // We will use axios to interact with a backend if needed

// // // // function App() {
// // // //   const [products, setProducts] = useState([]);
// // // //   const [newProduct, setNewProduct] = useState({
// // // //     name: "",
// // // //     category: "",
// // // //     brand: "",
// // // //     price: "",
// // // //     quantity: "",
// // // //   });

// // // //   // Fetch the products from the backend (MongoDB via Express API)
// // // //   const fetchProducts = async () => {
// // // //     try {
// // // //       const response = await axios.get("http://localhost:5000/api/products"); // Adjust the URL to your backend endpoint
// // // //       setProducts(response.data);
// // // //     } catch (error) {
// // // //       console.error("Error fetching products:", error);
// // // //     }
// // // //   };

// // // //   // Call fetchProducts on page load to populate the table
// // // //   React.useEffect(() => {
// // // //     fetchProducts();
// // // //   }, []);

// // // //   // Handle Add Product
// // // //   const handleAddProduct = async () => {
// // // //     try {
// // // //       const response = await axios.post("http://localhost:5000/api/products", newProduct);
// // // //       setProducts([...products, response.data]);
// // // //       setNewProduct({
// // // //         name: "",
// // // //         category: "",
// // // //         brand: "",
// // // //         price: "",
// // // //         quantity: "",
// // // //       });
// // // //     } catch (error) {
// // // //       console.error("Error adding product:", error);
// // // //     }
// // // //   };

// // // //   // Handle Remove Product
// // // //   const handleRemoveProduct = async (id) => {
// // // //     try {
// // // //       await axios.delete(`http://localhost:5000/api/products/${id}`);
// // // //       setProducts(products.filter((product) => product._id !== id));
// // // //     } catch (error) {
// // // //       console.error("Error deleting product:", error);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="min-h-screen bg-gray-100 p-6">
// // // //       <div className="max-w-7xl mx-auto">
// // // //         <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">
// // // //           Electric Shop Inventory
// // // //         </h1>

// // // //         {/* Add Product Form */}
// // // //         <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
// // // //           <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
// // // //           <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
// // // //             <input
// // // //               type="text"
// // // //               className="border p-2 rounded"
// // // //               placeholder="Product Name"
// // // //               value={newProduct.name}
// // // //               onChange={(e) =>
// // // //                 setNewProduct({ ...newProduct, name: e.target.value })
// // // //               }
// // // //             />
// // // //             <input
// // // //               type="text"
// // // //               className="border p-2 rounded"
// // // //               placeholder="Category"
// // // //               value={newProduct.category}
// // // //               onChange={(e) =>
// // // //                 setNewProduct({ ...newProduct, category: e.target.value })
// // // //               }
// // // //             />
// // // //             <input
// // // //               type="text"
// // // //               className="border p-2 rounded"
// // // //               placeholder="Brand"
// // // //               value={newProduct.brand}
// // // //               onChange={(e) =>
// // // //                 setNewProduct({ ...newProduct, brand: e.target.value })
// // // //               }
// // // //             />
// // // //           </div>
// // // //           <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-4">
// // // //             <input
// // // //               type="number"
// // // //               className="border p-2 rounded"
// // // //               placeholder="Price"
// // // //               value={newProduct.price}
// // // //               onChange={(e) =>
// // // //                 setNewProduct({ ...newProduct, price: e.target.value })
// // // //               }
// // // //             />
// // // //             <input
// // // //               type="number"
// // // //               className="border p-2 rounded"
// // // //               placeholder="Quantity"
// // // //               value={newProduct.quantity}
// // // //               onChange={(e) =>
// // // //                 setNewProduct({ ...newProduct, quantity: e.target.value })
// // // //               }
// // // //             />
// // // //           </div>
// // // //           <button
// // // //             onClick={handleAddProduct}
// // // //             className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
// // // //           >
// // // //             Add Product
// // // //           </button>
// // // //         </div>

// // // //         {/* Product Inventory Table */}
// // // //         <div className="overflow-x-auto bg-white p-6 rounded-lg shadow-lg">
// // // //           <h2 className="text-xl font-semibold mb-4">Inventory List</h2>
// // // //           <table className="min-w-full table-auto">
// // // //             <thead className="bg-blue-600 text-white">
// // // //               <tr>
// // // //                 <th className="px-4 py-2">Name</th>
// // // //                 <th className="px-4 py-2">Category</th>
// // // //                 <th className="px-4 py-2">Brand</th>
// // // //                 <th className="px-4 py-2">Price</th>
// // // //                 <th className="px-4 py-2">Quantity</th>
// // // //                 <th className="px-4 py-2">Actions</th>
// // // //               </tr>
// // // //             </thead>
// // // //             <tbody>
// // // //               {products?.map((product) => (
// // // //                 <tr key={product._id}>
// // // //                   <td className="border px-4 py-2">{product?.name}</td>
// // // //                   <td className="border px-4 py-2">{product?.category}</td>
// // // //                   <td className="border px-4 py-2">{product?.brand}</td>
// // // //                   <td className="border px-4 py-2">${product?.price}</td>
// // // //                   <td className="border px-4 py-2">{product?.quantity}</td>
// // // //                   <td className="border px-4 py-2">
// // // //                     <button
// // // //                       onClick={() => handleRemoveProduct(product._id)}
// // // //                       className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
// // // //                     >
// // // //                       Remove
// // // //                     </button>
// // // //                   </td>
// // // //                 </tr>
// // // //               ))}
// // // //             </tbody>
// // // //           </table>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default App;

// // // import React, { useState, useEffect } from "react";
// // // import axios from "axios";

// // // const App = () => {
// // //   const [products, setProducts] = useState([]);
// // //   const [newProduct, setNewProduct] = useState({
// // //     productName: "",
// // //     category: "",
// // //     brand: "",
// // //     ram: "",
// // //     storage: "",
// // //     price: "",
// // //     warranty: "",
// // //     colors: [],
// // //   });

// // //   // State for colors (to add multiple colors dynamically)
// // //   const [color, setColor] = useState({
// // //     name: "",
// // //     quantity: "",
// // //     price: "",
// // //   });

// // //   // Fetch products from the backend
// // //   useEffect(() => {
// // //     fetchProducts();
// // //   }, []);

// // //   const fetchProducts = async () => {
// // //     try {
// // //       const response = await axios.get("http://localhost:5000/api/products");
// // //       setProducts(response.data);
// // //     } catch (error) {
// // //       console.error("Error fetching products:", error);
// // //     }
// // //   };

// // //   // Add a color to the product
// // //   const handleAddColor = () => {
// // //     if (color.name && color.quantity && color.price) {
// // //       setNewProduct((prev) => ({
// // //         ...prev,
// // //         colors: [...prev.colors, color],
// // //       }));
// // //       setColor({ name: "", quantity: "", price: "" }); // Reset color input
// // //     }
// // //   };

// // //   // Handle adding the entire product
// // //   const handleAddProduct = async () => {
// // //     try {
// // //       const response = await axios.post("http://localhost:5000/api/products", newProduct);
// // //       setProducts([...products, response.data]);
// // //       setNewProduct({
// // //         productName: "",
// // //         category: "",
// // //         brand: "",
// // //         ram: "",
// // //         storage: "",
// // //         price: "",
// // //         warranty: "",
// // //         colors: [],
// // //       });
// // //     } catch (error) {
// // //       console.error("Error adding product:", error);
// // //     }
// // //   };

// // //   // Handle remove product
// // //   const handleRemoveProduct = async (id) => {
// // //     try {
// // //       await axios.delete(`http://localhost:5000/api/products/${id}`);
// // //       setProducts(products.filter((product) => product._id !== id));
// // //     } catch (error) {
// // //       console.error("Error deleting product:", error);
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gray-100 p-6">
// // //       <div className="max-w-7xl mx-auto">
// // //         <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">
// // //           Mobile Shop Inventory
// // //         </h1>

// // //         {/* Add Product Form */}
// // //         <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
// // //           <h2 className="text-xl font-semibold mb-4">Add New Product</h2>

// // //           {/* Product Details Form */}
// // //           <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
// // //             <input
// // //               type="text"
// // //               className="border p-2 rounded"
// // //               placeholder="Product Name"
// // //               value={newProduct.productName}
// // //               onChange={(e) =>
// // //                 setNewProduct({ ...newProduct, productName: e.target.value })
// // //               }
// // //             />
// // //             <input
// // //               type="text"
// // //               className="border p-2 rounded"
// // //               placeholder="Category"
// // //               value={newProduct.category}
// // //               onChange={(e) =>
// // //                 setNewProduct({ ...newProduct, category: e.target.value })
// // //               }
// // //             />
// // //             <input
// // //               type="text"
// // //               className="border p-2 rounded"
// // //               placeholder="Brand"
// // //               value={newProduct.brand}
// // //               onChange={(e) =>
// // //                 setNewProduct({ ...newProduct, brand: e.target.value })
// // //               }
// // //             />
// // //             <input
// // //               type="text"
// // //               className="border p-2 rounded"
// // //               placeholder="RAM"
// // //               value={newProduct.ram}
// // //               onChange={(e) =>
// // //                 setNewProduct({ ...newProduct, ram: e.target.value })
// // //               }
// // //             />
// // //             <input
// // //               type="text"
// // //               className="border p-2 rounded"
// // //               placeholder="Storage"
// // //               value={newProduct.storage}
// // //               onChange={(e) =>
// // //                 setNewProduct({ ...newProduct, storage: e.target.value })
// // //               }
// // //             />
// // //             <input
// // //               type="number"
// // //               className="border p-2 rounded"
// // //               placeholder="Price"
// // //               value={newProduct.price}
// // //               onChange={(e) =>
// // //                 setNewProduct({ ...newProduct, price: e.target.value })
// // //               }
// // //             />
// // //             <input
// // //               type="text"
// // //               className="border p-2 rounded"
// // //               placeholder="Warranty"
// // //               value={newProduct.warranty}
// // //               onChange={(e) =>
// // //                 setNewProduct({ ...newProduct, warranty: e.target.value })
// // //               }
// // //             />
// // //           </div>

// // //           {/* Add Color Form */}
// // //           <div className="mt-4">
// // //             <h3 className="text-lg font-semibold">Add Colors</h3>
// // //             <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
// // //               <input
// // //                 type="text"
// // //                 className="border p-2 rounded"
// // //                 placeholder="Color Name"
// // //                 value={color.name}
// // //                 onChange={(e) => setColor({ ...color, name: e.target.value })}
// // //               />
// // //               <input
// // //                 type="number"
// // //                 className="border p-2 rounded"
// // //                 placeholder="Color Quantity"
// // //                 value={color.quantity}
// // //                 onChange={(e) => setColor({ ...color, quantity: e.target.value })}
// // //               />
// // //               <input
// // //                 type="number"
// // //                 className="border p-2 rounded"
// // //                 placeholder="Color Price"
// // //                 value={color.price}
// // //                 onChange={(e) => setColor({ ...color, price: e.target.value })}
// // //               />
// // //             </div>
// // //             <button
// // //               onClick={handleAddColor}
// // //               className="mt-2 bg-green-500 text-white p-2 rounded hover:bg-green-600"
// // //             >
// // //               Add Color
// // //             </button>
// // //           </div>

// // //           {/* Add Product Button */}
// // //           <button
// // //             onClick={handleAddProduct}
// // //             className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
// // //           >
// // //             Add Product
// // //           </button>
// // //         </div>

// // //         {/* Product Inventory Table */}
// // //         <div className="overflow-x-auto bg-white p-6 rounded-lg shadow-lg">
// // //           <h2 className="text-xl font-semibold mb-4">Inventory List</h2>
// // //           <table className="min-w-full table-auto">
// // //             <thead className="bg-blue-600 text-white">
// // //               <tr>
// // //                 <th className="px-4 py-2">Product Name</th>
// // //                 <th className="px-4 py-2">Category</th>
// // //                 <th className="px-4 py-2">Brand</th>
// // //                 <th className="px-4 py-2">RAM</th>
// // //                 <th className="px-4 py-2">Storage</th>
// // //                 <th className="px-4 py-2">Price</th>
// // //                 <th className="px-4 py-2">Warranty</th>
// // //                 <th className="px-4 py-2">Colors</th>
// // //                 <th className="px-4 py-2">Actions</th>
// // //               </tr>
// // //             </thead>
// // //             <tbody>
// // //               {products.map((product) => (
// // //                 <tr key={product._id}>
// // //                   <td className="border px-4 py-2">{product.productName}</td>
// // //                   <td className="border px-4 py-2">{product.category}</td>
// // //                   <td className="border px-4 py-2">{product.brand}</td>
// // //                   <td className="border px-4 py-2">{product.ram}</td>
// // //                   <td className="border px-4 py-2">{product.storage}</td>
// // //                   <td className="border px-4 py-2">${product.price}</td>
// // //                   <td className="border px-4 py-2">{product.warranty}</td>
// // //                   <td className="border px-4 py-2">
// // //                     <ul>
// // //                       {product.colors.map((color, idx) => (
// // //                         <li key={idx}>
// // //                           {color.name} - {color.quantity} units - ${color.price}
// // //                         </li>
// // //                       ))}
// // //                     </ul>
// // //                   </td>
// // //                   <td className="border px-4 py-2">
// // //                     <button
// // //                       onClick={() => handleRemoveProduct(product._id)}
// // //                       className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
// // //                     >
// // //                       Remove
// // //                     </button>
// // //                   </td>
// // //                 </tr>
// // //               ))}
// // //             </tbody>
// // //           </table>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default App;

// // import React, { useState, useEffect } from "react";
// // import axios from "axios";

// // const App = () => {
// //   const [products, setProducts] = useState([]);
// //   const [newProduct, setNewProduct] = useState({
// //     productName: "",
// //     category: "",
// //     brand: "",
// //     ram: "",
// //     storage: "",
// //     price: "",
// //     warranty: "",
// //     colors: [],
// //   });

// //   const [color, setColor] = useState({
// //     name: "",
// //     quantity: "",
// //     price: "",
// //   });

// //   useEffect(() => {
// //     fetchProducts();
// //   }, []);

// //   const fetchProducts = async () => {
// //     try {
// //       const response = await axios.get("http://localhost:5000/api/products");
// //       setProducts(response.data);
// //     } catch (error) {
// //       console.error("Error fetching products:", error);
// //     }
// //   };

// //   // Function to handle adding a color to the product
// //   const handleAddColor = () => {
// //     if (color.name && color.quantity && color.price) {
// //       setNewProduct((prev) => ({
// //         ...prev,
// //         colors: [...prev.colors, color], // Add color to the colors array
// //       }));
// //       setColor({ name: "", quantity: "", price: "" }); // Reset color input fields
// //     } else {
// //       alert("Please fill all color details before adding!");
// //     }
// //   };

// //   // Function to handle submitting the entire product
// //   const handleAddProduct = async () => {
// //     try {
// //       const response = await axios.post("http://localhost:5000/api/products", newProduct);
// //       setProducts([...products, response.data]);
// //       setNewProduct({
// //         productName: "",
// //         category: "",
// //         brand: "",
// //         ram: "",
// //         storage: "",
// //         price: "",
// //         warranty: "",
// //         colors: [],
// //       });
// //       alert("Product added successfully!");
// //     } catch (error) {
// //       console.error("Error adding product:", error);
// //       alert("Failed to add product");
// //     }
// //   };

// //   const handleRemoveProduct = async (id) => {
// //     try {
// //       await axios.delete(`http://localhost:5000/api/products/${id}`);
// //       setProducts(products.filter((product) => product._id !== id));
// //     } catch (error) {
// //       console.error("Error deleting product:", error);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-100 p-6">
// //       <div className="max-w-7xl mx-auto">
// //         <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">
// //           Mobile Shop Inventory
// //         </h1>

// //         {/* Add Product Form */}
// //         <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
// //           <h2 className="text-xl font-semibold mb-4">Add New Product</h2>

// //           {/* Product Details Form */}
// //           <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
// //             <input
// //               type="text"
// //               className="border p-2 rounded"
// //               placeholder="Product Name"
// //               value={newProduct.productName}
// //               onChange={(e) =>
// //                 setNewProduct({ ...newProduct, productName: e.target.value })
// //               }
// //             />
// //             <input
// //               type="text"
// //               className="border p-2 rounded"
// //               placeholder="Category"
// //               value={newProduct.category}
// //               onChange={(e) =>
// //                 setNewProduct({ ...newProduct, category: e.target.value })
// //               }
// //             />
// //             <input
// //               type="text"
// //               className="border p-2 rounded"
// //               placeholder="Brand"
// //               value={newProduct.brand}
// //               onChange={(e) =>
// //                 setNewProduct({ ...newProduct, brand: e.target.value })
// //               }
// //             />
// //             <input
// //               type="text"
// //               className="border p-2 rounded"
// //               placeholder="RAM"
// //               value={newProduct.ram}
// //               onChange={(e) =>
// //                 setNewProduct({ ...newProduct, ram: e.target.value })
// //               }
// //             />
// //             <input
// //               type="text"
// //               className="border p-2 rounded"
// //               placeholder="Storage"
// //               value={newProduct.storage}
// //               onChange={(e) =>
// //                 setNewProduct({ ...newProduct, storage: e.target.value })
// //               }
// //             />
// //             <input
// //               type="number"
// //               className="border p-2 rounded"
// //               placeholder="Price"
// //               value={newProduct.price}
// //               onChange={(e) =>
// //                 setNewProduct({ ...newProduct, price: e.target.value })
// //               }
// //             />
// //             <input
// //               type="text"
// //               className="border p-2 rounded"
// //               placeholder="Warranty"
// //               value={newProduct.warranty}
// //               onChange={(e) =>
// //                 setNewProduct({ ...newProduct, warranty: e.target.value })
// //               }
// //             />
// //           </div>

// //           {/* Add Color Form */}
// //           <div className="mt-4">
// //             <h3 className="text-lg font-semibold">Add Colors</h3>
// //             <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
// //               <input
// //                 type="text"
// //                 className="border p-2 rounded"
// //                 placeholder="Color Name"
// //                 value={color.name}
// //                 onChange={(e) => setColor({ ...color, name: e.target.value })}
// //               />
// //               <input
// //                 type="number"
// //                 className="border p-2 rounded"
// //                 placeholder="Color Quantity"
// //                 value={color.quantity}
// //                 onChange={(e) => setColor({ ...color, quantity: e.target.value })}
// //               />
// //               <input
// //                 type="number"
// //                 className="border p-2 rounded"
// //                 placeholder="Color Price"
// //                 value={color.price}
// //                 onChange={(e) => setColor({ ...color, price: e.target.value })}
// //               />
// //             </div>
// //             <button
// //               onClick={handleAddColor}
// //               className="mt-2 bg-green-500 text-white p-2 rounded hover:bg-green-600"
// //             >
// //               Add Color
// //             </button>
// //           </div>

// //           {/* Add Product Button */}
// //           <button
// //             onClick={handleAddProduct}
// //             className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
// //           >
// //             Add Product
// //           </button>
// //         </div>

// //         {/* Product Inventory Table */}
// //         <div className="overflow-x-auto bg-white p-6 rounded-lg shadow-lg">
// //           <h2 className="text-xl font-semibold mb-4">Inventory List</h2>
// //           <table className="min-w-full table-auto">
// //             <thead className="bg-blue-600 text-white">
// //               <tr>
// //                 <th className="px-4 py-2">Product Name</th>
// //                 <th className="px-4 py-2">Category</th>
// //                 <th className="px-4 py-2">Brand</th>
// //                 <th className="px-4 py-2">RAM</th>
// //                 <th className="px-4 py-2">Storage</th>
// //                 <th className="px-4 py-2">Price</th>
// //                 <th className="px-4 py-2">Warranty</th>
// //                 <th className="px-4 py-2">Colors</th>
// //                 <th className="px-4 py-2">Actions</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {products.map((product) => (
// //                 <tr key={product._id}>
// //                   <td className="border px-4 py-2">{product.productName}</td>
// //                   <td className="border px-4 py-2">{product.category}</td>
// //                   <td className="border px-4 py-2">{product.brand}</td>
// //                   <td className="border px-4 py-2">{product.ram}</td>
// //                   <td className="border px-4 py-2">{product.storage}</td>
// //                   <td className="border px-4 py-2">${product.price}</td>
// //                   <td className="border px-4 py-2">{product.warranty}</td>
// //                   <td className="border px-4 py-2">
// //                     <ul>
// //                       {product.colors.map((color, idx) => (
// //                         <li key={idx}>
// //                           {color.name} - {color.quantity} units - ${color.price}
// //                         </li>
// //                       ))}
// //                     </ul>
// //                   </td>
// //                   <td className="border px-4 py-2">
// //                     <button
// //                       onClick={() => handleRemoveProduct(product._id)}
// //                       className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
// //                     >
// //                       Remove
// //                     </button>
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default App;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// // Component for handling different categories
// const ProductCategory = ({ category }) => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetchProducts(category);
//   }, [category]);

//   const fetchProducts = async (category) => {
//     try {
//       const response = await axios.get(`http://localhost:5000/api/products?category=${category}`);
//       setProducts(response.data);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>{category} Inventory</h2>
//       <table className="min-w-full table-auto">
//         <thead className="bg-blue-600 text-white">
//           <tr>
//             <th className="px-4 py-2">Product Name</th>
//             <th className="px-4 py-2">Brand</th>
//             <th className="px-4 py-2">RAM</th>
//             <th className="px-4 py-2">Storage</th>
//             <th className="px-4 py-2">Price</th>
//             <th className="px-4 py-2">Warranty</th>
//             <th className="px-4 py-2">Colors</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product) => (
//             <tr key={product._id}>
//               <td className="border px-4 py-2">{product.productName}</td>
//               <td className="border px-4 py-2">{product.brand}</td>
//               <td className="border px-4 py-2">{product.ram}</td>
//               <td className="border px-4 py-2">{product.storage}</td>
//               <td className="border px-4 py-2">${product.price}</td>
//               <td className="border px-4 py-2">{product.warranty}</td>
//               <td className="border px-4 py-2">
//                 <ul>
//                   {product.colors.map((color, idx) => (
//                     <li key={idx}>
//                       {color.name} - {color.quantity} units - ${color.price}
//                     </li>
//                   ))}
//                 </ul>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// // The Add Product form component
// const AddProductForm = ({ category }) => {
//   const [newProduct, setNewProduct] = useState({
//     productName: '',
//     category,
//     brand: '',
//     ram: '',
//     storage: '',
//     price: '',
//     warranty: '',
//     colors: [],
//   });

//   const [color, setColor] = useState({ name: '', quantity: '', price: '' });

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

//   const handleAddProduct = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/products', newProduct);
//       alert('Product added successfully!');
//     } catch (error) {
//       alert('Failed to add product');
//     }
//   };

//   return (
//     <div>
//       <h2>Add New Product ({category})</h2>
//       <input
//         type="text"
//         value={newProduct.productName}
//         onChange={(e) => setNewProduct({ ...newProduct, productName: e.target.value })}
//         placeholder="Product Name"
//       />
//       <input
//         type="text"
//         value={newProduct.brand}
//         onChange={(e) => setNewProduct({ ...newProduct, brand: e.target.value })}
//         placeholder="Brand"
//       />
//       <input
//         type="text"
//         value={newProduct.ram}
//         onChange={(e) => setNewProduct({ ...newProduct, ram: e.target.value })}
//         placeholder="RAM"
//       />
//       <input
//         type="text"
//         value={newProduct.storage}
//         onChange={(e) => setNewProduct({ ...newProduct, storage: e.target.value })}
//         placeholder="Storage"
//       />
//       <input
//         type="number"
//         value={newProduct.price}
//         onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
//         placeholder="Price"
//       />
//       <input
//         type="text"
//         value={newProduct.warranty}
//         onChange={(e) => setNewProduct({ ...newProduct, warranty: e.target.value })}
//         placeholder="Warranty"
//       />
//       <div>
//         <h3>Add Color</h3>
//         <input
//           type="text"
//           value={color.name}
//           onChange={(e) => setColor({ ...color, name: e.target.value })}
//           placeholder="Color Name"
//         />
//         <input
//           type="number"
//           value={color.quantity}
//           onChange={(e) => setColor({ ...color, quantity: e.target.value })}
//           placeholder="Color Quantity"
//         />
//         <input
//           type="number"
//           value={color.price}
//           onChange={(e) => setColor({ ...color, price: e.target.value })}
//           placeholder="Color Price"
//         />
//         <button onClick={handleAddColor}>Add Color</button>
//       </div>
//       <button onClick={handleAddProduct}>Add Product</button>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <Router>
//       <div className="p-6">
//         <nav className="mb-4">
//           <Link to="/mobiles" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
//             Mobiles
//           </Link>
//           <Link to="/washing-machines" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 ml-4">
//             Washing Machines
//           </Link>
//           <Link to="/refrigerators" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 ml-4">
//             Refrigerators
//           </Link>
//         </nav>

//         <Routes>
//           {/* Route for Mobiles Category */}
//           <Route path="/mobiles" element={<><ProductCategory category="Mobile" /><AddProductForm category="Mobile" /></>} />

//           {/* Route for Washing Machines Category */}
//           <Route path="/washing-machines" element={<><ProductCategory category="Washing Machine" /><AddProductForm category="Washing Machine" /></>} />

//           {/* Route for Refrigerators Category */}
//           <Route path="/refrigerators" element={<><ProductCategory category="Refrigerator" /><AddProductForm category="Refrigerator" /></>} />

//           {/* Default Route */}
//           <Route path="/" element={<h2>Please select a category</h2>} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductCategory from "./components/ProductCategory";
import AddProductForm from "./components/AddProductForm";
import Mobile from "./components/Mobile";
import TV from "./Pages/Tv";
import AC from "./Pages/AC";
import Refrigerator from "./Pages/Refrigerator";
import WashingMachine from "./Pages/washingmachine";
import Accessories from "./Pages/Accessories";
import Coolers from "./Pages/Coolers";
import AuthPage from "./Pages/AuthPage";
import BillPage from "./Pages/BillPage";

const App = () => {
  return (
    <Router>
      <div className="p-6">
        <Navbar />

        <Routes>
          <Route path="/mobiles" element={<Mobile />} />
          <Route path="/tv" element={<TV />} />
          <Route path="/ac" element={<AC />} />
          <Route path="/washing-machines" element={<WashingMachine />} />
          <Route path="/refrigerators" element={<Refrigerator />} />
          <Route path="/accessories" element={<Accessories/>} />
          <Route path="/coolers" element={<Coolers/>} />
          <Route path="/auth" element={<AuthPage/>} />
          <Route path="/bill" element={<BillPage/>} />

          <Route path="/" element={<h2>Please select a category</h2>} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
