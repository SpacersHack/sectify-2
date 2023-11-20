import Button from '../component/button';
import SectifyInput from '../component/input';
import styles from './login.module.css';

const Login = () => {
  return (
    <main className={styles.main}>
      <section className="border px-4 md:px-8 py-10 rounded-lg bg-white w-full md:w-[500px]">
        <aside className="text-center">
          <h3 className="my-3 text-xl font-semibold">SECTIFY</h3>
          <p className="text-center">
            Sign in to cast your vote for who you believe in.{' '}
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
          <p className="flex justify-end text-sm text-sectify">
            Forgot Password?
          </p>
          <Button href={''} css={'my-3'}>
            Sign in
          </Button>
          <p className="text-center">
            Dont have an account ? <span className="text-sectify">sign up</span>
          </p>
        </form>
      </section>
    </main>
  );
};

export default Login;
