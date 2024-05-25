import Image from 'next/image';
import React from 'react'
import authbackground from '../../assets/authbackground.png'

const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <>
        <Image src={authbackground} alt='image' className='h-screen w-full'/>
        {children}
    </>
  )
}

export default layout