import { Link } from 'react-router-dom';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles['wrapper']}>
      <ul>
        <li>
          <Link to="/mytask">My Tasks</Link>
        </li>
        <li>
          <button type="button">Create Task</button>
        </li>
      </ul>
      <section className={styles['right-most-header']}>
        <div>
          <input type="text" name="search" placeholder="search" />
        </div>
        <div className={styles['user-info']}>
          <span>AY</span>
        </div>
      </section>
    </header>
  );
};

export default Header;
