import React, {useEffect, useState} from "react";
import TableCell from "./TableCell";
import {getSum} from "../../helpers";

const TableBody = ({data, columns}) => {

  const [cl, setCl] = useState('')

  useEffect(() => {
    if (data) {
      if (data.length % 2 === 0) {
        setCl('dark')
      } else {
        setCl('')
      }
    }
  }, [data])


  return (
    <tbody>
    {data?.map((data, i) => {
      return (
        <tr key={data.id} className={(i === 0 || i % 2 === 0) ? 'dark' : ''}>
          {columns.map(({accessor}) => {
            const tData = data[accessor] ? data[accessor] : "—";
            return <TableCell key={accessor} id={data.id} col={accessor} data={tData}
                              editable={accessor === 'available' || accessor === 'goods_on_the_way' || accessor === 'total_goods'}/>
          })}
        </tr>
      );
    })}
    <tr className={`total ${cl}`}>
      <td colSpan="4">
        Итого:
      </td>
      <td className={'total'}>{getSum(data,'available')}</td>
      <td className={'total'}>{getSum(data,'goods_on_the_way')}</td>
      <td className={'total'}>{getSum(data,'total_goods')}</td>
    </tr>
    </tbody>
  );
};

export default TableBody;