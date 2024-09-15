import * as t from "./actionTypes"
import axios from "axios";

export const getData = () => async dispatch => {
  try {
    const json = await axios.get("tableData.json");
    dispatch({
      type: t.GET_DATA_SUCCESS,
      payload: json.data,
    });
    dispatch(filterData())
  } catch (e) {
    dispatch({
      type: t.GET_DATA_FAIL,
      payload: [],
    });
  }

}

export const sortData = (col, dir) => async dispatch => {
  dispatch({
    type: t.SORT_DATA,
    payload: {col: col, dir: dir},
  });

}

export const updateData = (id, col, new_data) => async dispatch => {
  dispatch({
    type: t.UPDATE_DATA,
    payload: {id: id, col: col, new_data: new_data},
  });

}

export const filterData = (filters) => async dispatch => {
  dispatch({
    type: t.FILTER_DATA,
    payload: filters,
  });

}

export const handleFilters = (data, reset) => async dispatch => {
  if (reset) {
    dispatch({
      type: t.FILTERS_RESET,
    })
  } else {
    dispatch({
      type: t.FILTERS_SET,
      payload: data,
    })
  }


}
