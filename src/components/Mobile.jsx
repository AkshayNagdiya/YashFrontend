// // // // import React, { useState, useEffect } from "react";
// // // // import axios from "axios";

// // // // const Mobile = () => {
// // // //   const [products, setProducts] = useState([]);
// // // //   const [newProduct, setNewProduct] = useState({
// // // //     productName: "",
// // // //     category: "",
// // // //     brand: "",
// // // //     ram: "",
// // // //     storage: "",
// // // //     price: "",
// // // //     warranty: "",
// // // //     colors: [],
// // // //   });

// // // //   const [color, setColor] = useState({
// // // //     name: "",
// // // //     quantity: "",
// // // //     price: "",
// // // //   });

// // // //   useEffect(() => {
// // // //     fetchProducts();
// // // //   }, []);

// // // //   const fetchProducts = async () => {
// // // //     try {
// // // //       const response = await axios.get("http://localhost:5000/api/products");
// // // //       setProducts(response.data);
// // // //     } catch (error) {
// // // //       console.error("Error fetching products:", error);
// // // //     }
// // // //   };

// // // //   // Function to handle adding a color to the product
// // // //   const handleAddColor = () => {
// // // //     if (color.name && color.quantity && color.price) {
// // // //       setNewProduct((prev) => ({
// // // //         ...prev,
// // // //         colors: [...prev.colors, color], // Add color to the colors array
// // // //       }));
// // // //       setColor({ name: "", quantity: "", price: "" }); // Reset color input fields
// // // //     } else {
// // // //       alert("Please fill all color details before adding!");
// // // //     }
// // // //   };

// // // //   // Function to handle submitting the entire product
// // // //   const handleAddProduct = async () => {
// // // //     try {
// // // //       const response = await axios.post("http://localhost:5000/api/products", newProduct);
// // // //       setProducts([...products, response.data]);
// // // //       setNewProduct({
// // // //         productName: "",
// // // //         category: "",
// // // //         brand: "",
// // // //         ram: "",
// // // //         storage: "",
// // // //         price: "",
// // // //         warranty: "",
// // // //         colors: [],
// // // //       });
// // // //       alert("Product added successfully!");
// // // //     } catch (error) {
// // // //       console.error("Error adding product:", error);
// // // //       alert("Failed to add product");
// // // //     }
// // // //   };

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
// // // //           Mobile Shop Inventory
// // // //         </h1>

// // // //         {/* Add Product Form */}
// // // //         <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
// // // //           <h2 className="text-xl font-semibold mb-4">Add New Product</h2>

// // // //           {/* Product Details Form */}
// // // //           <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
// // // //             <input
// // // //               type="text"
// // // //               className="border p-2 rounded"
// // // //               placeholder="Product Name"
// // // //               value={newProduct.productName}
// // // //               onChange={(e) =>
// // // //                 setNewProduct({ ...newProduct, productName: e.target.value })
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
// // // //             <input
// // // //               type="text"
// // // //               className="border p-2 rounded"
// // // //               placeholder="RAM"
// // // //               value={newProduct.ram}
// // // //               onChange={(e) =>
// // // //                 setNewProduct({ ...newProduct, ram: e.target.value })
// // // //               }
// // // //             />
// // // //             <input
// // // //               type="text"
// // // //               className="border p-2 rounded"
// // // //               placeholder="Storage"
// // // //               value={newProduct.storage}
// // // //               onChange={(e) =>
// // // //                 setNewProduct({ ...newProduct, storage: e.target.value })
// // // //               }
// // // //             />
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
// // // //               type="text"
// // // //               className="border p-2 rounded"
// // // //               placeholder="Warranty"
// // // //               value={newProduct.warranty}
// // // //               onChange={(e) =>
// // // //                 setNewProduct({ ...newProduct, warranty: e.target.value })
// // // //               }
// // // //             />
// // // //           </div>

// // // //           {/* Add Color Form */}
// // // //           <div className="mt-4">
// // // //             <h3 className="text-lg font-semibold">Add Colors</h3>
// // // //             <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
// // // //               <input
// // // //                 type="text"
// // // //                 className="border p-2 rounded"
// // // //                 placeholder="Color Name"
// // // //                 value={color.name}
// // // //                 onChange={(e) => setColor({ ...color, name: e.target.value })}
// // // //               />
// // // //               <input
// // // //                 type="number"
// // // //                 className="border p-2 rounded"
// // // //                 placeholder="Color Quantity"
// // // //                 value={color.quantity}
// // // //                 onChange={(e) => setColor({ ...color, quantity: e.target.value })}
// // // //               />
// // // //               <input
// // // //                 type="number"
// // // //                 className="border p-2 rounded"
// // // //                 placeholder="Color Price"
// // // //                 value={color.price}
// // // //                 onChange={(e) => setColor({ ...color, price: e.target.value })}
// // // //               />
// // // //             </div>
// // // //             <button
// // // //               onClick={handleAddColor}
// // // //               className="mt-2 bg-green-500 text-white p-2 rounded hover:bg-green-600"
// // // //             >
// // // //               Add Color
// // // //             </button>
// // // //           </div>

// // // //           {/* Add Product Button */}
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
// // // //                 <th className="px-4 py-2">Product Name</th>
// // // //                 <th className="px-4 py-2">Category</th>
// // // //                 <th className="px-4 py-2">Brand</th>
// // // //                 <th className="px-4 py-2">RAM</th>
// // // //                 <th className="px-4 py-2">Storage</th>
// // // //                 <th className="px-4 py-2">Price</th>
// // // //                 <th className="px-4 py-2">Warranty</th>
// // // //                 <th className="px-4 py-2">Colors</th>
// // // //                 <th className="px-4 py-2">Actions</th>
// // // //               </tr>
// // // //             </thead>
// // // //             <tbody>
// // // //               {products.map((product) => (
// // // //                 <tr key={product._id}>
// // // //                   <td className="border px-4 py-2">{product.productName}</td>
// // // //                   <td className="border px-4 py-2">{product.category}</td>
// // // //                   <td className="border px-4 py-2">{product.brand}</td>
// // // //                   <td className="border px-4 py-2">{product.ram}</td>
// // // //                   <td className="border px-4 py-2">{product.storage}</td>
// // // //                   <td className="border px-4 py-2">${product.price}</td>
// // // //                   <td className="border px-4 py-2">{product.warranty}</td>
// // // //                   <td className="border px-4 py-2">
// // // //                     <ul>
// // // //                       {product.colors.map((color, idx) => (
// // // //                         <li key={idx}>
// // // //                           {color.name} - {color.quantity} units - ${color.price}
// // // //                         </li>
// // // //                       ))}
// // // //                     </ul>
// // // //                   </td>
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
// // // // };

