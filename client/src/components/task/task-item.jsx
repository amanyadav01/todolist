import { Link } from 'react-router-dom';
// eslint-disable-next-line react/prop-types
const TaskItem = ({ title }) => {
  return (
    <article>
      <div>
        {/* <h4>Collaborate with finance to approve budget for project </h4> */}
        <h4>{title}</h4>
        <Link to="tasks/123">2121</Link>
      </div>
      <span>04/06/2023</span>
    </article>
  );
};

export default TaskItem;
