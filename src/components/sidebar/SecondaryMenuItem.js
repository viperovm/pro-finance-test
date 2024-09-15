import React from 'react';

const SecondaryMenuItem = ({data}) => {
  return (
    <div className="secondary-menu-link">{data.name}</div>
  );
};

export default SecondaryMenuItem;