// // // // export default Mobile;

// // // import React, { useState, useEffect } from "react";
// // // import axios from "axios";

// // // const Mobile = () => {
// // //   const [products, setProducts] = useState([]);
// // //   const [newProduct, setNewProduct] = useState({
// // //     productName: "",
// // //     category: "Mobile",
// // //     brand: "",
// // //     ram: "",
// // //     storage: "",
// // //     price: "",
// // //     warranty: "",
// // //     colors: [],
// // //   });
// // //   const [color, setColor] = useState({
// // //     name: "",
// // //     quantity: "",
// // //     price: "",
// // //   });

// // //   const [showAddProductModal, setShowAddProductModal] = useState(false);
// // //   const [showDeleteConfirmationModal, setShowDeleteConfirmationModal] = useState(false);
// // //   const [productToDelete, setProductToDelete] = useState(null);

// // //   useEffect(() => {
// // //     fetchProducts();
// // //   }, []);

// // //   const fetchProducts = async () => {
// // //     try {
// // //       const response = await axios.get("http://localhost:5000/api/products?category=Mobile");
// // //       setProducts(response.data);
// // //     } catch (error) {
// // //       console.error("Error fetching products:", error);
// // //     }
// // //   };

// // //   const handleAddColor = () => {
// // //     if (color.name && color.quantity && color.price) {
// // //       setNewProduct((prev) => ({
// // //         ...prev,
// // //         colors: [...prev.colors, color], // Add color to the colors array
// // //       }));
// // //       setColor({ name: "", quantity: "", price: "" }); // Reset color input fields
// // //     } else {
// // //       alert("Please fill all color details before adding!");
// // //     }
// // //   };

// // //   const handleAddProduct = async () => {
// // //     try {
// // //       const response = await axios.post("http://localhost:5000/api/products", newProduct);
// // //       setProducts([...products, response.data]);
// // //       setNewProduct({
// // //         productName: "",
// // //         category: "Mobile",
// // //         brand: "",
// // //         ram: "",
// // //         storage: "",
// // //         price: "",
// // //         warranty: "",
// // //         colors: [],
// // //       });
// // //       setShowAddProductModal(false); // Close the modal after submission
// // //       alert("Product added successfully!");
// // //     } catch (error) {
// // //       console.error("Error adding product:", error);
// // //       alert("Failed to add product");
// // //     }
// // //   };

// // //   const handleRemoveProduct = async () => {
// // //     if (productToDelete) {
// // //       try {
// // //         await axios.delete(`http://localhost:5000/api/products/${productToDelete._id}`);
// // //         setProducts(products.filter((product) => product._id !== productToDelete._id));
// // //         setShowDeleteConfirmationModal(false);
// // //         alert("Product removed successfully!");
// // //       } catch (error) {
// // //         console.error("Error deleting product:", error);
// // //         alert("Failed to delete product");
// // //       }
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gray-100 p-6">
// // //       <div className="max-w-7xl mx-auto">
// // //         <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">
// // //           Mobile Shop Inventory
// // //         </h1>

// // //         {/* Add Product Button */}
// // //         <button
// // //           onClick={() => setShowAddProductModal(true)}
// // //           className="mb-4 bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600"
// // //         >
// // //           Add New Product
// // //         </button>

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
// // //                       onClick={() => {
// // //                         setProductToDelete(product);
// // //                         setShowDeleteConfirmationModal(true);
// // //                       }}
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

// // //       {/* Add Product Modal */}
// // //       {showAddProductModal && (
// // //         <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
// // //           <div className="bg-white p-6 rounded-md w-1/3">
// // //             <h2 className="text-xl font-semibold mb-4">Add New Mobile</h2>

// // //             {/* Product Details Form */}
// // //             <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
// // //               <input
// // //                 type="text"
// // //                 className="border p-2 rounded"
// // //                 placeholder="Product Name"
// // //                 value={newProduct.productName}
// // //                 onChange={(e) =>
// // //                   setNewProduct({ ...newProduct, productName: e.target.value })
// // //                 }
// // //               />
// // //               <input
// // //                 type="text"
// // //                 className="border p-2 rounded"
// // //                 placeholder="Brand"
// // //                 value={newProduct.brand}
// // //                 onChange={(e) =>
// // //                   setNewProduct({ ...newProduct, brand: e.target.value })
// // //                 }
// // //               />
// // //               <input
// // //                 type="text"
// // //                 className="border p-2 rounded"
// // //                 placeholder="RAM"
// // //                 value={newProduct.ram}
// // //                 onChange={(e) =>
// // //                   setNewProduct({ ...newProduct, ram: e.target.value })
// // //                 }
// // //               />
// // //               <input
// // //                 type="text"
// // //                 className="border p-2 rounded"
// // //                 placeholder="Storage"
// // //                 value={newProduct.storage}
// // //                 onChange={(e) =>
// // //                   setNewProduct({ ...newProduct, storage: e.target.value })
// // //                 }
// // //               />
// // //               <input
// // //                 type="number"
// // //                 className="border p-2 rounded"
// // //                 placeholder="Price"
// // //                 value={newProduct.price}
// // //                 onChange={(e) =>
// // //                   setNewProduct({ ...newProduct, price: e.target.value })
// // //                 }
// // //               />
// // //               <input
// // //                 type="text"
// // //                 className="border p-2 rounded"
// // //                 placeholder="Warranty"
// // //                 value={newProduct.warranty}
// // //                 onChange={(e) =>
// // //                   setNewProduct({ ...newProduct, warranty: e.target.value })
// // //                 }
// // //               />
// // //             </div>

