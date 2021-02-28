import React, { useState } from "react";

import Paper from "../components/Paper";
import Header from "../components/Header";
import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos";

const TodoList = () => {
  //state todos
  const [todos, setTodos] = useState([
    { text: `Belajar1` },
    { text: `Belajar2` },
    { text: `Belajar3` }
  ]);

  //state showAdd
  const [showAdd, setShowAdd] = useState(false);

  const addTodo = (value) => {
    const addedTodo = [...todos, { text: value }];

    setTodos(addedTodo);
  };

  const showAddToggle = () => setShowAdd(!showAdd);

  return (
    <Paper>
      <Header showAddToggle={showAddToggle} showAdd={showAdd} />

      <TodoForm addTodo={addTodo} showAdd={showAdd} />

      <Todos todos={todos} />
    </Paper>
  );
};

export default TodoList;
