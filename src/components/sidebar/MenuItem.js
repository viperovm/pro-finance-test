import React from 'react';
import arrow from '../../assets/img/menu-arrow.svg'

const MenuItem = ({data}) => {

  return (
    <div className="main-menu-item">
      <div>
        <img className={'icon'} src={data.icon} alt="icon"/>
        {data.name}
      </div>
      <img src={arrow} alt="arrow"/>
    </div>
  );
};

export default MenuItem;