// // //             {/* Add Color Form */}
// // //             <div className="mt-4">
// // //               <h3 className="text-lg font-semibold">Add Colors</h3>
// // //               <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
// // //                 <input
// // //                   type="text"
// // //                   className="border p-2 rounded"
// // //                   placeholder="Color Name"
// // //                   value={color.name}
// // //                   onChange={(e) => setColor({ ...color, name: e.target.value })}
// // //                 />
// // //                 <input
// // //                   type="number"
// // //                   className="border p-2 rounded"
// // //                   placeholder="Color Quantity"
// // //                   value={color.quantity}
// // //                   onChange={(e) => setColor({ ...color, quantity: e.target.value })}
// // //                 />
// // //                 <input
// // //                   type="number"
// // //                   className="border p-2 rounded"
// // //                   placeholder="Color Price"
// // //                   value={color.price}
// // //                   onChange={(e) => setColor({ ...color, price: e.target.value })}
// // //                 />
// // //               </div>
// // //               <button
// // //                 onClick={handleAddColor}
// // //                 className="mt-2 bg-green-500 text-white p-2 rounded hover:bg-green-600"
// // //               >
// // //                 Add Color
// // //               </button>
// // //             </div>

// // //             {/* Add Product Button */}
// // //             <div className="mt-4 flex justify-between">
// // //               <button
// // //                 onClick={() => setShowAddProductModal(false)}
// // //                 className="bg-gray-500 text-white p-2 rounded hover:bg-gray-600"
// // //               >
// // //                 Cancel
// // //               </button>
// // //               <button
// // //                 onClick={handleAddProduct}
// // //                 className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
// // //               >
// // //                 Add Product
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}

// // //       {/* Delete Confirmation Modal */}
// // //       {showDeleteConfirmationModal && (
// // //         <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
// // //           <div className="bg-white p-6 rounded-md w-1/3">
// // //             <h2 className="text-xl font-semibold mb-4">Confirm Deletion</h2>
// // //             <p>Are you sure you want to remove this product?</p>
// // //             <div className="mt-4 flex justify-between">
// // //               <button
// // //                 onClick={() => setShowDeleteConfirmationModal(false)}
// // //                 className="bg-gray-500 text-white p-2 rounded hover:bg-gray-600"
// // //               >
// // //                 Cancel
// // //               </button>
// // //               <button
// // //                 onClick={handleRemoveProduct}
// // //                 className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
// // //               >
// // //                 Confirm
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default Mobile;

// // import React, { useState, useEffect } from "react";
// // import axios from "axios";

// // const Mobile = () => {
// //   const [products, setProducts] = useState([]);
// //   const [newProduct, setNewProduct] = useState({
// //     productName: "",
// //     category: "Mobile",
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

// //   const [showAddProductModal, setShowAddProductModal] = useState(false);
// //   const [showEditProductModal, setShowEditProductModal] = useState(false);
// //   const [showDeleteConfirmationModal, setShowDeleteConfirmationModal] = useState(false);
// //   const [productToDelete, setProductToDelete] = useState(null);
// //   const [productToEdit, setProductToEdit] = useState(null);

// //   useEffect(() => {
// //     fetchProducts();
// //   }, []);

// //   const fetchProducts = async () => {
// //     try {
// //       const response = await axios.get("http://localhost:5000/api/products?category=Mobile");
// //       setProducts(response.data);
// //     } catch (error) {
// //       console.error("Error fetching products:", error);
// //     }
// //   };

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

// //   const handleAddProduct = async () => {
// //     try {
// //       const response = await axios.post("http://localhost:5000/api/products", newProduct);
// //       setProducts([...products, response.data]);
// //       setNewProduct({
// //         productName: "",
// //         category: "Mobile",
// //         brand: "",
// //         ram: "",
// //         storage: "",
// //         price: "",
// //         warranty: "",
// //         colors: [],
// //       });
// //       setShowAddProductModal(false); // Close the modal after submission
// //       alert("Product added successfully!");
// //     } catch (error) {
// //       console.error("Error adding product:", error);
// //       alert("Failed to add product");
// //     }
// //   };

// //   const handleEditProduct = async () => {
// //     try {
// //       const response = await axios.put(
// //         `http://localhost:5000/api/products/${productToEdit._id}`,
// //         productToEdit
// //       );
// //       const updatedProducts = products.map((product) =>
// //         product._id === response.data._id ? response.data : product
// //       );
// //       setProducts(updatedProducts);
// //       setShowEditProductModal(false);
// //       alert("Product updated successfully!");
// //     } catch (error) {
// //       console.error("Error updating product:", error);
// //       alert("Failed to update product");
// //     }
// //   };

// //   const handleRemoveProduct = async () => {
// //     if (productToDelete) {
// //       try {
// //         await axios.delete(`http://localhost:5000/api/products/${productToDelete._id}`);
// //         setProducts(products.filter((product) => product._id !== productToDelete._id));
// //         setShowDeleteConfirmationModal(false);
// //         alert("Product removed successfully!");
// //       } catch (error) {
// //         console.error("Error deleting product:", error);
// //         alert("Failed to delete product");
// //       }
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-100 p-6">
// //       <div className="max-w-7xl mx-auto">
// //         <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">
// //           Mobile Shop Inventory
// //         </h1>

