import React, { useEffect } from "react";
import Header from './Header'
import Footer from './Footer'
import Banner from '../Banner'
import Contact from './Contact'
import Rankings from './Rankings'
import ScrollToTop from '../ScrollToTop'
import scrollreveal from "scrollreveal";
import Cards from "../Cards";

const Information = () => {

  // Delay de los componentes
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    sr.reveal(
      `
        /Rankings,
        `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);
  return (
    <div>
      <ScrollToTop />
      <Header/>     
      <Banner/>
      <Cards/>
      <Rankings/>
      <Contact/>
      <Footer/>  
    </div>
  )
}

export default Information