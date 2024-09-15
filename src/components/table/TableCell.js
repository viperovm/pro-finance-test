import React, {useEffect, useRef, useState} from 'react';
import useOnClickOutside from "../../hooks/useOnClickOutside";
import {useDispatch} from "react-redux";
import {DataAction} from "../../store/actions/actions";

const TableCell = ({id, col, data, editable=false}) => {

  const [active, setActive] = useState(false)
  const [newData, setNewData] = useState(data)

  const dispatch = useDispatch()

  const ref = useRef()

  useOnClickOutside(ref, () => updateHandler())

  useEffect(() => {
        if(active) {
          ref.current.focus();
        }
    }, [ref, active]);

  const clickHandler = () => {
    if(editable) {
      setActive(true)
    }
  }

  const updateHandler = () => {
    dispatch(DataAction.updateData(id, col, newData))
    setActive(false)
  }

  const changeHandler = (e) => {
    setNewData(e.target.value)
  }

  return (
    <td onDoubleClick={clickHandler}>
      {active
        ?
        <input type="number" ref={ref} onInput={changeHandler} value={newData}/>
        :
        <div>{data}</div>
      }

    </td>
  );
};

export default TableCell;