// //         {/* Add Product Button */}
// //         <button
// //           onClick={() => setShowAddProductModal(true)}
// //           className="mb-4 bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600"
// //         >
// //           Add New Product
// //         </button>

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
// //                   <td className="border px-4 py-2 flex justify-between">
// //                     {/* Edit Button */}
// //                     <button
// //                       onClick={() => {
// //                         setProductToEdit(product);
// //                         setShowEditProductModal(true);
// //                       }}
// //                       className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
// //                     >
// //                       Edit
// //                     </button>

// //                     {/* Remove Button */}
// //                     <button
// //                       onClick={() => {
// //                         setProductToDelete(product);
// //                         setShowDeleteConfirmationModal(true);
// //                       }}
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

// //       {/* Add Product Modal */}
// //       {showAddProductModal && (
// //         <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
// //           <div className="bg-white p-6 rounded-md w-1/3">
// //             <h2 className="text-xl font-semibold mb-4">Add New Mobile</h2>

// //             {/* Product Details Form */}
// //             <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
// //               <input
// //                 type="text"
// //                 className="border p-2 rounded"
// //                 placeholder="Product Name"
// //                 value={newProduct.productName}
// //                 onChange={(e) =>
// //                   setNewProduct({ ...newProduct, productName: e.target.value })
// //                 }
// //               />
// //               <input
// //                 type="text"
// //                 className="border p-2 rounded"
// //                 placeholder="Brand"
// //                 value={newProduct.brand}
// //                 onChange={(e) =>
// //                   setNewProduct({ ...newProduct, brand: e.target.value })
// //                 }
// //               />
// //               <input
// //                 type="text"
// //                 className="border p-2 rounded"
// //                 placeholder="RAM"
// //                 value={newProduct.ram}
// //                 onChange={(e) =>
// //                   setNewProduct({ ...newProduct, ram: e.target.value })
// //                 }
// //               />
// //               <input
// //                 type="text"
// //                 className="border p-2 rounded"
// //                 placeholder="Storage"
// //                 value={newProduct.storage}
// //                 onChange={(e) =>
// //                   setNewProduct({ ...newProduct, storage: e.target.value })
// //                 }
// //               />
// //               <input
// //                 type="number"
// //                 className="border p-2 rounded"
// //                 placeholder="Price"
// //                 value={newProduct.price}
// //                 onChange={(e) =>
// //                   setNewProduct({ ...newProduct, price: e.target.value })
// //                 }
// //               />
// //               <input
// //                 type="text"
// //                 className="border p-2 rounded"
// //                 placeholder="Warranty"
// //                 value={newProduct.warranty}
// //                 onChange={(e) =>
// //                   setNewProduct({ ...newProduct, warranty: e.target.value })
// //                 }
// //               />
// //             </div>

// //             {/* Add Color Form */}
// //             <div className="mt-4">
// //               <h3 className="text-lg font-semibold">Add Colors</h3>
// //               <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
// //                 <input
// //                   type="text"
// //                   className="border p-2 rounded"
// //                   placeholder="Color Name"
// //                   value={color.name}
// //                   onChange={(e) => setColor({ ...color, name: e.target.value })}
// //                 />
// //                 <input
// //                   type="number"
// //                   className="border p-2 rounded"
// //                   placeholder="Color Quantity"
// //                   value={color.quantity}
// //                   onChange={(e) => setColor({ ...color, quantity: e.target.value })}
// //                 />
// //                 <input
// //                   type="number"
// //                   className="border p-2 rounded"
// //                   placeholder="Color Price"
// //                   value={color.price}
// //                   onChange={(e) => setColor({ ...color, price: e.target.value })}
// //                 />
// //               </div>
// //               <button
// //                 onClick={handleAddColor}
// //                 className="mt-2 bg-green-500 text-white p-2 rounded hover:bg-green-600"
// //               >
// //                 Add Color
// //               </button>
// //             </div>

// //             {/* Add Product Button */}
// //             <div className="mt-4 flex justify-between">
// //               <button
// //                 onClick={() => setShowAddProductModal(false)}
// //                 className="bg-gray-500 text-white p-2 rounded hover:bg-gray-600"
// //               >
// //                 Cancel
// //               </button>
// //               <button
// //                 onClick={handleAddProduct}
// //                 className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
// //               >
// //                 Add Product
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       {/* Edit Product Modal */}
// //       {showEditProductModal && productToEdit && (
// //         <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
// //           <div className="bg-white p-6 rounded-md w-1/3">
// //             <h2 className="text-xl font-semibold mb-4">Edit Mobile</h2>

// //             {/* Product Details Form */}
// //             <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
// //               <input
// //                 type="text"
// //                 className="border p-2 rounded"
// //                 placeholder="Product Name"
// //                 value={productToEdit.productName}
// //                 onChange={(e) =>
// //                   setProductToEdit({ ...productToEdit, productName: e.target.value })
// //                 }
// //               />
// //               <input
// //                 type="text"
// //                 className="border p-2 rounded"
// //                 placeholder="Brand"
// //                 value={productToEdit.brand}
// //                 onChange={(e) =>
// //                   setProductToEdit({ ...productToEdit, brand: e.target.value })
// //                 }
// //               />
// //               <input
// //                 type="text"
// //                 className="border p-2 rounded"
// //                 placeholder="RAM"
// //                 value={productToEdit.ram}
// //                 onChange={(e) =>
// //                   setProductToEdit({ ...productToEdit, ram: e.target.value })
// //                 }
// //               />
// //               <input
// //                 type="text"
// //                 className="border p-2 rounded"
// //                 placeholder="Storage"
// //                 value={productToEdit.storage}
// //                 onChange={(e) =>
// //                   setProductToEdit({ ...productToEdit, storage: e.target.value })
// //                 }
// //               />
// //               <input
// //                 type="number"
// //                 className="border p-2 rounded"
// //                 placeholder="Price"
// //                 value={productToEdit.price}
// //                 onChange={(e) =>
// //                   setProductToEdit({ ...productToEdit, price: e.target.value })
// //                 }
// //               />
// //               <input
// //                 type="text"
// //                 className="border p-2 rounded"
// //                 placeholder="Warranty"
// //                 value={productToEdit.warranty}
// //                 onChange={(e) =>
// //                   setProductToEdit({ ...productToEdit, warranty: e.target.value })
// //                 }
// //               />
// //             </div>

