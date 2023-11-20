import Button from './component/button';
import styles from './landing.module.css';

export default function Landing() {
  const nav = ['Sign in', 'Sign up'];

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <h3>SECTIFY</h3>
          <ul className="flex">
            {nav.map((n, i) => (
              <li key={i} className="mx-2 md:mx-4 text-black">
                {n}
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <section className="text-center text-white">
        <h3 className="text-xl md:text-2xl">
          Unlock the power of your vote with SECTIFY
        </h3>
        <p className="w-full md:w-[800px] my-8 px-2">
          Welcome to our innovative voting platform, where your voice becomes
          the catalyst for change. Join us on a transformative journey,
          empowering you to shape the future you desire
        </p>
        <p>
          <Button href={'/login'} css={'py-3 inline-block'}>
            Get started
          </Button>
        </p>
      </section>
    </main>
  );
}
