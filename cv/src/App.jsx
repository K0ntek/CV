import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import Header from './components/header'
import About from './components/about'
import Experience from './components/experience'
import Navbar from './components/navbar'
import Footer from './components/footer'

function App() {

  return (
    <>
      <Navbar/>
      <Header />
      <About/>
      <Experience/>
      <Footer/>
    </>
  )
}

export default App