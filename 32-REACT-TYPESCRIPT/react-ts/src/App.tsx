import './App.css';
import Todos from './components/Todos';
import Todo from './model/todo.model';
import NewTodo from './components/NewTodo';
import { useState } from 'react';

function App() {
  const [todosList, setTodos] = useState<Todo[]>([]);

  const onAddTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const onRemoveTodoHandler = (todoId: string) => {
    console.log('from onRemoveTodoHandler');
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  return (
    <div>
      <NewTodo onAddTodo={onAddTodoHandler} />
      <Todos items={todosList} onRemoveTodo={onRemoveTodoHandler} />
    </div>
  );
}

export default App;
