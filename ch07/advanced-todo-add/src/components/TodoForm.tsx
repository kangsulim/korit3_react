import { type ChangeEvent, useState } from "react"

interface TodoFormProps {
  onAddTodo: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = (props: TodoFormProps) => {
  const { onAddTodo } = props;

  const [ text, setText ] = useState<string>("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      console.log(text);
      onAddTodo(text);
      setText("");
    }
  };

  const handleOnchange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  return(
    <>
      <form onSubmit={handleSubmit} aria-label="Add new Task">
        <input type="text"value={text} onChange={handleOnchange} placeholder="add Task" aria-label="add Task" />
        <button type="submit"> add Task</button>
      </form>
    </>
  )
}

export default TodoForm;