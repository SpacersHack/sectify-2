import { Inter } from 'next/font/google';
import cls from 'classname';
import NavElements from './navigation';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <main className="w-screen h-screen overflow-hidden bg-[#F5F5F5] flex items-start">
      <NavElements />
      <section className={cls(inter.className, 'overflow-y-scroll p-6')}>
        {children}
      </section>
    </main>
  );
}
