import style from './sidebar.module.css';
const Sidebar = () => {
  return (
    <aside className={style['sidebar-container']}>
      <a href="/tasklist">My Task</a>
      <a href="/tasklist">Completed Task</a>
      <a href="/tasklist">In progress Task</a>
      <a href="/tasklist">TO DO Task</a>
    </aside>
  );
};

export default Sidebar;