// //             <div className="mt-4 flex justify-between">
// //               <button
// //                 onClick={() => setShowEditProductModal(false)}
// //                 className="bg-gray-500 text-white p-2 rounded hover:bg-gray-600"
// //               >
// //                 Cancel
// //               </button>
// //               <button
// //                 onClick={handleEditProduct}
// //                 className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600"
// //               >
// //                 Update Product
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       {/* Delete Confirmation Modal */}
// //       {showDeleteConfirmationModal && (
// //         <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
// //           <div className="bg-white p-6 rounded-md w-1/3">
// //             <h2 className="text-xl font-semibold mb-4">Confirm Deletion</h2>
// //             <p>Are you sure you want to remove this product?</p>
// //             <div className="mt-4 flex justify-between">
// //               <button
// //                 onClick={() => setShowDeleteConfirmationModal(false)}
// //                 className="bg-gray-500 text-white p-2 rounded hover:bg-gray-600"
// //               >
// //                 Cancel
// //               </button>
// //               <button
// //                 onClick={handleRemoveProduct}
// //                 className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
// //               >
// //                 Confirm
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Mobile;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Mobile = () => {
//   const [products, setProducts] = useState([]);
//   const [newProduct, setNewProduct] = useState({
//     productName: "",
//     category: "Mobile",
//     brand: "",
//     ram: "",
//     storage: "",
//     price: "",
//     warranty: "",
//     colors: [],
//   });
//   const [color, setColor] = useState({
//     name: "",
//     quantity: "",
//     price: "",
//   });

//   const [showAddProductModal, setShowAddProductModal] = useState(false);
//   const [showEditProductModal, setShowEditProductModal] = useState(false);
//   const [showDeleteConfirmationModal, setShowDeleteConfirmationModal] = useState(false);
//   const [productToDelete, setProductToDelete] = useState(null);
//   const [productToEdit, setProductToEdit] = useState(null);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/api/products?category=Mobile");
//       setProducts(response.data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   const handleAddColor = () => {
//     if (color.name && color.quantity && color.price) {
//       setNewProduct((prev) => ({
//         ...prev,
//         colors: [...prev.colors, color], // Add color to the colors array
//       }));
//       setColor({ name: "", quantity: "", price: "" }); // Reset color input fields
//     } else {
//       alert("Please fill all color details before adding!");
//     }
//   };

//   const handleAddProduct = async () => {
//     try {
//       const response = await axios.post("http://localhost:5000/api/products", newProduct);
//       setProducts([...products, response.data]);
//       setNewProduct({
//         productName: "",
//         category: "Mobile",
//         brand: "",
//         ram: "",
//         storage: "",
//         price: "",
//         warranty: "",
//         colors: [],
//       });
//       setShowAddProductModal(false); // Close the modal after submission
//       alert("Product added successfully!");
//     } catch (error) {
//       console.error("Error adding product:", error);
//       alert("Failed to add product");
//     }
//   };

//   const handleEditProduct = async () => {
//     try {
//       const response = await axios.put(
//         `http://localhost:5000/api/products/${productToEdit._id}`,
//         productToEdit
//       );
//       const updatedProducts = products.map((product) =>
//         product._id === response.data._id ? response.data : product
//       );
//       setProducts(updatedProducts);
//       setShowEditProductModal(false);
//       alert("Product updated successfully!");
//     } catch (error) {
//       console.error("Error updating product:", error);
//       alert("Failed to update product");
//     }
//   };

//   const handleRemoveProduct = async () => {
//     if (productToDelete) {
//       try {
//         await axios.delete(`http://localhost:5000/api/products/${productToDelete._id}`);
//         setProducts(products.filter((product) => product._id !== productToDelete._id));
//         setShowDeleteConfirmationModal(false);
//         alert("Product removed successfully!");
//       } catch (error) {
//         console.error("Error deleting product:", error);
//         alert("Failed to delete product");
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">
//           Mobile Shop Inventory
//         </h1>

//         {/* Add Product Button with Icon */}
//         <button
//           onClick={() => setShowAddProductModal(true)}
//           className="mb-4 bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 flex items-center justify-center"
//         >
//           <i className="fas fa-plus-circle mr-2"></i> Add New Product
//         </button>

//         {/* Product Inventory Table */}
//         <div className="overflow-x-auto bg-white p-6 rounded-lg shadow-lg">
//           <h2 className="text-xl font-semibold mb-4">Inventory List</h2>
//           <table className="min-w-full table-auto">
//             <thead className="bg-blue-600 text-white">
//               <tr>
//                 <th className="px-4 py-2">Product Name</th>
//                 <th className="px-4 py-2">Category</th>
//                 <th className="px-4 py-2">Brand</th>
//                 <th className="px-4 py-2">RAM</th>
//                 <th className="px-4 py-2">Storage</th>
//                 <th className="px-4 py-2">Price</th>
//                 <th className="px-4 py-2">Warranty</th>
//                 <th className="px-4 py-2">Colors</th>
//                 <th className="px-4 py-2">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {products.map((product) => (
//                 <tr key={product._id}>
//                   <td className="border px-4 py-2">{product.productName}</td>
//                   <td className="border px-4 py-2">{product.category}</td>
//                   <td className="border px-4 py-2">{product.brand}</td>
//                   <td className="border px-4 py-2">{product.ram}</td>
//                   <td className="border px-4 py-2">{product.storage}</td>
//                   <td className="border px-4 py-2">${product.price}</td>
//                   <td className="border px-4 py-2">{product.warranty}</td>
//                   <td className="border px-4 py-2">
//                     <ul>
//                       {product.colors.map((color, idx) => (
//                         <li key={idx}>
//                           {color.name} - {color.quantity} units - ${color.price}
//                         </li>
//                       ))}
//                     </ul>
//                   </td>
//                   <td className="border px-4 py-2 flex justify-between">
//                     {/* Edit Button with Icon */}
//                     <button
//                       onClick={() => {
//                         setProductToEdit(product);
//                         setShowEditProductModal(true);
//                       }}
//                       className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 flex items-center justify-center"
//                     >
//                       <i className="fas fa-edit mr-2"></i> Edit
//                     </button>

//                     {/* Remove Button with Icon */}
//                     <button
//                       onClick={() => {
//                         setProductToDelete(product);
//                         setShowDeleteConfirmationModal(true);
//                       }}
//                       className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 flex items-center justify-center"
//                     >
//                       <i className="fas fa-trash-alt mr-2"></i> Remove
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Add Product Modal */}
//       {showAddProductModal && (
//         <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white p-6 rounded-md w-1/3">
//             <h2 className="text-xl font-semibold mb-4">Add New Mobile</h2>

