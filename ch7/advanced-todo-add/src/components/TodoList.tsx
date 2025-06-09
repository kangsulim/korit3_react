import type { Todo } from "../types/Todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  onToggleComplete: (id: string) => void;
  onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = (props: TodoListProps) => {
  const { todos, onDeleteTodo, onToggleComplete } = props;

  return(
    <>
      <ul>
        {todos.length === 0 ? (
          <p> no task </p>
        ) : (
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDeleteTodo={onDeleteTodo}
              onToggleComplete={onToggleComplete} 
              />
            // <li key={todo.id}> {todo.text} </li>
          ))
        )}
      </ul>
    </>
  )
}

export default TodoList;