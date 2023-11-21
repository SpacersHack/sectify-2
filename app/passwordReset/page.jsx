import React from 'react';
import SectifyInput from '../component/input';
import Button from '../component/button';
import styles from './password.module.css';

const PasswordReset = () => {
  return (
    <main className={styles.main}>
      <section className="border px-4 md:px-8 py-10 rounded-lg bg-white w-full md:w-[500px]">
        <aside className="text-center">
          <h3 className="my-3 text-xl font-semibold">SECTIFY</h3>
          <p className="text-center">Reset password!</p>
        </aside>
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
          <Button href={''} css={'my-3'}>
            Reset password
          </Button>
        </form>
      </section>
    </main>
  );
};

export default PasswordReset;
