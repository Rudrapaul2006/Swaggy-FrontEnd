import React from 'react'
import Header from './Components/Header'
import Content from './Components/Content'
import { Route, Routes } from 'react-router-dom'
import ResturentMenuDetails from './Components/ResturentMenuDetails'



const App = () => {
  return (
    <>
      <div className="flex flex-col mt-10">

        <Routes>
          <Route path="/" element={<Header />}>

            <Route index element={<Content/>} />
            <Route path="/resturentMenuDetails/:id" element={<ResturentMenuDetails />} />

          </Route>
        </Routes>

      </div>
    </>
  )
}

export default App
