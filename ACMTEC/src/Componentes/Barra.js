import React,{useState} from "react"; 
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import logo from "./images/Logo.png";
import monitoring from "./images/monitoring.png"
import news from "./images/newspaper-folded.png"
import therm from "./images/thermometer.png"
import air from "./images/air-pollution.png"
import info from "./images/information.png"
import {Link} from "react-router-dom"
import { Button } from "@material-ui/core";
function Barra(){
  function changeColorOnEnter(e) {
    e.target.style.color = 'lightblue';
  }
  function changeColorOnExit(e){
    e.target.style.color = 'white';
  }
    return(    
<>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossOrigin="anonymous"
/>
<Navbar className="barra-principal" variant="light" style={{ background: '#403756', padding: 10 }}>
      <Container className="containerNavbar" >
      <Link to="/" style={{marginLeft:"-10%"}}>
         <Navbar.Brand >
              <Button >
                <img src={logo} width= "200px" length = "150px"/>
              </Button>
        </Navbar.Brand>
      </Link>
        <img src={monitoring} width= "50px" length = "50px" marginLeft= "100"style={{marginLeft:"-15%"}}/>
        <Link to="/monitoring" style={{marginLeft:"-15%", textDecoration:"none"}}>
         <Navbar.Brand
            style={{ padding: 5, fontSize: 15 ,color:"white",fontWeight:"bold"}} 
            onMouseEnter={changeColorOnEnter}
            onMouseLeave = {changeColorOnExit}
            >
              Monitoreo de <br></br> polución del aire
              </Navbar.Brand>
          </Link>
          <img src={therm} width= "50px" length = "50px" marginLeft= "100"style={{marginLeft:"-15%"}}/>
          <Link to="/tiempo"style={{marginLeft:"-15%", textDecoration:"none"}}>
         <Navbar.Brand
            style={{ padding: 5, fontSize: 15 ,color:"white",marginLeft:"-15%",fontWeight:"bold"}}
            onMouseEnter={changeColorOnEnter}
            onMouseLeave = {changeColorOnExit}>
              Tiempo<br></br>Atmosférico</Navbar.Brand>
          </Link>
              <img src={news} width= "50px" length = "50px" marginLeft= "100"style={{marginLeft:"-15%"}}/>
        <Link to="/info" style={{marginLeft:"-15%", textDecoration:"none"}}>
         <Navbar.Brand
            style={{ padding: 5, fontSize: 15 ,color:"white",marginLeft:"-15%",fontWeight:"bold"}}
            onMouseEnter={changeColorOnEnter}
            onMouseLeave = {changeColorOnExit}>
              Noticias e <br></br>información</Navbar.Brand>
              </Link>
          <img src={air} width= "50px" length = "50px" marginLeft= "100"style={{marginLeft:"-15%"}}/>
         <Link to="/consejos" style={{marginLeft:"-15%", textDecoration:"none"}}>
         <Navbar.Brand 
            style={{ padding: 5, fontSize: 15 ,color:"white",marginLeft:"-15%",fontWeight:"bold"}}
            onMouseEnter={changeColorOnEnter}
            onMouseLeave = {changeColorOnExit}>
              Consejos <br></br>y medidas
         </Navbar.Brand>
         </Link>
         <Link to="/about" style={{marginRight:"-15%", textDecoration:"none"}}>
         <Navbar.Brand

            style={{  padding: 5, fontSize: 15 ,color:"white",marginRight:"-15%",fontWeight:"bold",}}
            onMouseEnter={changeColorOnEnter}
            onMouseLeave = {changeColorOnExit}>
              Acerca <br></br>de
        </Navbar.Brand>
        </Link>
              <img src={info} width= "50px" length = "50px" marginLeft= "100"style={{marginRight:"-10%"}}/>
      </Container>
</Navbar>

      </>

    );
}
export default Barra;