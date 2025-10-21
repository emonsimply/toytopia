import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';

const RootLayout = () => {
  return (
    <div className='bg-pink-50 h-screen'>
      <nav className='py-4 max-w-7xl mx-auto'>
        <Navbar></Navbar>
      </nav>
      <Outlet></Outlet>
      
    </div>
  );
};

export default RootLayout;