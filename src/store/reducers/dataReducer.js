import * as t from "../actions/actionTypes"

const initialState = {
  table_data: [],
  filtered_data: [],
  filters: [
    {item: ''},
    {code: ''},
    {art: ''},
    {size: ''},
  ],
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
    let data

    if (filters && filters[0] && filters[0].item) {
      const val = filters[0].item
      let filteredItems = [...state.table_data.filter(o => o.item === val)]
      if (filteredItems.length) {
        data = filteredItems
      } else {
        data = []
      }
    } else {
      data = [...state.table_data]
    }
    if (data?.length > 0 && data?.length < state.table_data.length) {
      if (filters && filters[1] && filters[1].code) {
        const val = filters[1].code
        let filteredCode = [...state.table_data.filter(o => o.code === val)]
        const intersection = data.filter(obj1 =>
          filteredCode.some(obj2 => obj1.id === obj2.id)
        );
        if (intersection.length) {
          data = intersection
        } else {
          data = []
        }
      }
    } else if (data?.length === state.table_data.length) {
      if (filters && filters[1] && filters[1].code) {
        const val = filters[1].code
        let filteredCode = [...state.table_data.filter(o => o.code === val)]
        if (filteredCode.length) {
          data = filteredCode
        } else {
          data = []
        }
      } else {
        data = [...state.table_data]
      }
    }
    if (data?.length > 0 && data?.length < state.table_data.length) {
      if (filters && filters[2] && filters[2].art) {
        const val = filters[2].art
        let filteredArt = [...state.table_data.filter(o => o.art === val)]
        const intersection = data.filter(obj1 =>
          filteredArt.some(obj2 => obj1.id === obj2.id)
        );
        if (intersection.length) {
          data = intersection
        } else {
          data = []
        }
      }
    } else if (data?.length === state.table_data.length) {
      if (filters && filters[2] && filters[2].art) {
        const val = filters[2].art
        let filteredArt = [...state.table_data.filter(o => o.art === val)]
        if (filteredArt.length) {
          data = filteredArt
        } else {
          data = []
        }
      } else {
        data = [...state.table_data]
      }
    }
    if (data?.length > 0 && data?.length < state.table_data.length) {
      if (filters && filters[3] && filters[3].size) {
        const val = filters[3].size
        let filteredSize = [...state.table_data.filter(o => o.size === val)]
        const intersection = data.filter(obj1 =>
          filteredSize.some(obj2 => obj1.id === obj2.id)
        );
        if (intersection.length) {
          data = intersection
        } else {
          data = []
        }
      }
    } else if (data?.length === state.table_data.length) {
      if (filters && filters[3] && filters[3].size) {
        const val = filters[3].size
        let filteredSize = [...state.table_data.filter(o => o.size === val)]
        if (filteredSize.length) {
          data = filteredSize
        } else {
          data = []
        }
      } else {
        data = [...state.table_data]
      }
    }
    return data

  }

  const filtersHandler = (data, {key, value}) => {
    return [...data.map(i => {
      if (Object.keys(i)[0] === key) {
        return {[key]: value}
      } else {
        return i
      }
    })]
  }

  switch (type) {
    case t.GET_DATA_SUCCESS:
      return {
        ...state,
        table_data: payload,
        filtered_data: payload,
        filters: [
          {item: ''},
          {code: ''},
          {art: ''},
          {size: ''},
        ],
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
        filters: [
          {item: ''},
          {code: ''},
          {art: ''},
          {size: ''},
        ],
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
