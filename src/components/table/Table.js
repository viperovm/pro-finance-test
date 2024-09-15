import React from 'react';
import TableHead from "./TableHead";
import TableBody from "./TableBody";

const Table = ({ data, columns }) => {

  return (
    <>
      <table className="table">
        <TableHead columns={columns}/>
        <TableBody {...{ columns, data }} />
      </table>
    </>
  );
};

export default Table;