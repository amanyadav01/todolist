import { Outlet } from 'react-router-dom';
// import Dashboard from '../components/dashboard';
import Sidebar from '../components/dashboard/sidebar';
import Header from '../components/header';
import styles from '../components/dashboard/dashboard.module.css';

const DashboardLayout = () => {
  return (
    <section className={styles['layout-container']}>
      <Sidebar />
      <section className={styles['layout-wrapper']}>
        <Header />
        <main className={styles['content']}>{<Outlet />}</main>
      </section>

      {/* <Dashboard /> */}
    </section>
  );
};

export default DashboardLayout;
