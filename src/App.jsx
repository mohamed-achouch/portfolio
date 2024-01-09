import React from 'react'
import Header from './components/Header/Header'
import Nav from './components/Nav'
import About from './components/About'
import  Experience from './components/Experience'
import Services from './components/Services'
import Portfoilio from './components/Portfoilio'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
const App = () => {
  return (
      <>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Services/>
        <Portfoilio/>
        <Testimonials/>
        <Contact/>
        <Footer/>
      </>
  )
}
export default App;