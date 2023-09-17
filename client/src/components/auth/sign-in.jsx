import styles from './auth.module.css';

const SignIn = () => {
  return (
    <section className={styles['login-form']}>
      <div className={styles['form-fields']}>
        <label htmlFor="email">Email</label>
        <input type="text" name="" id="" placeholder="Username" />
      </div>
      <div className={styles['form-fields']}>
        <label htmlFor="password">Passwrod</label>
        <input type="password" name="" id="" />
      </div>
      <div className={styles['form-fields']}>
        <button type="button">Log in</button>
      </div>
    </section>
  );
};

export default SignIn;
