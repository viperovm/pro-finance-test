import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Page from "../pages/Page"

const MasterRoute = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={`/`}
          element={<Page />}
        />
      </Routes>
    </BrowserRouter>
  )
}
export default MasterRoute
