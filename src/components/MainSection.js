import React from 'react';
import Header from "./Header";

const MainSection = ({children}) => {
  return (
    <div className={'main-section-wrapper'}>
      <Header/>
      <div className="main-section">
        {children}
      </div>
    </div>
  );
};

export default MainSection;