import React from 'react';
import styles from './reset.module.css';

import AuthHeader from '../../component/auth/header';
import Button from '../../component/button';
import SectifyInput from '../../component/input';

const Reset = () => {
  return (
    <main className={styles.main}>
      <section className="border px-4 md:px-8 py-10 rounded-lg bg-white w-full md:w-[500px]">
        <AuthHeader
          title={'Reset password!'}
          description={
            'A verification code will be sent to your registered phone number'
          }
        />
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
          <Button href={'/auth/verify'} css={'my-3'}>
            Send code
          </Button>
        </form>
      </section>
    </main>
  );
};

export default Reset;
