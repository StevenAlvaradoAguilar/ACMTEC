import React from 'react'
import Header from './common/Header'
import Footer from './common/Footer'
import Carousel from './Carousel'
import Cards from './Cards'
import Banner from './Banner'

const Home = () => {
  return (
    <div>
      <Header/>     
      <Carousel/>
      <Cards/>
      <Banner/>
      <Footer/>     
    </div>
  )
}

export default Home