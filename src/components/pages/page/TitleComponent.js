import React from 'react';
import Button from "../../Button";
import manual from "../../../assets/img/manual.svg";

const TitleComponent = () => {
  return (
    <div className="title-wrapper">
      <h1>Остатки сформированы на 01.04.2023 г.</h1>
      <Button
        className={'title-button'}
        action={() => {
        }}
      >
        <img src={manual} alt="manual"/>
        Инструкции
      </Button>
    </div>
  );
};

export default TitleComponent;