//             {/* Product Details Form */}
//             <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//               <input
//                 type="text"
//                 className="border p-2 rounded"
//                 placeholder="Product Name"
//                 value={newProduct.productName}
//                 onChange={(e) =>
//                   setNewProduct({ ...newProduct, productName: e.target.value })
//                 }
//               />
//               <input
//                 type="text"
//                 className="border p-2 rounded"
//                 placeholder="Brand"
//                 value={newProduct.brand}
//                 onChange={(e) =>
//                   setNewProduct({ ...newProduct, brand: e.target.value })
//                 }
//               />
//               <input
//                 type="text"
//                 className="border p-2 rounded"
//                 placeholder="RAM"
//                 value={newProduct.ram}
//                 onChange={(e) =>
//                   setNewProduct({ ...newProduct, ram: e.target.value })
//                 }
//               />
//               <input
//                 type="text"
//                 className="border p-2 rounded"
//                 placeholder="Storage"
//                 value={newProduct.storage}
//                 onChange={(e) =>
//                   setNewProduct({ ...newProduct, storage: e.target.value })
//                 }
//               />
//               <input
//                 type="number"
//                 className="border p-2 rounded"
//                 placeholder="Price"
//                 value={newProduct.price}
//                 onChange={(e) =>
//                   setNewProduct({ ...newProduct, price: e.target.value })
//                 }
//               />
//               <input
//                 type="text"
//                 className="border p-2 rounded"
//                 placeholder="Warranty"
//                 value={newProduct.warranty}
//                 onChange={(e) =>
//                   setNewProduct({ ...newProduct, warranty: e.target.value })
//                 }
//               />
//             </div>

//             {/* Add Color Form */}
//             <div className="mt-4">
//               <h3 className="text-lg font-semibold">Add Colors</h3>
//               <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
//                 <input
//                   type="text"
//                   className="border p-2 rounded"
//                   placeholder="Color Name"
//                   value={color.name}
//                   onChange={(e) => setColor({ ...color, name: e.target.value })}
//                 />
//                 <input
//                   type="number"
//                   className="border p-2 rounded"
//                   placeholder="Color Quantity"
//                   value={color.quantity}
//                   onChange={(e) => setColor({ ...color, quantity: e.target.value })}
//                 />
//                 <input
//                   type="number"
//                   className="border p-2 rounded"
//                   placeholder="Color Price"
//                   value={color.price}
//                   onChange={(e) => setColor({ ...color, price: e.target.value })}
//                 />
//               </div>
//               <button
//                 onClick={handleAddColor}
//                 className="mt-2 bg-green-500 text-white p-2 rounded hover:bg-green-600 flex items-center justify-center"
//               >
//                 <i className="fas fa-plus-circle mr-2"></i> Add Color
//               </button>
//             </div>

//             {/* Add Product Button */}
//             <div className="mt-4 flex justify-between">
//               <button
//                 onClick={() => setShowAddProductModal(false)}
//                 className="bg-gray-500 text-white p-2 rounded hover:bg-gray-600 flex items-center justify-center"
//               >
//                 <i className="fas fa-times mr-2"></i> Cancel
//               </button>
//               <button
//                 onClick={handleAddProduct}
//                 className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 flex items-center justify-center"
//               >
//                 <i className="fas fa-check mr-2"></i> Add Product
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Edit Product Modal */}
//       {showEditProductModal && productToEdit && (
//         <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white p-6 rounded-md w-1/3">
//             <h2 className="text-xl font-semibold mb-4">Edit Mobile</h2>

//             {/* Product Details Form */}
//             <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//               <input
//                 type="text"
//                 className="border p-2 rounded"
//                 placeholder="Product Name"
//                 value={productToEdit.productName}
//                 onChange={(e) =>
//                   setProductToEdit({ ...productToEdit, productName: e.target.value })
//                 }
//               />
//               <input
//                 type="text"
//                 className="border p-2 rounded"
//                 placeholder="Brand"
//                 value={productToEdit.brand}
//                 onChange={(e) =>
//                   setProductToEdit({ ...productToEdit, brand: e.target.value })
//                 }
//               />
//               <input
//                 type="text"
//                 className="border p-2 rounded"
//                 placeholder="RAM"
//                 value={productToEdit.ram}
//                 onChange={(e) =>
//                   setProductToEdit({ ...productToEdit, ram: e.target.value })
//                 }
//               />
//               <input
//                 type="text"
//                 className="border p-2 rounded"
//                 placeholder="Storage"
//                 value={productToEdit.storage}
//                 onChange={(e) =>
//                   setProductToEdit({ ...productToEdit, storage: e.target.value })
//                 }
//               />
//               <input
//                 type="number"
//                 className="border p-2 rounded"
//                 placeholder="Price"
//                 value={productToEdit.price}
//                 onChange={(e) =>
//                   setProductToEdit({ ...productToEdit, price: e.target.value })
//                 }
//               />
//               <input
//                 type="text"
//                 className="border p-2 rounded"
//                 placeholder="Warranty"
//                 value={productToEdit.warranty}
//                 onChange={(e) =>
//                   setProductToEdit({ ...productToEdit, warranty: e.target.value })
//                 }
//               />
//             </div>

