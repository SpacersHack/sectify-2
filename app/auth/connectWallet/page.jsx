import React from 'react';
import styles from './connect.module.css';
import AuthHeader from '../../component/auth/header';

const CodeVerification = () => {
  return (
    <main className={styles.main}>
      <section className="border px-4 md:px-8 py-10 rounded-lg bg-white w-full md:w-[500px]">
        <AuthHeader
          title={'Sign in to cast your vote for who you believe in!'}
          description={''}
        />
      </section>
    </main>
  );
};

export default CodeVerification;
