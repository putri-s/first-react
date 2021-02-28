import React, { useState } from "react";
import PropTypes from "prop-types";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  //untuk menghandle onSubmit di dalam form
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      alert("You can not input a blank to do.");
      return;
    }

    addTodo(value);
    alert(value);
    setValue("");
  };

  return (
    <section className="add">
      <form className="add-form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          className="add-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <button className="add-btn black-color">Add</button>
      </form>
    </section>
  );
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default TodoForm;
