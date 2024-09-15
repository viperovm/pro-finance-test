import React from 'react';
import user from '../assets/img/user.svg'
import calendar from '../assets/img/calendar.svg'
import arrow from '../assets/img/arrow.svg'
import Button from "./Button";

const Header = () => {
  return (
    <div className={'header'}>
      <div className="header-elements big-gap">
        <div className="header-user">
          <img src={user} alt="user"/>
          <div className="header-user__text">
            Иванов И.И.
          </div>
        </div>
        <div className="header-date">
          <img src={calendar} alt="calendar"/>
          <div className="header-date__text">
            Тариф до 15.04.2024
          </div>
        </div>
      </div>
      <div className="header-elements small-gap">
        <Button
          className={'header-button exit'}
          action={()=>{}}
        >
          Выйти
        </Button>
        <Button
          className={'header-button next'}
          action={()=>{}}
        >
          О нас
          <img src={arrow} alt="arrow"/>
        </Button>
      </div>
    </div>
  );
};

export default Header;