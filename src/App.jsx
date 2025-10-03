import React from 'react'
import Header from './Components/Header'
import Content from './Components/Content'
import Footer from './Components/Footer'
// import { Route, Routes } from 'react-router-dom'
// import ResturentMenuDetails from './Components/ResturentMenuDetails'



const App = () => {
  return (
    <>
      <div className="flex flex-col mt-10">

        <Header/>
        <Content/>
        <Footer/>

      </div>
    </>
  )
}

export default App
