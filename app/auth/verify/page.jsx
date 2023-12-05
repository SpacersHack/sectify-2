import styles from './verify.module.css';
import OtpComponent from './Otp';

import Button from '../../component/button';
import AuthHeader from '../../component/auth/header';

const Verify = () => {
  return (
    <main className={styles.main}>
      <section className="border px-4 md:px-8 py-10 rounded-lg bg-white w-full md:w-[500px]">
        <AuthHeader
          title={'Enter verification code!'}
          description={
            ' A verification code has been sent to your phone number'
          }
        />
        <form action="" className="w-full mt-6">
          <OtpComponent />
          <Button href={'/auth/passwordReset'} css={'my-3'}>
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
