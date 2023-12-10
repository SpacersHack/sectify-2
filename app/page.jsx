import Link from 'next/link';
import Button from './component/button';
import styles from './landing.module.css';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Landing() {
  const nav = [
    {
      name: 'Sign in',
      path: 'login',
    },
    {
      name: 'Sign up',
      path: 'register',
    },
  ];

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <h3>SECTIFY</h3>
          <p className="flex items-end">
            <Link href={'/auth/login'} className="mx-4 md:mx-4 text-black">
              Sign In
            </Link>
            </p>
            <ConnectButton/>
         
        </nav>
      </header>
      <section className="text-center text-white relative z-10">
        <h3 className="text-xl md:text-2xl">
          Unlock the power of your vote with SECTIFY
        </h3>
        <p className="w-full md:w-[800px] my-8 px-2">
          Welcome to our innovative voting platform, where your voice becomes
          the catalyst for change. Join us on a transformative journey,
          empowering you to shape the future you desire
        </p>
        <p>
          <Button href={'/auth/connectWallet'} css={'py-3 inline-block'}>
            Get started
          </Button>
        </p>
      </section>
      <aside className="absolute w-screen h-screen top-0 left-0 bg-black opacity-60"></aside>
    </main>
  );
}
