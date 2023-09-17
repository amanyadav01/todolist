import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TaskItem from './task-item';

import { getTask } from '../../store/tasks/action';

const TaskList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTask());
  }, []);
  const { tasks } = useSelector((state) => state?.taskReducer);
  console.log('tasks', tasks);
  return (
    <div>
      {tasks.map((item) => {
        return <TaskItem title={item?.title} />;
      })}
    </div>
  );
};

export default TaskList;
