"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MdDashboardCustomize } from 'react-icons/md';
import { IoPersonAddSharp } from 'react-icons/io5';
import Image from 'next/image';
import { FaUserGroup } from 'react-icons/fa6';

const Sidebar = ({ isNavOpen, setNavOpen }: { isNavOpen: boolean; setNavOpen: any }) => {
  const pathname = usePathname();

  const handleLinkClick = () => {
    setNavOpen(false);
  };

  return (
    <div className={`fixed md:relative bg-[#eaf0fa] h-full transition-transform transform ${isNavOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 w-64 shadow-lg`}>
      <div className="bg-white flex items-center justify-between py-4 px-8 border-b border-gray-200">
        <Link href="/dashboard">
          <Image
            src={'/img/real-estate-logo-942759067F-seeklogo.png'}
            height={90}
            width={90}
            alt={'logo'}
          />
        </Link>
        <button className="md:hidden" onClick={() => setNavOpen(false)}>
          ✕
        </button>
      </div>
      <nav className=" mt-6 px-4 flex flex-col gap-4">
        <Link href="/dashboard" onClick={handleLinkClick} className={`flex items-center py-2 px-4 rounded-lg ${pathname === '/dashboard' ? 'bg-blue-500 text-white' : 'text-[#31435f] hover:bg-[#c1d3f0]'}`}>
          <MdDashboardCustomize className="text-2xl mr-2" />
          Dashboard
        </Link>
        <Link href="/customers" onClick={handleLinkClick} className={`flex items-center py-2 px-4 rounded-lg ${pathname === '/customers' ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-[#c1d3f0]'}`}>
          <FaUserGroup className="text-2xl mr-2" />
          Customers
        </Link>
        <Link href="/add-lead" onClick={handleLinkClick} className={`flex items-center py-2 px-4 rounded-lg ${pathname === '/add-lead' ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-[#c1d3f0]'}`}>
          <IoPersonAddSharp className="text-2xl mr-2" />
          Add Lead
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
