import React from "react";
import PropTypes from "prop-types";

const Header = ({ showAddToggle, showAdd }) => {
  return (
    //me-return isi komponen header (section header)
    <section className="header">
      <button className="header-btn black-color" onClick={showAddToggle}>
        {showAdd ? `Finish` : `Add`}
      </button>
      <h1 className="header-title">Todo Lists</h1>
      <button className="header-btn red-color">Clear</button>
    </section>
  );
};

Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired
};

export default Header;
