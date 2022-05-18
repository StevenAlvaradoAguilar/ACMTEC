import React, { useEffect, useState } from "react";

function Monitoring(){
    const [data,setdata]= useState([]) 
    const [url,setUrl] = useState('')
    const [isloaded, setLoaded] = useState(false)
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
                default:
                    return "No se encontro información"
            }
        }catch(error){
            return "No se encontro información"
        }
    }
    const fetchData = async () => {
        try{
            const response = await fetch(url)
            const database= await response.json();
            setdata(database.data)
            return data
        }catch(error){
            return 0
    }
    }  
    useEffect(() => {

        fetchData()
    },[fetchData] 
    )
    return(
        <div className="monitoring">
            <button onClick={() => setUrl('https://api.waqi.info/feed/Alajuela/?token=591d7525307e717783e92ad72dc27b739e278ff0')}>Hacer request</button>
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
        </div>
    );
}
export default Monitoring;