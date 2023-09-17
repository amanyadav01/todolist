import { Link } from 'react-router-dom';
import style from './sidebar.module.css';
const Sidebar = () => {
  return (
    <aside className={style['sidebar-container']}>
      <Link to="/" className={style['logo-header']}>
        TO-DO List
      </Link>
      <section className={style['item-lists']}>
        <Link to="/tasks" className={style['item']}>
          My Task
        </Link>
        <Link to="/tasks/1" className={style['item']}>
          Completed Task
        </Link>
        <Link to="/tasks" className={style['item']}>
          In progress Task
        </Link>
        <Link to="/tasks" className={style['item']}>
          TO DO Task
        </Link>
      </section>
    </aside>
  );
};

export default Sidebar;
