"use client";

import React, { useState } from 'react';
import Sidebar from '../component/sidebar/Sidebar';
import Navbar from '../component/navbar/Navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isNavOpen, setNavOpen] = useState(false);

  return (
    <div className="flex h-screen">
      <Sidebar isNavOpen={isNavOpen} setNavOpen={setNavOpen} />
      <div className="flex-1 flex flex-col">
        <Navbar isNavOpen={isNavOpen} setNavOpen={setNavOpen} />
        <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-gray-100">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
