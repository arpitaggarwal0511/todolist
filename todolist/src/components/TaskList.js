import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTask } from '../redux/taskSlice';
import "../App.css";

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  return (
    <ul className="task-list">
      {tasks.map(task => (
        <li key={task.id}>
          <span>{task.text}</span>
          <button onClick={() => dispatch(removeTask(task.id))} className="delete-button">Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;