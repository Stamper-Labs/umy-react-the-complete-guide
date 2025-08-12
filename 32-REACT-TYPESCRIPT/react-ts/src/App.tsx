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
  return (
    <div>
      <NewTodo onAddTodo={onAddTodoHandler} />
      <Todos items={todosList} />
    </div>
  );
}

export default App;
