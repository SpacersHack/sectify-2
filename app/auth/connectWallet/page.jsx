'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './connect.module.css';
import AuthHeader from '../../component/auth/header';
const CodeVerification = () => {
  const [viewWallet, setViewWallet] = useState(false);

  const handleClick = () => {
    setViewWallet((prev) => !prev);
  };
  return (
    <main className={styles.main}>
      {!viewWallet ? (
        <section className="border px-4 md:px-8 py-10 rounded-lg bg-white w-full md:w-[500px]">
          <AuthHeader
            title={'Verify your eligibility to vote!'}
            description={
              'You must be a Nigerian with a Voter Identity Number(VIN) and must be above the age of 18          '
            }
          />
          <div
            className="bg-sectify py-2 px-4 rounded-md text-white block text-center"
            onClick={handleClick}
          >
            Start verification
          </div>
        </section>
      ) : (
        <section className="border px-4 md:px-8 py-10 rounded-lg bg-white w-full md:w-[500px]">
          <AuthHeader title={'Connect your wallet!'} description={''} />
          <div className="my-4">
            <Link
              href={'/dashboard'}
              className="my-3 block rounded-full text-center border py-3 cursor-pointer"
            >
              Meta mask
            </Link>
            <Link
              href={'/dashboard'}
              className="my-3 block rounded-full text-center border py-3 cursor-pointer"
            >
              Trust wallet
            </Link>
            <Link
              href={'/dashboard'}
              className="my-3 block rounded-full text-center border py-3 cursor-pointer"
            >
              Polygon id
            </Link>
            <Link
              href={'/dashboard'}
              className="my-3 block rounded-full text-center border py-3 cursor-pointer"
            >
              Coinbase wallet
            </Link>
          </div>
          <p className="text-center text-sm">
            By connecting a wallet, you agree to our Terms and Conditions and
            consent to its Privacy Policy
          </p>
        </section>
      )}
    </main>
  );
};

export default CodeVerification;
