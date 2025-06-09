import { useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList';
import type { Todo } from './types/Todo';
import { v4 as uuid } from 'uuid';
import './App.css';

function App() {
  const [todos,setTodos] = useState<Todo[]>(() => {
    const storedTodos = localStorage.getItem("todos");

    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  const addTodo = (text: string) => {

    const newTodo: Todo = {
      id: uuid(),
      text,
      completed: false
    }
    console.log(newTodo);
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }

  const deleteTodo = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);  // 삭제할 때의 공식(정석), 삭제할 id를 제외한 나머지 id를 가지고 있는 요소를 가져옴
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }

  const toggleComplete = (id: string) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,);
    
    console.log("업데이트 전 todos:", todos);
    console.log("업데이트 후 todos:", updatedTodos);

    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }

  return (
    <>
      <h1>Todo List</h1>
      <TodoForm onAddTodo={addTodo}></TodoForm>
      <TodoList todos={todos} onDeleteTodo={deleteTodo} onToggleComplete={toggleComplete}></TodoList>
    </>
  )
}

export default App;
