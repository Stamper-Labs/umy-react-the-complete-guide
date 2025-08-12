import React from 'react';
import TodoModel from '../model/todo.model';
import classes from './TodoItem.module.css';

const Todo: React.FC<TodoModel> = (props) => {
  const onClickHandler = (event: React.MouseEvent) => {
    props.onRemoveTodoItem(props.id);
  };
  return (
    <li className={classes.item} key={props.id} onClick={onClickHandler}>
      {props.value}
    </li>
  );
};

export default Todo;