//             <div className="mt-4 flex justify-between">
//               <button
//                 onClick={() => setShowEditProductModal(false)}
//                 className="bg-gray-500 text-white p-2 rounded hover:bg-gray-600 flex items-center justify-center"
//               >
//                 <i className="fas fa-times mr-2"></i> Cancel
//               </button>
//               <button
//                 onClick={handleEditProduct}
//                 className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 flex items-center justify-center"
//               >
//                 <i className="fas fa-check mr-2"></i> Update Product
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Delete Confirmation Modal */}
//       {showDeleteConfirmationModal && (
//         <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white p-6 rounded-md w-1/3">
//             <h2 className="text-xl font-semibold mb-4">Confirm Deletion</h2>
//             <p>Are you sure you want to remove this product?</p>
//             <div className="mt-4 flex justify-between">
//               <button
//                 onClick={() => setShowDeleteConfirmationModal(false)}
//                 className="bg-gray-500 text-white p-2 rounded hover:bg-gray-600 flex items-center justify-center"
//               >
//                 <i className="fas fa-times mr-2"></i> Cancel
//               </button>
//               <button
//                 onClick={handleRemoveProduct}
//                 className="bg-red-500 text-white p-2 rounded hover:bg-red-600 flex items-center justify-center"
//               >
//                 <i className="fas fa-check mr-2"></i> Confirm
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Mobile;

import React, { useState, useEffect } from "react";
import axios from "axios";

