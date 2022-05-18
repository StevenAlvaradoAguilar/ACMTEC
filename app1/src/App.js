import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Importar componentes 
import './Home.css'
import Barra from "./components/navigates/Barra";
import Navbar from "./components/navigates/Navbar";
import Home from "./components/pages/Home";
import Information from "./components/pages/Information";
import Monitoring from "./components/pages/Monitoring";
import About from "./components/pages/About";
import Tiempo from "./components/pages/Tiempo";
import Consejos from "./components/pages/Consejos";


function App() {
  // Nos devuelve un objeto con el atributo T de translate
  const { t } = useTranslation()
  return (
    <div className="Home">
        
        <Router>
          <Barra />
          <Routes>
            <Route path='/' exact component={Home} />
            <Route path='/information' component={Information} />
            <Route path='/monitoring' component={Monitoring} />
            <Route path='/tiempo' component={Tiempo} />
            <Route path='/consejos' component={Consejos} />
            <Route path='/about' component={About} />
          </Routes>
        </Router>

        {
          t('TEST')
        }
    </div>
  );
}

export default App;
