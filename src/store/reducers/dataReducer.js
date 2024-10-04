import * as t from "../actions/actionTypes"

const initialState = {
  table_data: [],
  filtered_data: [],
  filters: {
    item: '',
    code: '',
    art: '',
    size: '',
  }
  ,
  sort_data: {
    col: '',
    dir: '',
  },
}

const dataReducer = (state = initialState, action) => {
  const {type, payload} = action

  const sortHandler = (data, {col, dir}) => {

    if (col) {
      return [...data].sort((a, b) => {
        if (a[col] === null) return 1;
        if (b[col] === null) return -1;
        if (a[col] === null && b[col] === null) return 0;
        return (
          a[col].toString().localeCompare(b[col].toString(), "ru", {
            numeric: true,
          }) * (dir === "asc" ? 1 : -1)
        );
      });
    }
  };

  const updateHandler = (data, {id, col, new_data}) => {
    const newState = [...data]
    return newState.map(item => {
      if (item.id === id) {
        return {...item, [col]: Number(new_data)}
      } else {
        return item
      }
    })
  }

  const updateFilterHandler = (data, {id, col, new_data}) => {
    const newState = [...data]
    return newState.map(item => {
      if (item.id === id) {
        return {...item, [col]: Number(new_data)}
      } else {
        return item
      }
    })
  }

  const filterHandler = (filters) => {
    let arr = [...state.table_data]
    let arr2 = []
    let iter = 0
    for (const key in filters) {
      if (!filters[key]) {
        continue
      }
      if (iter === 0) {
        arr2 = arr.filter(i => i[key] === filters[key])
      } else if (arr2.length) {
        arr2 = arr2.filter(i => i[key] === filters[key])
      }
      iter += 1
    }
    if (iter === 0) {
      return arr
    } else {
      return arr2
    }
  }

  const filtersHandler = (data, {key, value}) => {
    let newData = {...data}
    Object.defineProperty(newData, key, {
      value: value,
    });
    return newData
  }

  switch (type) {
    case t.GET_DATA_SUCCESS:
      return {
        ...state,
        table_data: payload,
        filtered_data: payload,
        filters: {
          item: '',
          code: '',
          art: '',
          size: '',
        },
        sort_data: {
          col: '',
          dir: '',
        },
      }

    case t.SORT_DATA:
      return {
        ...state,
        filtered_data: sortHandler(state.filtered_data, payload),
        sort_data: payload,
      }

    case t.UPDATE_DATA:
      return {
        ...state,
        table_data: updateHandler(state.table_data, payload),
        filtered_data: updateFilterHandler(state.filtered_data, payload)
      }

    case t.FILTER_DATA:
      return {
        ...state,
        filtered_data: filterHandler(payload)
      }

    case t.FILTERS_SET:
      return {
        ...state,
        filters: filtersHandler(state.filters, payload),
      }

    case t.FILTERS_RESET:
      return {
        ...state,
        filtered_data: state.table_data,
        filters: {
          item: '',
          code: '',
          art: '',
          size: '',
        },
        sort_data: {
          col: '',
          dir: '',
        },
      }

    default:
      return state
  }
}

export default dataReducer
