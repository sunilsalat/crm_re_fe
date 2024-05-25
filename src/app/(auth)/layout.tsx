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
      <div className="relative h-screen w-full">
        <Image
          src={authbackground}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="absolute"
        />
        <div className="absolute top-0 right-0 h-full w-full lg:w-1/2 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default layout;
