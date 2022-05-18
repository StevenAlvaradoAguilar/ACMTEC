import React,{useState} from "react"; 
import './PaginaPrincipal.css'
import Barra from "./Componentes/Barra";
import Monitoring from "./Paginas/Monitoring"
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Tiempo from "./Paginas/Tiempo";
import Consejos from "./Paginas/Consejos";
import Info from "./Paginas/Info";
import About from "./Paginas/About";
import PaginaPrincipal from "./Paginas/PaginaPrincipal";

function Rutas(){


  return(
<Router>
  <div className="PaginaPrincipal"> 
        <Barra/>
        <Routes>
          <Route path="/" element= {<PaginaPrincipal/>}>
            
          </Route>
          <Route path="/monitoring" element = {<Monitoring />}>
            
          </Route>
          <Route path="/consejos" element = {<Consejos />}>
            
          </Route>
          <Route path="/tiempo"  element = {<Tiempo />}>
          </Route>
          <Route path="/info"element = {<Info />}>
          </Route>
          <Route path="/about" element = {<About />}>
          </Route>
        </Routes>
      </div>
</Router>
  );
}
 
export default Rutas;

