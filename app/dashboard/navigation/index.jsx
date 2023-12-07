'use client';
import React, { useState } from 'react';
import cls from 'classname';
import styles from './nav.module.css';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

const navigation = [
  {
    name: 'home',
    icon: '',
    route: '/dashboard',
  },
  {
    name: 'poll',
    icon: '',
    route: '/dashboard/poll',
  },
  {
    name: 'aspirant',
    icon: '',
    route: '/dashboard/aspirant',
  },
  {
    name: 'result',
    icon: '',
    route: '/dashboard/result',
  },
];

const NavElements = () => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);

  const handleVisibility = () => {
    setIsVisible((prev) => !prev);
  };
  return (
    <>
      <section
        className={cls(
          'w-5/6 md:w-1/6 bg-white h-full',
          !isVisible ? 'hidden' : 'block'
        )}
      >
        <h3
          className="my-3 text-xl font-bold text-[#009947] pl-10 flex items-center cursor-pointer"
          onClick={handleVisibility}
        >
          <span className="block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
              />
            </svg>
          </span>
          <p>SECTIFY</p>
        </h3>
        <aside className="py-6 h-full flex flex-col justify-between">
          <ul>
            {navigation.map((nav, id) => (
              <Link
                href={nav.route}
                key={id}
                className={cls(
                  styles.navItem,
                  pathname === nav.route && `${styles.active} bg-[#F5F5F5]`
                )}
              >
                {nav.name}
              </Link>
            ))}
          </ul>
          <p className="pl-10 my-3 py-3 capitalize mb-10 text-sectify-red">
            Log out
          </p>
        </aside>
      </section>
      {!isVisible && (
        <p
          className="fixed text-[#009947] cursor-pointer p-4 bg-white rounded-full top-1/4 -translate-y-1/4 animate-bounce shadow-lg"
          onClick={handleVisibility}
        >
          <span className="block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
              />
            </svg>
          </span>
        </p>
      )}
    </>
  );
};

export default NavElements;
