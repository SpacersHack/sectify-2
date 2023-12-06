import Link from 'next/link';
import styles from './login.module.css';
import AuthHeader from '../../component/auth/header';
import SectifyInput from '../../component/input';
import Button from '../../component/button';

const Login = () => {
  return (
    <main className={styles.main}>
      <section className="border px-4 md:px-8 py-10 rounded-lg bg-white w-full md:w-[500px]">
        <AuthHeader
          title={'Sign in to cast your vote for who you believe in!'}
          description={''}
        />
        <form action="" className="w-full mt-6">
          <SectifyInput
            title="Full name"
            placeholder={'Enter full name'}
            type={'text'}
            name={'fullname'}
          />
          <SectifyInput
            title="Email address"
            placeholder={'Enter Email address'}
            type={'email'}
            name={'email'}
          />
          <SectifyInput
            title="Password"
            placeholder={'Enter Password'}
            type={'password'}
            name={'password'}
          />
          <Link
            href={'/auth/reset'}
            className="flex justify-end text-sm text-sectify"
          >
            Forgot Password?
          </Link>
          <Button href={'/dashboard'} css={'my-3'}>
            Sign in
          </Button>
          <p className="text-center">
            Dont have an account ?{' '}
            <Link href={'/auth/register'} className="text-sectify">
              sign up
            </Link>
          </p>
        </form>
      </section>
    </main>
  );
};

export default Login;
