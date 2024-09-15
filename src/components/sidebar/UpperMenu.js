import React from 'react';
import close from '../../assets/img/close-menu.svg'
import MenuItem from "./MenuItem";
import {mainMenu} from "../../data";

const UpperMenu = () => {
  return (
    <div className={'menu-body'}>
      <div className="main-menu-header-wrapper">
        <div className="main-menu-header">
          <div className="main-menu-header-blue">
            ФИН
          </div>
          <div>Контроль</div>
        </div>
        <div className="main-menu-header-button">
          Меню
          <img src={close} alt="close"/>
        </div>
      </div>
      <div className="main-menu-items">
        {mainMenu.map((item,index) => <MenuItem key={index} data={item}/>)}
      </div>

      
    </div>
  );
};

export default UpperMenu;