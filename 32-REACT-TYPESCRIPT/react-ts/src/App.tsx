import './App.css';
import Todos from './components/Todos';
import Todo from './model/todo';

function App() {
  const todosList = [new Todo('Learn React'), new Todo('Learn Typescript')];
  return <div>{<Todos items={todosList} />}</div>;
}

export default App;
