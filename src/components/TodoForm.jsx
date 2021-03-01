import React, { useState } from "react";
import PropTypes from "prop-types";

const TodoForm = ({ addTodo, showAdd }) => {
  //state value = u/ menangkap "apapun" yang diinput di form
  const [value, setValue] = useState(``);

  //function untuk menghandle onSubmit di dalam form
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      alert("You can not input a blank to do.");
      return;
    }

    if (value.length > 40) {
      alert(`Maximum 40 characters only`);
      setValue(``);
      return;
    }

    //addTodo akan menerima "apapun" dari state value yg akan dikirim keluar dari TodoForm.
    //addTodo merupakan props berisi func
    //yg akan didelegasikan dari luar TodoForm ke dalam TodoForm untuk diproses
    //yg akan mengembalikan sebuah value yg akan diproses oleh pemilik func addTodo (TodoList)
    addTodo(value);
    setValue(``);
  };

  if (showAdd) {
    return (
      <section className="add">
        <form className="add-form" onSubmit={handleFormSubmit}>
          <input
            type="text"
            className="add-input"
            //isi value dinamis
            value={value}
            // onChange menerima aksi setValue yg akan mem-passing "apapun yg diketik" ke dlm value
            onChange={(e) => setValue(e.target.value)}
          ></input>
          <button className="add-btn black-color">Add</button>
        </form>
      </section>
    );
  } else {
    return null;
  }
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired
};

export default TodoForm;
