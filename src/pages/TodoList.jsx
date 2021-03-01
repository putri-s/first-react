import React, { useState } from "react";

import Paper from "../components/Paper";
import Header from "../components/Header";
import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos";

const TodoList = () => {
  //state todos = u/ menyimpan data dari tiap todo
  //ketika sebuah todo disubmit, setTodos akan ter-trigger
  const [todos, setTodos] = useState([
    //todo ke-1 sampai todo ke-3
    { text: `Belajar1`, isCompleted: false },
    { text: `Belajar2`, isCompleted: false },
    { text: `Belajar3`, isCompleted: false }
  ]);

  //state showAdd = u/ menampilkan/menyembunyikan ADD toggle button
  const [showAdd, setShowAdd] = useState(false);

  //function u/ menambahkan value yang ditulis di form-
  const addTodo = (value) => {
    //-dengan cara membuat addedTodo yang merupakan array baru
    //addedTodo berisi exiisting array + array baru hasil value input-an.
    if (todos.length < 10) {
      const addedTodo = [...todos, { text: value, isCompleted: false }];

      //ketika sebuah todo disubmit, setTodos akan ter-trigger
      //kemudian meng-update addedTodo ke todos
      setTodos(addedTodo);
    } else {
      alert(`Only 10 Todos are allowed`);
    }
  };

  //func u/ mentrigger perubahan dari properti isCompleted
  const completeTodo = (index) => {
    const addedTodo = [...todos];
    //me-negasi nilai di properti isCompleted pada todo tujuan
    addedTodo[index].isCompleted = !addedTodo[index].isCompleted;

    //masukkan addedTodo baru ke dalam setTodos
    setTodos(addedTodo);
  };

  //func u/ clear Todos
  const clearTodos = () => !showAdd && setTodos([]);

  //function u/ mengubah nilai ADD toggle button ketika diklik
  const showAddToggle = () => setShowAdd(!showAdd);

  return (
    <Paper>
      <Header
        showAddToggle={showAddToggle}
        showAdd={showAdd}
        clearTodos={clearTodos}
      />

      <TodoForm addTodo={addTodo} showAdd={showAdd} />

      <Todos todos={todos} completeTodo={completeTodo} />
    </Paper>
  );
};

export default TodoList;
