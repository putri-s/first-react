import React from "react";
import PropTypes from "prop-types";

import cx from "classnames";

import styles from "./button.module.css";

const Button = ({ text, onClick, color, align }) => {
  // const classNames = [
  //   `header-btn`,
  //   color === `black` && `black-color`,
  //   color === `red` && `red-color`,
  //   align === `left` && `align-left`,
  //   align === `right` && `align-right`
  // ].join(" ");

  //membuat classNames dengan library u/ menggantikan syntax di atas
  const classNames = cx(styles.headerBtn, {
    [styles.blackColor]: color === `black`,
    [styles.redColor]: color === `red`,
    [styles.alignLeft]: align === `left`,
    [styles.alignRight]: align === `right`
  });

  return (
    <button className={classNames} onClick={onClick}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: `Button`,
  color: `black`,
  align: `center`
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.oneOf([`black`, `red`]),
  align: PropTypes.oneOf([`left`, `right`])
};

export default Button;
