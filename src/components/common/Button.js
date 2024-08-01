import React from 'react';
//import '.common'; // Import the CSS file for styling

const Button = ({ children, onClick }) => {
  return (
    <button className="custom-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
