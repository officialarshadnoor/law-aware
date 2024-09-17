import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserIcon } from '@heroicons/react/24/solid';
import Side from '../assets/images/sidelogo.png';
import Cookies from 'js-cookie';
import { Button } from 'flowbite-react';
import { base_url } from '../constants/contants';

const Navbar = () => {
  return (
    <header className="bg-gray-900 p-4 text-gray-300 fixed w-full top-0 left-0 z-50">
      <nav className="flex items-center justify-between container mx-auto">
        <h1 className="text-2xl font-bold">
          <img
            src={Side}
            className='h-10'
            />
        </h1>
        <div className="flex items-center space-x-4">
          <Link to="/" className="hover:text-gray-200">HOME</Link>
          <Link to="/learning" className="hover:text-gray-200">LEARNING</Link>
          <Link to="/awareness" className="hover:text-gray-200">AWARENESS</Link>
          <Link to="/login" className="flex items-center hover:text-gray-200">
            <UserIcon className="h-6 w-6 text-gray-300" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
