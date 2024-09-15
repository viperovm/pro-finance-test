import React, {useEffect, useRef, useState} from 'react';
import {useSelector} from "react-redux";

const TextInput = ({name, label, placeholder, action}) => {


  const {filters} = useSelector(state => state.data)

  const [width, setWidth] = useState(0);
  const [value, setValue] = useState('');

  const span = useRef();

  useEffect(() => {
    filters.filter(el => {
      if(Object.keys(el)[0] === name) {
        setValue(el[name])
      }
    })
  }, [filters]);

  useEffect(() => {
    setWidth(span.current.offsetWidth)
  }, [value]);

  const changeHandler = evt => {
    action({
      key: name,
      value: evt.target.value
    })
  };

  return (
    <div className={'input-element text'}>
      <div className="input-name">
        {label}
      </div>
      <div className={'input-wrapper'}>
        <span ref={span}>{value ? value : placeholder}</span>
        <input
          type="text"
          style={{width}}
          value={value}
          placeholder={placeholder}
          onChange={changeHandler}/>
      </div>

    </div>
  );
};

export default TextInput;