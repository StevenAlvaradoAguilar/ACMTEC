//URL de enlace con la API
const api_url='https://api.waqi.info/feed/alajuela/?token=591d7525307e717783e92ad72dc27b739e278ff0';

//Funcion para obtener datos de la API
async function getData(){
  const response = await fetch(api_url)
  const database= await response.json();
  const{data}=database;
  console.log(database)
  console.log(data.city)
  document.getElementById('loc').textContent = data.city.name
  document.getElementById('aq').textContent = data.aqi
}
getData();
