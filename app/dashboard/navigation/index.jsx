'use client';
import React from 'react';
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

  return (
    <section className="w-3/6 md:w-1/6 bg-white h-full">
      <h3 className="my-3 text-xl font-bold text-[#009947] pl-10">SECTIFY</h3>
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
  );
};

export default NavElements;
