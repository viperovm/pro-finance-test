import React from 'react';
import Table from "../../table/Table"
import {useSelector} from "react-redux";
import {columns} from "../../../data";

const TableComponent = () => {

  const { filtered_data } = useSelector(state => state.data)

  return (
    <div className="table-wrapper">
      {filtered_data?.length
        ?
        <Table
        data={filtered_data}
        columns={columns}
      />
      :
        <div className={'empty-table'}>
          <h2>Отсутствует информация</h2>
        <p>Загрузите ее, или измените параметры поиска</p>
        </div>
      }

    </div>
  );
};

export default TableComponent;