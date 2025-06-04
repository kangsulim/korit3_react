import { useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList';
import type { Todo } from './types/Todo';
import { v4 as uuid } from 'uuid';

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
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }

  const toggleComplete = (id: string) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );
    console.log("업데이트 전 todos:", todos);
    console.log("업데이트 후 todos:", updatedTodos);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  return (
    <>
      <TodoForm onAddTodo={addTodo}></TodoForm>
      <TodoList todos={todos} onDeleteTodo={deleteTodo} onToggleComplete={toggleComplete}></TodoList>
    </>
  )
}

export default App;
