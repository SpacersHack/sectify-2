'use client';

import { useState } from 'react';
import styles from './password.module.css';

import AuthHeader from '../../component/auth/header';
import Button from '../../component/button';
import SectifyInput from '../../component/input';

const PasswordReset = () => {
  const [reset, setReset] = useState(false);
  return (
    <main className={styles.main}>
      {!reset ? (
        <section className="border px-4 md:px-8 py-10 rounded-lg bg-white w-full md:w-[500px]">
          <AuthHeader title={'Reset password!'} description={''} />
          <form action="" className="w-full mt-6">
            <SectifyInput
              title="Password"
              placeholder={'Enter Password'}
              type={'password'}
              name={'password'}
            />
            <SectifyInput
              title="Confirm password"
              placeholder={'Confirm Password'}
              type={'password'}
              name={'confirm_password'}
            />
            <Button handleClick={() => setReset(true)} href={''} css={'my-3'}>
              Reset password
            </Button>
          </form>
        </section>
      ) : (
        <section className="text-center border px-4 md:px-8 py-10 rounded-lg bg-white w-full md:w-[400px]">
          <h3 className="my-6 font-semibold text-xl">Successful</h3>
          <p className="my-6 text-gray-700">
            You have successfully reset your password
          </p>
          <Button href={'/dashboard'}>Continue</Button>
        </section>
      )}
    </main>
  );
};

export default PasswordReset;
