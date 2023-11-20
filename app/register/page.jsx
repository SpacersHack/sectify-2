import Link from 'next/link';
import Button from '../component/button';
import SectifyInput from '../component/input';
import styles from './register.module.css';

const Login = () => {
  return (
    <main className={styles.main}>
      <section className="border px-4 md:px-8 py-10 rounded-lg bg-white w-full md:w-[500px]">
        <aside className="text-center">
          <h3 className="my-3 text-xl font-semibold">SECTIFY</h3>
          <p className="text-center">
            Sign Up to cast your vote for who you believe in.{' '}
          </p>
        </aside>
        <form action="" className="w-full mt-6">
          <SectifyInput
            title="Full name"
            placeholder={'Enter full name'}
            type={'text'}
            name={'fullname'}
          />
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
          <SectifyInput
            title="Password"
            placeholder={'Enter Password'}
            type={'password'}
            name={'password'}
          />

          <Button href={''} css={'my-3'}>
            Sign up
          </Button>
          <p className="text-center">
            Already have an account ?{' '}
            <Link href="/login" className="text-sectify">
              sign in
            </Link>
          </p>
          <p className="text-center text-sm my-4">
            By signing up you accept our{' '}
            <span className="text-sectify inline-block">
              terms and condition & private policy
            </span>
          </p>
        </form>
      </section>
    </main>
  );
};

export default Login;
