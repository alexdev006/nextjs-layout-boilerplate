import Link from 'next/link.js';
import React from 'react';

const Navbar = () => {
  return (
    //juste definir une height
    <div className=" h-20 bg-slate-900 flex items-center justify-between text-gray-200">
      <Link href="/">
        <button className="bg-gray-400 p-1 rounded-sm m-1 mt-1">Home</button>
      </Link>
      <div>
        <Link href="/Contact">
          <button className="bg-gray-400 p-1 rounded-sm m-1 mt-1">
            Contact
          </button>
        </Link>
        <Link href="/About">
          <button className="bg-gray-400 p-1 rounded-sm m-1 mt-1">About</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
