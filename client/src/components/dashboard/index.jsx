import { useEffect } from 'react';
import { getAllTasks } from '../../services/fetchpost';
import styles from './dashboard.module.css';

const Dashboard = () => {
  useEffect(() => {
    const getdata = async () => {
      const response = await getAllTasks();
      console.log('response >>>>>>>>>>>', response);
    };
    getdata();
  }, []);
  return (
    <section>
      <h1>Hello from ROOT Dasboard page</h1>
    </section>
  );
};

export default Dashboard;
