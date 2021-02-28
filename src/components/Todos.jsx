import React from "react";
import Todo from "./Todo";

const Todos = () => {
  const todos = [
    { text: "List Pertama" },
    { text: "List Kedua" },
    { text: "List Ketiga" },
    { text: "List Keempat" }
  ];

  return (
    <section className="todos">
      {todos.map((todo) => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

export default Todos;
