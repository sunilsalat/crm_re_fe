"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Navbar = ({ isNavOpen, setNavOpen }: { isNavOpen: boolean; setNavOpen: any }) => {

  const router = useRouter()
  const [open, setOpen] = useState(false);

  const logout = () => {
    localStorage.clear();
    router.push("/login")
  }

  return (
    <div className="bg-white shadow-md flex items-center justify-between h-24 px-4 md:px-8">
      <div className="flex items-center">
        <button className="md:hidden" onClick={() => setNavOpen(!isNavOpen)}>
          ☰
        </button>
      </div>
      <div className="flex items-center space-x-4" onClick={() => setOpen(prev => !prev)}>
        <span className="font-medium">Admin</span>
        <Image
          src="/img/real-estate-logo-942759067F-seeklogo.png"
          alt="User Image"
          width={70}
          height={70}
          className="rounded-full"
        />
      </div>
      {open &&
        <div className='p-4 bg-white absolute top-20 border-2 rounded-[8px] right-5'>
          <p className='text-black font-gilroy-medium cursor-pointer' onClick={() => logout()}>Logout</p>
        </div>
      }
    </div>
  );
};

export default Navbar;