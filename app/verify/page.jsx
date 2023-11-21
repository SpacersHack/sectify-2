import Button from '../component/button';
import styles from './verify.module.css';
import Otp from './Otp';

const Verify = () => {
  return (
    <main className={styles.main}>
      <section className="border px-4 md:px-8 py-10 rounded-lg bg-white w-full md:w-[500px]">
        <aside className="text-center">
          <h3 className="my-3 text-xl font-semibold">SECTIFY</h3>
          <p className="text-center">Enter verification code!</p>
          <p className="text-center text-sm my-3">
            A verification code has been sent to your phone number
          </p>
        </aside>
        <form action="" className="w-full mt-6">
          <Otp />
          <Button href={'/passwordReset'} css={'my-3'}>
            Verify
          </Button>
          <p className="text-center text-sm my-4">
            Didnt get a code ?{' '}
            <span className="text-sectify inline-block">
              click here to resend
            </span>
          </p>
        </form>
      </section>
    </main>
  );
};

export default Verify;
