import React from 'react';
import UpperMenu from "./UpperMenu";
import LowerMenu from "./LowerMenu";
import ContactUs from "./ContactUs";

const Sidebar = () => {
  return (
    <div className={'menu-wrapper'}>
      <UpperMenu/>
      <LowerMenu/>
      <ContactUs/>
    </div>
  );
};

export default Sidebar;