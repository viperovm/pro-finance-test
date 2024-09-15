import React from 'react';
import download from '../../../assets/img/download.svg'
import upload from '../../../assets/img/upload.svg'
import close from '../../../assets/img/close.svg'
import {useDispatch} from "react-redux";
import {DataAction} from "../../../store/actions/actions";

const DataComponent = () => {

  const dispatch = useDispatch()

  return (
    <div className="data-wrapper">
      <div className="download-buttons">
        <div className="button" onClick={() => dispatch(DataAction.getData())}>
          <img src={download} alt=""/>
          <div>Загрузить данные из csv</div>
        </div>
        <div className="button">
          <img src={upload} alt=""/>
          <div>Изменить данные</div>
        </div>
      </div>
      <div className="clear-button">
        <div className="button" onClick={() => dispatch(DataAction.handleFilters(null,true))}>
          <div>Очистить</div>
          <img src={close} alt=""/>
        </div>
      </div>
    </div>
  );
};

export default DataComponent;