import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  name, clickHandler, bgColor, wide,
}) => {
  const handleClick = event => clickHandler(event.target.innerText);
  return (
    <button
      className="button"
      style={
        {
          backgroundColor: bgColor,
          width: wide ? '50%' : '25%',
        }
      }
      type="button"
      onClick={handleClick}
    >
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  bgColor: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  bgColor: '#e0e0e0',
  wide: false,
};

export default Button;
