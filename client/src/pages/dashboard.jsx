import Dashboard from '../components/dashboard';
import Sidebar from '../components/dashboard/sidebar';
const DashboardLayout = () => {
  return (
    <section style={{ display: 'flex' }}>
      <Sidebar />
      <Dashboard />
    </section>
  );
};

export default DashboardLayout;
