import { ChangeEvent, KeyboardEvent, useId, useState } from "react";

interface ToDo {
  id: string;
  task: string;
}

export default function ToDo() {
  const [todos, setTodos] = useState<ToDo[]>([]);
  const [input, setInput] = useState<string>("");
  const id = useId();

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      handleAdd();
      setInput("");
    }
  }

  function handleAdd() {
    setTodos([...todos, { id: id, task: input }]);
  }

  console.log(todos);

  return (
    <div>
      <h1>Todos</h1>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      ></input>
      <ul>
        {todos.map((todo) => (
          <label>
            <input
              type="checkbox"
              value={todo.id}
            />
            {todo.task}
          </label>
        ))}
      </ul>
    </div>
  );
}
