import React from 'react'
import Carrusel from '../navigates/Carrusel'

import { useTranslation } from "react-i18next";

const Home = () => {
  return (
    <div className='home'>
      <Carrusel />   
    </div>
  )
}

export default Home