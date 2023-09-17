import React from 'react';
import TaskItem from './task-item';

const TaskList = () => {
  return (
    <div>
      {[1, 2, 3, 4].map((item) => {
        return <TaskItem />;
      })}
    </div>
  );
};

export default TaskList;
