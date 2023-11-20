import React from 'react';
import SectifyInput from '../component/input';
import Button from '../component/button';
import Link from 'next/link';
import styles from './reset.module.css';
const Reset = () => {
  return (
    <main className={styles.main}>
      <section className="border px-4 md:px-8 py-10 rounded-lg bg-white w-full md:w-[500px]">
        <aside className="text-center">
          <h3 className="my-3 text-xl font-semibold">SECTIFY</h3>
          <p className="text-center">Reset Password</p>
          <p className="text-center text-sm my-3">
            A verification code will be sent to your registered phone number
          </p>
        </aside>
        <form action="" className="w-full mt-6">
          <SectifyInput
            title="Vin"
            placeholder={'Enter Vin'}
            type={'text'}
            name={'vin'}
          />
          <SectifyInput
            title="Email address"
            placeholder={'Enter Email address'}
            type={'email'}
            name={'email'}
          />
          <Button href={''} css={'my-3'}>
            Send code
          </Button>
        </form>
      </section>
    </main>
  );
};

export default Reset;
