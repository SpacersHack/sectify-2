'use client';
import { usePathname } from 'next/navigation';
import React from 'react';

const DashboardHeader = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <aside className="bg-white w-full p-4 flex justify-between items-center rounded-bl-xl">
      <p className="capitalize font-semibold text-lg">
        {pathname.split('/dashboard/')[1]?.length > 0
          ? pathname.split('/dashboard/')[1]
          : 'Home'}
      </p>
      <div className="flex bg-transparent md:bg-sectify-500 px-4 py-2 rounded-lg">
        <p className="mx-2 text-sm hidden md:block">Oxbaaf...75cec7</p>
        <p className=" bg-sectify-400 h-6 w-6 rounded-full"></p>
      </div>
    </aside>
  );
};

export default DashboardHeader;
