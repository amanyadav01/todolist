import { Link } from 'react-router-dom';
const TaskItem = () => {
  return (
    <article>
      <div>
        <h4>Collaborate with finance to approve budget for project </h4>
        <Link to="tasks/123">2121</Link>
      </div>
      <span>04/06/2023</span>
    </article>
  );
};

export default TaskItem;
