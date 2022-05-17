import './App.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Importar componentes 
import Navbar from "./components/navigates/Navbar";
import Home from "./components/pages/Home";
import Information from "./components/pages/Information";
import Monitoring from "./components/pages/Monitoring"
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";


function App() {
  // Nos devuelve un objeto con el atributo T de translate
  const { t } = useTranslation()
  return (
    <div className="App">
        
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/information' component={Information} />
            <Route path='/monitoring' component={Monitoring} />
            <Route path='/about' component={About} />
            <Route component={NotFound} />
          </Switch>
        </Router>

        {
          t('TEST')
        }
    </div>
  );
}

export default App;