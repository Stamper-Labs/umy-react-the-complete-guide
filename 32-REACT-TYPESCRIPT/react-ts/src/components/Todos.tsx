import React from 'react';
import TodoModel from '../model/todo.model';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';

const Todos: React.FC<{
  items: TodoModel[];
  onRemoveTodo: (idTodo: string) => void;
}> = (props) => {
  const onRemoveTodoItemHandler = (itemId: string) => {
    props.onRemoveTodo(itemId);
  };

  return (
    <ul className={classes.todos}>
      {props.items.map((todoModel) => (
        <TodoItem
          id={todoModel.id}
          value={todoModel.value}
          onRemoveTodoItem={onRemoveTodoItemHandler}
        />
      ))}
    </ul>
  );
};

export default Todos;
