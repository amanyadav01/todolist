import SignIn from '../components/auth/sign-in';
import styles from '../components/auth/auth.module.css';

const LoginPage = () => {
  return (
    <section className={styles['auth-container']}>
      <div className={styles['wrapper']}>
        <div className={styles['tabs']}>
          <div className={styles['tabs-item']}>
            <label htmlFor="sigIn">Sign In</label>
            <input type="radio" name="auth" id="sigIn" value="sigIn" />
          </div>
          <div className={styles['tabs-item']}>
            <label htmlFor="sigIn">Sign Up</label>
            <input type="radio" name="auth" id="sigUP" value="sigUP" checked />
          </div>
        </div>
        <SignIn />
      </div>
    </section>
  );
};

export default LoginPage;
