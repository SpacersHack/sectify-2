import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <main>
      <section>hi</section>
      <section className={inter.className}>{children}</section>
    </main>
  );
}
