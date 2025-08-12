import React from 'react';
import TodoModel from '../model/todo.model';
import classes from './TodoItem.module.css';

const Todo: React.FC<TodoModel> = (props) => {
  return (
    <li className={classes.item} key={props.id}>
      {props.value}
    </li>
  );
};

export default Todo;
