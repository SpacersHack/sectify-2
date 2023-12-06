import { Inter } from 'next/font/google';
import cls from 'classname';
import NavElements from './navigation';
import DashboardHeader from './header';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <main className="w-screen h-screen overflow-hidden bg-[#F5F5F5] flex items-start">
      <NavElements />
      <section
        className={cls(inter.className, 'w-full h-full overflow-y-scroll')}
      >
        <DashboardHeader />
        <aside className="overflow-y-scroll p-6">{children}</aside>
      </section>
    </main>
  );
}
