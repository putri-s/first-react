import React from "react";

const Header = () => {
  return (
    //me-return isi komponen header (section header)
    <section className="header">
      <button className="header-btn black-color">Add</button>
      <h1 className="header-title">Todo Lists</h1>
      <button className="header-btn red-color">Clear</button>
    </section>
  );
};

export default Header;
