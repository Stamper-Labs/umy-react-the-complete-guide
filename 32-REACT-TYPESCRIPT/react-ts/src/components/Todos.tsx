import React from 'react';
import TodoModel from '../model/todo.model';
import Todo from './Todo';
import classes from './Todos.module.css';

const Todos: React.FC<{ items: TodoModel[] }> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((todoModel) => (
        <Todo id={todoModel.id} value={todoModel.value} />
      ))}
    </ul>
  );
};

export default Todos;
