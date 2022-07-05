import React from "react";
import { TDO } from "../Types/data";

interface Todolist {
  todos: TDO[]
}

const TodoList: React.FC<Todolist> = ({ todos }) => {
  return (
    <section>
      <ul>
        {todos.map((data) => {
          return <li key={data.id}>{data.title}</li>;
        })}
      </ul>
    </section>
  );
};

export default TodoList;
