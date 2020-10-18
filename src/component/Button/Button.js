import React from "react";
import PropTypes from "prop-types";
import "./Button.scss";

const Button = (props) => {
  const handleClick = (e) => {
    props.emitEvent();
  };

  return (
    <button data-test="button" onClick={handleClick}>
      {props.text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  emitEvent: PropTypes.func,
};

export default Button;
