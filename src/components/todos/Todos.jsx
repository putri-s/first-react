import React from "react";
import Todo from "../todo/Todo";
import PropTypes from "prop-types";

import styles from "./todos.module.css";

const Todos = ({ todos, completeTodo }) => {
  return (
    <section className={styles.todos}>
      {/* jika ada todo, return todo */}
      {todos.length > 0 &&
        todos.map((todo, index) => {
          return (
            <Todo
              key={index}
              text={todo.text}
              isCompleted={todo.isCompleted}
              completeTodo={completeTodo}
              index={index}
            />
          );
        })}

      {/* jika tidak ada todo, return placeholder */}
      {todos.length === 0 && (
        <div className={styles.todoPlaceholderText}>
          Please add a todo by clicking the{" "}
          <span className={styles.addButtonPlaceholder}>"ADD"</span> button.
        </div>
      )}
    </section>
  );
};

Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string
    })
  ),
  completeTodo: PropTypes.func.isRequired
};

export default Todos;
