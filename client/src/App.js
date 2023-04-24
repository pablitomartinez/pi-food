import './App.css';
import {Details, Form, Home, Landing } from './views'
import {Route, useLocation} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Form2 from './views/Form/Form2';


function App() {
  const location = useLocation();
  
  return (
    <div className="App">

      { location.pathname !== '/' && <Navbar/> }
      <Route exact path={'/'} component={Landing} />
      
      <Route exact path={'/home'} component={Home}/>

      <Route exact path={'/details/:id'} component={Details}/>
      
      <Route exact path={'/create'} component={Form}/>

      <Route exact path={'/create2'} component={Form2}/>


    </div>
  );
}

export default App;

// component SIN PROPS
// render --> funcion con el componente  CON PROPS
    //  render = {()=> <Componente/>}
