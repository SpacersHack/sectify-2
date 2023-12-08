'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './connect.module.css';
import AuthHeader from '../../component/auth/header';
const CodeVerification = () => {
  const [viewWallet, setViewWallet] = useState(false);

  const handleClick = () => {
    setViewWallet((prev) => !prev);
  };
  return (
    <>
      <main className={styles.main}>
        {!viewWallet ? (
          <section className="border px-4 md:px-8 py-10 rounded-lg bg-white w-full md:w-[500px] relative z-10">
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
          <section className="border px-4 md:px-8 py-10 rounded-lg bg-white w-full md:w-[500px] relative z-10">
            <AuthHeader title={'Connect your wallet!'} description={''} />
            <div className="my-4">
              <Link
                href={'/dashboard'}
                className="my-3 rounded-full text-center border py-3 cursor-pointer flex items-center justify-center"
              >
                <Image height={25} width={25} alt="" src={'/Meta.png'} />
                <span className="mx-2">Meta mask</span>
              </Link>
              <Link
                href={'/dashboard'}
                className="my-3 rounded-full text-center border py-3 cursor-pointer flex items-center justify-center"
              >
                <Image height={25} width={25} alt="" src={'/Trust.png'} />
                <span className="mx-2">Trust wallet</span>
              </Link>
              <Link
                href={'/dashboard'}
                className="my-3 rounded-full text-center border py-3 cursor-pointer flex items-center justify-center"
              >
                <Image height={25} width={25} alt="" src={'/Phantom.png'} />
                <span className="mx-2">Phantom wallet</span>
              </Link>
              <Link
                href={'/dashboard'}
                className="my-3 rounded-full text-center border py-3 cursor-pointer flex items-center justify-center"
              >
                <Image height={25} width={25} alt="" src={'/Coinbase.png'} />
                <span className="mx-2">Coinbase wallet</span>
              </Link>
            </div>
            <p className="text-center text-sm">
              By connecting a wallet, you agree to our Terms and Conditions and
              consent to its Privacy Policy
            </p>
          </section>
        )}
      </main>
      <aside className="absolute w-screen h-screen top-0 left-0 bg-black opacity-60"></aside>
    </>
  );
};

export default CodeVerification;
