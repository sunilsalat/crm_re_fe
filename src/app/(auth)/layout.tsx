import Image from "next/image";
import React from "react";
import authbackground from "../../assets/authbackground.png";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <div className='flex justify-stretch'>
          <div className='bg-[#1F1251] w-1/2 md:flex justify-center items-center hidden relative'>
              <div className='relative h-screen w-full'>
                {/* <Image src={'/img/hola data logo v2 white-02.png'} height={100} className='h-full w-full' width={200} alt={'login-img'} ></Image> */}
                <Image src={'/img/pexels-adrien-olichon-1257089-5230097.jpg'} height={1000} className='h-full w-full' width={1000} alt={'login-img'} ></Image>
              </div>

              {/* <div className='absolute top-0 left-0 w-full m-auto'>
                <Image src={'/img/header-background.jpg'} height={2000} className='h-full w-full' width={2000} alt={'login-img'} ></Image>
              </div> */}
          </div>

          <div className='w-full p-6 md:p-6 lg:w-1/2 flex justify-center items-center relative'>
              {children}
          </div>
        </div>
    </>
  );
};

export default layout;
