import React from 'react'
import MainLayout from "../layouts/MainLayout"
import TitleComponent from "../components/pages/page/TitleComponent"
import FilterComponent from "../components/pages/page/FilterComponent"
import DataComponent from "../components/pages/page/DataComponent"
import TableComponent from "../components/pages/page/TableComponent"

const Page = () => {

  return (
    <MainLayout>
      <TitleComponent/>
      <FilterComponent/>
      <DataComponent/>
      <TableComponent/>
    </MainLayout>
  )
}

export default Page