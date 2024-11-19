import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 rounded-md mb-6 flex justify-between items-center">
      <ul className="flex space-x-4">
        <li>
          <Link
            to="/mobiles"
            className="text-white hover:bg-blue-700 px-4 py-2 rounded"
          >
            Mobiles
          </Link>
        </li>
        <li>
          <Link
            to="/tv"
            className="text-white hover:bg-blue-700 px-4 py-2 rounded"
          >
            TV
          </Link>
        </li>
        <li>
          <Link
            to="/ac"
            className="text-white hover:bg-blue-700 px-4 py-2 rounded"
          >
            Air Conditioner
          </Link>
        </li>
        <li>
          <Link
            to="/coolers"
            className="text-white hover:bg-blue-700 px-4 py-2 rounded"
          >
            Coolers
          </Link>
        </li>
        <li>
          <Link
            to="/washing-machines"
            className="text-white hover:bg-blue-700 px-4 py-2 rounded"
          >
            Washing Machines
          </Link>
        </li>
        <li>
          <Link
            to="/refrigerators"
            className="text-white hover:bg-blue-700 px-4 py-2 rounded"
          >
            Refrigerators
          </Link>
        </li>
        <li>
          <Link
            to="/accessories"
            className="text-white hover:bg-blue-700 px-4 py-2 rounded"
          >
            Accessories
          </Link>
        </li>
      </ul>
      <ul className="flex space-x-4">
      <li>
          <Link
            to="/Bill"
            className="text-white hover:bg-blue-700 px-4 py-2 rounded"
          >
            Bill
          </Link>
        </li>
        <li>
          <Link
            to="/auth"
            className="text-white hover:bg-blue-700 px-4 py-2 rounded"
          >
            Authentication
          </Link>
        </li>
       
      </ul>
    </nav>
  );
};

export default Navbar;
