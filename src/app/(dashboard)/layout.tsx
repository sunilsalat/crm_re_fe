"use client"

import React, { useState } from 'react'
import Sidebar from '../component/sidebar/Sidebar';
import Navbar from '../component/navbar/Navbar';

const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    const[isNavOpen, setNavOpen] = useState(false);
  return (
    <>
        <div className='flex'>
        <div className={`${isNavOpen ? 'w-full' : 'w-[0%]'} md:w-[20%] bg-blue-400 text-white h-screen`}>
        <Sidebar isNavOpen={isNavOpen} setNavOpen={setNavOpen}/>
        </div>
        <div className={`${isNavOpen ? 'w-[0%]' : 'w-full'} md:w-[80%] bg-gray-bg h-screen overflow-y-auto`}>
            <Navbar isNavOpen={isNavOpen} setNavOpen={setNavOpen}/>

            <div className={`px-4 md:px-8 pt-8 pb-0 overflow-y-auto  ${'h-[calc(100%-80px)]'} `}>
                {children}
            </div>
        </div>
    </div>
    </>
  )
}

export default layout