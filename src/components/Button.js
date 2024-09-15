import React from 'react';

const Button = ({action, className, children}) => {
  return (
    <div className={`button ${className}`} onClick={action}>
      {children}
    </div>
  );
};

export default Button;