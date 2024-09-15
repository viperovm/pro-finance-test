import React from 'react';
import {secondaryMenu} from "../../data";
import SecondaryMenuItem from "./SecondaryMenuItem";

const LowerMenu = () => {
  return (
    <div className={'menu-body'}>
      <div className="secondary-menu-wrapper">
        <div className="secondary-menu-header-section">
          Техническая поддержка
        </div>
        <div className="secondary-menu-contact-section">
          <div>
            <div className="name">Номер поддержки:</div>
            <div className="value">8 (999) 999 99 99</div>
          </div>
          <div>
            <div className="name">Почта поддержки:</div>
            <div className="value">pf1@werthesest.ru</div>
          </div>
          <div>
            <div className="name">Часы работы:</div>
            <div className="value">Пн - Пт   с 9:00 до 19:00 мск</div>
          </div>
        </div>
        <div className="secondary-menu-links-section">
          {secondaryMenu.map((item, index) => <SecondaryMenuItem key={index} data={item}/>)}
        </div>

      </div>
    </div>
  );
};

export default LowerMenu;