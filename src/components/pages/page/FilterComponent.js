import React from 'react';
import Button from "../../Button";
import exp from '../../../assets/img/export.svg'
import TextInput from "../../inputs/TextInput";
import SelectInput from "../../inputs/SelectInput";
import {useDispatch, useSelector} from "react-redux";
import {filterOptions, russianHeaders} from "../../../data";
import {downloadCSVHandler} from "../../../helpers";
import {DataAction} from "../../../store/actions/actions";

const FilterComponent = () => {

  const dispatch = useDispatch()

  const {table_data, filters} = useSelector(state => state.data)

  const saveHandler = () => {
    let columnHeaders = Object.keys(table_data[0])
    downloadCSVHandler(table_data, columnHeaders, russianHeaders)
  }

  const filterHandler = () => {
    dispatch(DataAction.filterData(filters))
  }

  const inputHandler = (newData) => {
    dispatch(DataAction.handleFilters(newData, false))
  }

  return (
    <div className={'filter-wrapper'}>

      <div className="filter-inputs">
        <TextInput
          label={'Баркод'}
          name={'code'}
          placeholder={'5643242134323'}
          action={inputHandler}
        />
        <TextInput
          label={'Артикул'}
          name={'art'}
          placeholder={'Кардиган'}
          action={inputHandler}
        />
        <TextInput
          label={'Размер'}
          name={'size'}
          placeholder={'44'}
          action={inputHandler}
        />
        <SelectInput
          label={'Категория'}
          name={'item'}
          value={filters}
          action={inputHandler}
          options={filterOptions}
        />
      </div>

      <div className="filter-buttons">
        <Button className={'filter-button'} action={filterHandler}>
          Сформировать
        </Button>
        <Button className={'export-button'} action={saveHandler}>
          <img src={exp} alt="export"/>
          Экспорт
        </Button>
      </div>

    </div>
  );
};

export default FilterComponent;