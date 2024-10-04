import React, {useEffect, useRef, useState} from 'react';
import arrow from '../../assets/img/select-arrow.svg'
import useOnClickOutside from "../../hooks/useOnClickOutside";
import {useSelector} from "react-redux";

const SelectInput = ({name, label, action, options=[]}) => {

  const {filters} = useSelector(state => state.data)

  const [value, setValue] = useState('');
  const [opened, setOpened] = useState(false)

  useEffect(() => {
    setValue(filters[name])
  }, [filters])

  const selectCardRef = useRef()

  useOnClickOutside(selectCardRef,() => setOpened(false))

  const selectHandler = (data) => {
    action({
      key: name,
      value: data
    })
    setOpened(false)
  }

  return (
    <div  ref={selectCardRef} className={'input-element select'}>
      <div className="select-name">
        {label}
      </div>
      <div className={'select-value'} onClick={() => setOpened(v => !v)}>
        {value ? value : 'Выберите значение'}
        <img className={opened ? 'rotate' : ''} src={arrow} alt="arrow"/>
      </div>
      <div className={`select-options-card${opened ? ' opened' : ''}`}>
        <ul>
          {options?.map((item, index) => <li key={index} onClick={() => selectHandler(item.value)}>{item.value}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default SelectInput;