const Mobile = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    productName: "",
    category: "Mobile",
    brand: "",
    warranty: "",
    variants: [], // variants array to hold different color, ram, storage combinations
  });
  const [variant, setVariant] = useState({
    color: "",
    ram: "",
    storage: "",
    quantity: "",
    price: "",
  });

  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [showEditProductModal, setShowEditProductModal] = useState(false);
  const [showDeleteConfirmationModal, setShowDeleteConfirmationModal] =
    useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const [productToEdit, setProductToEdit] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/products"
      );
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleAddVariant = () => {
    if (
      variant.color &&
      variant.ram &&
      variant.storage &&
      variant.quantity &&
      variant.price
    ) {
      setNewProduct((prev) => ({
        ...prev,
        variants: [...prev.variants, variant], // Add variant to the variants array
      }));
      setVariant({ color: "", ram: "", storage: "", quantity: "", price: "" }); // Reset variant input fields
    } else {
      alert("Please fill all variant details before adding!");
    }
  };

  const handleAddProduct = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/products",
        newProduct
      );
      setProducts([...products, response.data]);
      setNewProduct({
        productName: "",
        category: "Mobile",
        brand: "",
        warranty: "",
        variants: [],
      });
      setShowAddProductModal(false); // Close the modal after submission
      alert("Product added successfully!");
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product");
    }
  };

  const handleEditProduct = async () => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/products/${productToEdit._id}`,
        productToEdit
      );
      const updatedProducts = products.map((product) =>
        product._id === response.data._id ? response.data : product
      );
      setProducts(updatedProducts);
      setShowEditProductModal(false);
      alert("Product updated successfully!");
    } catch (error) {
      console.error("Error updating product:", error);
      alert("Failed to update product");
    }
  };

  const handleRemoveProduct = async () => {
    if (productToDelete) {
      try {
        await axios.delete(
          `http://localhost:5000/api/products/${productToDelete._id}`
        );
        setProducts(
          products.filter((product) => product._id !== productToDelete._id)
        );
        setShowDeleteConfirmationModal(false);
        alert("Product removed successfully!");
      } catch (error) {
        console.error("Error deleting product:", error);
        alert("Failed to delete product");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className=" mx-auto">
        <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">
          Mobile Inventory
        </h1>

        <button
          onClick={() => setShowAddProductModal(true)}
          className="mb-4 bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 flex items-center justify-center"
        >
          <i className="fas fa-plus-circle mr-2"></i> Add New Product
        </button>

        {/* Product Inventory Table */}
        <div className="overflow-x-auto bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Inventory List</h2>
          <table className="min-w-full table-auto">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-4 py-2">Product Name</th>
                <th className="px-4 py-2">Brand</th>
                <th className="px-4 py-2">Color</th>
                <th className="px-4 py-2">RAM</th>
                <th className="px-4 py-2">Storage</th>
                <th className="px-4 py-2">Quantity</th>
                <th className="px-4 py-2">Price</th>
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
                      </>
                    )}

                    {/* Variant Details */}
                    <td className="border px-4 py-2">{variant.color}</td>
                    <td className="border px-4 py-2">{variant.ram}</td>
                    <td className="border px-4 py-2">{variant.storage}</td>
                    <td className="border px-4 py-2">{variant.quantity}</td>
                    <td className="border px-4 py-2">${variant.price}</td>

                    {/* Actions Button Column (shown once for the product) */}
                    {idx === 0 && (
                      <td
                        rowSpan={product.variants.length}
                        className="border px-4 py-2 text-center"
                      >
                        {/* Edit Button */}
                        <button
                          onClick={() => {
                            setProductToEdit(product);
                            setShowEditProductModal(true);
                          }}
                          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 flex items-center justify-center"
                          title="Edit Product"
                        >
                          <i className="fas fa-edit mr-2"></i> Edit
                        </button>

                        {/* Remove Button */}
                        <button
                          onClick={() => {
                            setProductToDelete(product);
                            setShowDeleteConfirmationModal(true);
                          }}
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

      {/* Add Product Modal */}
      {showAddProductModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md w-1/3">
            <h2 className="text-xl font-semibold mb-4">Add New Mobile</h2>

            {/* Product Details Form */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="text"
                className="border p-2 rounded"
                placeholder="Product Name"
                value={newProduct.productName}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, productName: e.target.value })
                }
              />
              <input
                type="text"
                className="border p-2 rounded"
                placeholder="Brand"
                value={newProduct.brand}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, brand: e.target.value })
                }
              />
              <input
                type="text"
                className="border p-2 rounded"
                placeholder="Warranty"
                value={newProduct.warranty}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, warranty: e.target.value })
                }
              />
            </div>

            {/* Variant Details Form */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Add Variant</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <input
                  type="text"
                  className="border p-2 rounded"
                  placeholder="Color"
                  value={variant.color}
                  onChange={(e) =>
                    setVariant({ ...variant, color: e.target.value })
                  }
                />
                <input
                  type="text"
                  className="border p-2 rounded"
                  placeholder="RAM"
                  value={variant.ram}
                  onChange={(e) =>
                    setVariant({ ...variant, ram: e.target.value })
                  }
                />
                <input
                  type="text"
                  className="border p-2 rounded"
                  placeholder="Storage"
                  value={variant.storage}
                  onChange={(e) =>
                    setVariant({ ...variant, storage: e.target.value })
                  }
                />
                <input
                  type="number"
                  className="border p-2 rounded"
                  placeholder="Quantity"
                  value={variant.quantity}
                  onChange={(e) =>
                    setVariant({ ...variant, quantity: e.target.value })
                  }
                />
                <input
                  type="number"
                  className="border p-2 rounded"
                  placeholder="Price"
                  value={variant.price}
                  onChange={(e) =>
                    setVariant({ ...variant, price: e.target.value })
                  }
                />
              </div>
              <button
                onClick={handleAddVariant}
                className="mt-2 bg-green-500 text-white p-2 rounded hover:bg-green-600 flex items-center justify-center"
              >
                <i className="fas fa-plus-circle mr-2"></i> Add Variant
              </button>
            </div>

            {/* Add Product Button */}
            <div className="mt-4 flex justify-between">
              <button
                onClick={() => setShowAddProductModal(false)}
                className="bg-gray-500 text-white p-2 rounded hover:bg-gray-600 flex items-center justify-center"
              >
                <i className="fas fa-times mr-2"></i> Cancel
              </button>
              <button
                onClick={handleAddProduct}
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 flex items-center justify-center"
              >
                <i className="fas fa-check mr-2"></i> Add Product
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Product Modal */}
      {showEditProductModal && productToEdit && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md w-1/3">
            <h2 className="text-xl font-semibold mb-4">Edit Mobile</h2>

            {/* Product Details Form */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="text"
                className="border p-2 rounded"
                placeholder="Product Name"
                value={productToEdit.productName}
                onChange={(e) =>
                  setProductToEdit({
                    ...productToEdit,
                    productName: e.target.value,
                  })
                }
              />
              <input
                type="text"
                className="border p-2 rounded"
                placeholder="Brand"
                value={productToEdit.brand}
                onChange={(e) =>
                  setProductToEdit({ ...productToEdit, brand: e.target.value })
                }
              />
              <input
                type="text"
                className="border p-2 rounded"
                placeholder="Warranty"
                value={productToEdit.warranty}
                onChange={(e) =>
                  setProductToEdit({
                    ...productToEdit,
                    warranty: e.target.value,
                  })
                }
              />
            </div>

            {/* Variant Details Form */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Edit Variants</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <input
                  type="text"
                  className="border p-2 rounded"
                  placeholder="Color"
                  value={variant.color}
                  onChange={(e) =>
                    setVariant({ ...variant, color: e.target.value })
                  }
                />
                <input
                  type="text"
                  className="border p-2 rounded"
                  placeholder="RAM"
                  value={variant.ram}
                  onChange={(e) =>
                    setVariant({ ...variant, ram: e.target.value })
                  }
                />
                <input
                  type="text"
                  className="border p-2 rounded"
                  placeholder="Storage"
                  value={variant.storage}
                  onChange={(e) =>
                    setVariant({ ...variant, storage: e.target.value })
                  }
                />
                <input
                  type="number"
                  className="border p-2 rounded"
                  placeholder="Quantity"
                  value={variant.quantity}
                  onChange={(e) =>
                    setVariant({ ...variant, quantity: e.target.value })
                  }
                />
                <input
                  type="number"
                  className="border p-2 rounded"
                  placeholder="Price"
                  value={variant.price}
                  onChange={(e) =>
                    setVariant({ ...variant, price: e.target.value })
                  }
                />
              </div>
              <button
                onClick={handleAddVariant}
                className="mt-2 bg-green-500 text-white p-2 rounded hover:bg-green-600 flex items-center justify-center"
              >
                <i className="fas fa-plus-circle mr-2"></i> Add Variant
              </button>
            </div>

            {/* Edit Product Button */}
            <div className="mt-4 flex justify-between">
              <button
                onClick={() => setShowEditProductModal(false)}
                className="bg-gray-500 text-white p-2 rounded hover:bg-gray-600 flex items-center justify-center"
              >
                <i className="fas fa-times mr-2"></i> Cancel
              </button>
              <button
                onClick={handleEditProduct}
                className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 flex items-center justify-center"
              >
                <i className="fas fa-check mr-2"></i> Update Product
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteConfirmationModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md w-1/3">
            <h2 className="text-xl font-semibold mb-4">Confirm Deletion</h2>
            <p>Are you sure you want to remove this product?</p>
            <div className="mt-4 flex justify-between">
              <button
                onClick={() => setShowDeleteConfirmationModal(false)}
                className="bg-gray-500 text-white p-2 rounded hover:bg-gray-600 flex items-center justify-center"
              >
                <i className="fas fa-times mr-2"></i> Cancel
              </button>
              <button
                onClick={handleRemoveProduct}
                className="bg-red-500 text-white p-2 rounded hover:bg-red-600 flex items-center justify-center"
              >
                <i className="fas fa-check mr-2"></i> Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mobile;
