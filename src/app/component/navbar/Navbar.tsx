import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
// import { useSelector } from 'react-redux';

// import type { RootState } from '../../../redux/store'
import { IoIosArrowDown } from 'react-icons/io';


const Navbar = ({ isNavOpen, setNavOpen }: { isNavOpen: boolean, setNavOpen: any }) => {
  // const user:any = useSelector((state: RootState) => state?.user?.userData)

  // console.log(user,"userS")

  const user = {
    name:"Admin",
    email:"admin@gmail.com",
    logoUrl:"/img/real-estate-logo-942759067F-seeklogo.com.png"
  }

  const router = useRouter()
  const [open, setOpen] = useState(false);
  const logout = () => {
    localStorage.clear();
    router.push("/")
  }
  return (
    <div className={`bg-white flex sticky top-0 z-50 ${isNavOpen ? 'justify-end' : 'justify-between'} md:justify-end border-gray border-b  items-center drop-shadow-none h-[80px] px-6 space-x-4`}>
      {!isNavOpen && <div className="flex md:hidden" onClick={() => setNavOpen(!isNavOpen)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </div>}
      <div className='flex flex-row gap-4 items-center' onClick={() => setOpen(prev => !prev)}>
        <div className='text-right'>
          <p className='text-black font-gilroy-bold'>{user.name}</p>
          <p className='text-[#49525b80] font-gilroy-medium'>{user.email}</p>
        </div>
        <div className='flex items-center space-x-2 cursor-pointer'>
          <div>
          <Image src={'/img/real-estate-logo-942759067F-seeklogo.com.png'} alt={'dp-img'} height={56} width={56} className='rounded-full object-cover h-[56px] w-[56px]' />
          </div>
          {/* <KeyboardArrowDown colour='#8E9BA4'/> */}<IoIosArrowDown className='text-[24px]'/>
        </div>
      </div>
      {open &&
        <div className='p-4 bg-white absolute top-20 border-2 rounded-[8px] right-5'>
          <p className='text-black font-gilroy-medium cursor-pointer' onClick={() => logout()}>Logout</p>
        </div>
      }
  </div>

  )
}

export default Navbar
