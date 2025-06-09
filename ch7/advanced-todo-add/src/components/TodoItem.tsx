import type { Todo } from "../types/Todo";

interface TodoItemProps {
  todo: Todo;
  onToggleComplete: (id: string) => void;
  onDeleteTodo: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = (props: TodoItemProps) => {

  const {todo, onToggleComplete, onDeleteTodo} = props;


  return(
    <>
      <li>
        <span onClick={() => onToggleComplete(todo.id)} style={{ cursor: 'pointer' }}>
          {todo.text}
        </span>
        <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
        </li>
    </>
  )
}

export default TodoItem;