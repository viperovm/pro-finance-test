import React from 'react';
import contact from '../../assets/img/contact.svg'

const ContactUs = () => {
  return (
    <div className={'contact-body'}>
      <img src={contact} alt="contact"/>
      Связаться с нами
    </div>
  );
};

export default ContactUs;