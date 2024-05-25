"use client"

import React, { useState } from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { MdDashboardCustomize, MdOutlineNetworkWifi3Bar } from "react-icons/md";
import { PiShareNetworkBold } from 'react-icons/pi';
import { LuNetwork } from 'react-icons/lu';
import { AiFillGolden, AiFillSetting } from 'react-icons/ai';
import { IoPersonAddSharp, IoSettingsSharp } from 'react-icons/io5';
import Image from 'next/image';
import { BsJoystick , BsClipboard2CheckFill } from 'react-icons/bs';
import { FaUserGroup } from "react-icons/fa6";




const Sidebar = ({ isNavOpen, setNavOpen }: { isNavOpen: boolean, setNavOpen: any }) => {

    const pathname = usePathname();
    
    const [openDropDown, setOpenDropDown] = useState<boolean>(false)

    return (
        <>
            <Link className='h-[80px] flex items-center bg-white pl-10 pr-8 md:pr-0 justify-between cursor-pointer' href="/dashboard">
                <div className='relative h-full '>
                <Image src={'/img/real-estate-logo-942759067F-seeklogo.com.png'} height={100} className='h-full w-full' width={300} alt={'login-img'} ></Image>
                </div>
                <span className='block md:hidden' onClick={() => setNavOpen(!isNavOpen)}>WhiteCrossIcon</span>
            </Link>

            {/* <hr className=' border-gray-11' /> */}

            <div className='px-6 pt-10 space-y-4 border-black border-t-2'>
                <div onClick={() => setNavOpen(false)}>
                    <div className={`flex items-center py-3 px-4 space-x-2 justify-between ${pathname === '/dashboard' ? 'bg-magenta rounded-[8px]' : ''}`}>
                        <Link href="/dashboard" className={`flex space-x-4 items-center`}> 
                            <MdDashboardCustomize className='text-[24px]'/>
                            <p className='font-gilroy-medium capitalize'> Dashboard </p></Link>

                        {/* <div className={`cursor-pointer ${openDropDown ? "rotate-180" : ""}`} onClick={() => setOpenDropDown(!openDropDown)}><KeyboardArrowDown colour='white'/></div> */}
                    </div>

                    {/* {openDropDown && <Link href="/templates" className={`flex space-x-2 items-center ml-14 my-4 py-4 px-6 ${pathname.includes("/templates") ? "bg-[#BA1E6B] rounded-[8px]" : ""}`}>
                        <p className='font-gilroy-medium capitalize'> - Templates </p> 
                    </Link>} */}
                </div>
                
                <div onClick={() => setNavOpen(false)}>
                    <Link href="/users" className={`flex space-x-4 items-center py-3 px-4 ${pathname === '/users'|| pathname === '/users/user-config' ?  'bg-magenta rounded-[8px]' : ''}`}>
                        <FaUserGroup className="text-[24px]" />
                        <p className="font-gilroy-medium capitalize"> Customers </p>
                    </Link>
                </div>

                <div onClick={() => setNavOpen(false)}>
                    <Link href="/networks" className={`flex space-x-4 items-center py-3 px-4 ${pathname === '/networks' || pathname === '/networks/network-config' ? 'bg-magenta rounded-[8px]' : ''}`}>
                        <IoPersonAddSharp  className="text-[24px]" />
                        <p className="font-gilroy-medium capitalize"> Add Lead </p>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Sidebar
