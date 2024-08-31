import './App.css';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import Inicio from './Componentes/Inicio'
import Destinos from './Componentes/Destinos'
import Tour from './Componentes/Tour'
import Nosotros from './Componentes/Nosotros'
import Contactanos from './Componentes/Contactanos'
import Sesion from './Componentes/InicioSesion'

function App() {
  
  let rutas = useRoutes([
    {path: "/", element: <Inicio/>},
    {path: "/destinos", element: <Destinos/>},
    {path: "/tour", element: <Tour/>},
    {path: "/nosotros", element: <Nosotros/>},
    {path: "/contactanos", element: <Contactanos/>},
    {path: "/sesion", element: <Sesion/>}
  ]);
  return rutas;
}

export default App;
