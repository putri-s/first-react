import React from "react";
import PropTypes from "prop-types";

const Paper = ({ children }) => {
  return (
    <div className="container">
      <div className="frame">{children}</div>
    </div>
  );
};

// Defenisikan type dari prop children
// props children bisa berisi react elemen sebanyak satu atau lebih dari satu.
// method oneOfType = 2 kemungkinan tipe

//namaKomponen.propTypes
Paper.propTypes = {
  //namaProp: PropTypes.onOfType //oneOfType merupakan tipe props nya
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node), //kemungkinan 1 (berisi lebih dari 1 react elemen)
    PropTypes.node //kemungkinan dua (berisi 1 react elemen)
  ])
};

export default Paper;
