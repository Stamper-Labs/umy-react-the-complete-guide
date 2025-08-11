import React from 'react';
import Todo from '../model/todo';

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>{todo.value}</li>
      ))}
    </ul>
  );
};

export default Todos;
