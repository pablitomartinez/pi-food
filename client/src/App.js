import './App.css';
import {Details, Form, Home, Landing } from './views'
import {Route, useLocation} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';


function App() {
  const location = useLocation();
  
  return (
    <div className="App">

      { location.pathname !== '/' && <Navbar/> }
      <Route exact path={'/'} component={Landing} />
      
      <Route exact path={'/home'} component={Home}/>

      <Route exact path={'/details'} component={Details}/>
      
      <Route exact path={'/create'} component={Form}/>

    </div>
  );
}

export default App;

// component SIN PROPS
// render --> funcion con el componente  CON PROPS
    //  render = {()=> <Componente/>}
