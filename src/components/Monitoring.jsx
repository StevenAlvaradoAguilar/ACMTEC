import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Footer from "./common/Footer";
import Header from "./common/Header";
import Navbar from "./common/Navbar";
import { TiZoomOutline} from "react-icons/ti";
import { useTranslation } from "react-i18next";

function Monitoring(){
    const [data,setdata]= useState([]) 
    const [url,setUrl] = useState('')
    const [texto, setTexto] = useState("")
    const getInputValue = (event)=>{
        setTexto(event.target.value)
    };
    function pluck(prop){
        try{ 
            switch(prop) {
                
                case 1:               // Nombre de la ciudad
                    return data.city.name;
                case 2:                 // localización de la ciudad
                    return data.city.geo
                case 3:                // url de la página
                    return data.city.url
                case 4:                 //calidad del aire
                    return data.aqi
                case 5:                 //temperatura
                    return data.iaqi.t.v
                default:
                    return "No se encontro información"
            }
        }catch(error){
            return "No se encontro información"
        }
    }
    const fetchData = async () => {
        try{
            setUrl('https://api.waqi.info/feed/' + texto +"/?token=591d7525307e717783e92ad72dc27b739e278ff0")
            const response = await fetch(url)
            const database= await response.json();
            setdata(database.data)
            console.log(data)
            return data
        }catch(error){
            return 0
    }
    }  
    useEffect(() => {

        fetchData()
    }
    )
    return(
        <div className="monitoring">
            <Navbar/>
            <button style={{background: "gray"} }><TiZoomOutline/></button>
                <input type="text" placeholder="Escriba la ciudad que desea buscar" onChange={getInputValue} />                       
            <button onClick={() => setUrl({texto})}>Hacer request</button>
            <h1 className="prueba"> 
                Ciudad de origen: <br></br>
                {pluck(1)}
            </h1>
            <h1 className="prueba">
                Coordenadas de la ciudad <br></br>
                {pluck(2)}
            </h1>
            <h1 className="prueba">        
                Link a la página: <br></br>
                {pluck(3)}
            </h1>
            <h1 className="prueba">
                Calidad del aire: <br></br>
                {pluck(4)}
            </h1>
            <h1 className="prueba">
                Temperatura: <br></br>
                {pluck(5)}
            </h1>

            <Container>
                Aqui va el mapa
            </Container>

            <Footer/>
        </div>
    );
}
export default Monitoring;