import React from "react";
import PropTypes from "prop-types";

import Button from "./button/Button";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  return (
    //me-return isi komponen header (section header)
    <section className="header">
      <Button
        text={showAdd ? `Finish` : `Add`}
        onClick={showAddToggle}
        color="black"
        align="left"
      />
      <h1 className="header-title">Todo Lists</h1>
      <Button text="Clear" onClick={clearTodos} color="red" align="right" />
    </section>
  );
};

Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};

export default Header;
