// // import React, { useState } from "react";
// // import logo from "../assets/yash.jpg"; // Assuming this is the path to your logo image

// // const AuthPage = () => {
// //   const [isLogin, setIsLogin] = useState(true); // Track whether it's login or signup
// //   const [formData, setFormData] = useState({
// //     username: "",
// //     email: "",
// //     password: "",
// //     confirmPassword: "",
// //   });

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prevData) => ({ ...prevData, [name]: value }));
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // Handle form submission logic for login or signup
// //     if (isLogin) {
// //       // Handle login logic
// //     } else {
// //       // Handle signup logic
// //     }
// //   };

// //   return (
// //     <div
// //       className="relative min-h-screen bg-cover bg-center"
// //       style={{ backgroundImage: `url(${logo})`  , backgroundSize : 'cover'}} // Applying the imported image as background
// //     >
// //       <div className="absolute inset-0 bg-black opacity-50"></div>
// //       <div className="flex justify-center items-center min-h-screen z-10">
// //         <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
// //           <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
// //             {isLogin ? "Login" : "Sign Up"}
// //           </h2>
// //           <form onSubmit={handleSubmit}>
// //             {!isLogin && (
// //               <div className="mb-4">
// //                 <label htmlFor="username" className="block text-gray-700">
// //                   Username
// //                 </label>
// //                 <input
// //                   type="text"
// //                   id="username"
// //                   name="username"
// //                   value={formData.username}
// //                   onChange={handleChange}
// //                   required
// //                   className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
// //                 />
// //               </div>
// //             )}

// //             <div className="mb-4">
// //               <label htmlFor="email" className="block text-gray-700">
// //                 Email
// //               </label>
// //               <input
// //                 type="email"
// //                 id="email"
// //                 name="email"
// //                 value={formData.email}
// //                 onChange={handleChange}
// //                 required
// //                 className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
// //               />
// //             </div>

// //             <div className="mb-4">
// //               <label htmlFor="password" className="block text-gray-700">
// //                 Password
// //               </label>
// //               <input
// //                 type="password"
// //                 id="password"
// //                 name="password"
// //                 value={formData.password}
// //                 onChange={handleChange}
// //                 required
// //                 className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
// //               />
// //             </div>

// //             {!isLogin && (
// //               <div className="mb-4">
// //                 <label htmlFor="confirmPassword" className="block text-gray-700">
// //                   Confirm Password
// //                 </label>
// //                 <input
// //                   type="password"
// //                   id="confirmPassword"
// //                   name="confirmPassword"
// //                   value={formData.confirmPassword}
// //                   onChange={handleChange}
// //                   required
// //                   className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
// //                 />
// //               </div>
// //             )}

// //             <button
// //               type="submit"
// //               className="w-full py-3 mt-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none"
// //             >
// //               {isLogin ? "Login" : "Sign Up"}
// //             </button>

// //             <div className="mt-4 text-center">
// //               <p className="text-gray-700">
// //                 {isLogin
// //                   ? "Don't have an account? "
// //                   : "Already have an account? "}
// //                 <button
// //                   type="button"
// //                   onClick={() => setIsLogin(!isLogin)}
// //                   className="text-blue-500"
// //                 >
// //                   {isLogin ? "Sign Up" : "Login"}
// //                 </button>
// //               </p>
// //             </div>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AuthPage;

// import React, { useState } from "react";
// import logo from "../assets/yash.jpg"; // Assuming this is the path to your logo image

// const AuthPage = () => {
//   const [isLogin, setIsLogin] = useState(true); // Track whether it's login or signup
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic for login or signup
//     if (isLogin) {
//       // Handle login logic
//     } else {
//       // Handle signup logic
//     }
//   };

//   return (
//     <div
//       className="relative min-h-screen bg-cover bg-center"
//       style={{
//         backgroundImage: `url(${logo})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         height: "70vh", // Make sure the background takes full height
//       }}
//     >
//       {/* Dark overlay with partial opacity */}
//       <div className="absolute inset-0 bg-black opacity-40"></div>
//       {/* Centered form */}
//       <div className="flex justify-center items-center min-h-screen z-10">
//         <div className="bg-transparent p-8 rounded-lg shadow-lg w-full sm:w-96 z-50">
//           <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
//             {isLogin ? "Login" : "Sign Up"}
//           </h2>
//           <form onSubmit={handleSubmit} >
//             {!isLogin && (
//               <div className="mb-4">
//                 <label htmlFor="username" className="block text-gray-700">
//                   Username
//                 </label>
//                 <input
//                   type="text"
//                   id="username"
//                   name="username"
//                   value={formData.username}
//                   onChange={handleChange}
//                   required
//                   className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//             )}

//             <div className="mb-4">
//               <label htmlFor="email" className="block text-gray-700">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div className="mb-4">
//               <label htmlFor="password" className="block text-gray-700">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             {!isLogin && (
//               <div className="mb-4">
//                 <label
//                   htmlFor="confirmPassword"
//                   className="block text-gray-700"
//                 >
//                   Confirm Password
//                 </label>
//                 <input
//                   type="password"
//                   id="confirmPassword"
//                   name="confirmPassword"
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                   required
//                   className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//             )}

//             <button
//               type="submit"
//               className="w-full py-3 mt-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none"
//             >
//               {isLogin ? "Login" : "Sign Up"}
//             </button>

//             <div className="mt-4 text-center">
//               <p className="text-gray-700">
//                 {isLogin
//                   ? "Don't have an account? "
//                   : "Already have an account? "}
//                 <button
//                   type="button"
//                   onClick={() => setIsLogin(!isLogin)}
//                   className="text-blue-500"
//                 >
//                   {isLogin ? "Sign Up" : "Login"}
//                 </button>
//               </p>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AuthPage;

import React, { useState } from "react";
import logo from "../assets/yash.jpg"; // Assuming this is the path to your logo image

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true); // Track whether it's login or signup
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic for login or signup
    if (isLogin) {
      // Handle login logic
    } else {
      // Handle signup logic
    }
  };

  return (
    <div className="min-h-[80vh] flex bg-black">
      {/* Left side: Image */}
      <div
        className="w-1/2 bg-cover bg-center"
        style={{
          backgroundImage: `url(${logo})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay with partial opacity */}
        {/* <div className="absolute inset-0 bg-black opacity-40"></div> */}
      </div>

      {/* Right side: Form */}
      <div className="flex justify-center items-center w-1/2 bg-black">
        <div className="p-8 rounded-lg w-full sm:w-96">
          {/* Heading with white color for better contrast on black background */}
          <h2 className="text-4xl font-extrabold text-center mb-6 text-white">
            {isLogin ? "Login" : "Sign Up"}
          </h2>

          {/* Form Container */}
          <form onSubmit={handleSubmit}>
            {/* Username Input - only shown on Sign Up */}
            {!isLogin && (
              <div className="mb-4">
                <label htmlFor="username" className="block text-white">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}

            {/* Email Input */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-white">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Confirm Password - only shown on Sign Up */}
            {!isLogin && (
              <div className="mb-4">
                <label htmlFor="confirmPassword" className="block text-white">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 mt-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none"
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>

            {/* Toggle between Login/Sign Up */}
            <div className="mt-4 text-center">
              <p className="text-white">
                {isLogin
                  ? "Don't have an account? "
                  : "Already have an account? "}
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-blue-400 hover:text-blue-500"
                >
                  {isLogin ? "Sign Up" : "Login"}
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
