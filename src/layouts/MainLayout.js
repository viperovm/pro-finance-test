import React from 'react'
import Sidebar from "../components/sidebar/Sidebar"
import MainSection from "../components/MainSection"

const MainLayout = ({children}) => {
  return (
    <div className={'main-layout'}>
      <Sidebar/>
      <MainSection>
        {children}
      </MainSection>
    </div>
  )
}

export default MainLayout