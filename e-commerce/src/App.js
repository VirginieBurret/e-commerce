
import {useState} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header/';
import Navlinks from './Components/Header/NavLinks';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Checkout from './Components/Checkout';
import './App.css';

const App = () => {

  const [home, setHome] = useState(false)
  return (
    <div className="App">
      
      <Switch>
        <Route exact path="/">
           <Header/> 
         
           <Home/>
           <Footer/>
        </Route>
        <Route path="/checkout">
          <Header/>
          <Checkout/> 
        </Route>
        <Route path="/login" component={Login} /> 
        
        
      </Switch> 
      
    </div>
  );
}

export default App;
