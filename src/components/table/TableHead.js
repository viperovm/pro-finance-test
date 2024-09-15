import React, {useEffect, useState} from "react";
import arrow from '../../assets/img/sort-arrow.svg'
import arrowGrey from '../../assets/img/sort-arrow-grey.svg'
import {useDispatch, useSelector} from "react-redux";
import {DataAction} from "../../store/actions/actions";

const TableHead = ({ columns }) => {
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");

  const { sort_data } = useSelector(state => state.data)

  const dispatch = useDispatch()

  useEffect(() => {
    setSortField(sort_data.col)
    setOrder(sort_data.dir)
  }, [sort_data])

  const handleClick = (accessor) => {
    const sortOrder =
      accessor === sortField && order === "asc" ? "desc" : "asc";
    dispatch(DataAction.sortData(accessor, sortOrder))
  }

  return (
    <thead>
      <tr>
        {columns?.map(({ label, accessor, sortable }) => {
          const cl = sortable
            ? sortField === accessor && order === "asc"
              ? "up"
              : sortField === accessor && order === "desc"
              ? "down"
              : "default"
            : "";
          return (
            <th
              key={accessor}
              onClick={sortable ? () => handleClick(accessor) : null}
              className={cl}
            >
              {label} <img src={
                sortField === accessor && order === "asc"
              ? arrow
              : sortField === accessor && order === "desc"
              ? arrow
              : arrowGrey
            } alt="sort arrow"/>
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHead;