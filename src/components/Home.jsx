import React from 'react'
import Header from './common/Header'
import Footer from './common/Footer'
import Carousel from './Carousel'
import Contact from './common/Contact'
import Navbar from './common/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar/>     
      <Carousel/>
      <Contact/>
      <Footer/>     
    </div>
  )
}

export default Home