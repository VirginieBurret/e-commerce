
import {useState, useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header/';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Checkout from './Components/Checkout';
import {auth} from './Config/firebase';
import {useStateValue} from './Contextes/stateprovider';
import './App.css';

const App = () => {
const [{},dispatch] = useStateValue()

  //we create a listener 
  useEffect(() => {
   auth.onAuthStateChanged(authUser => {
     console.log('THE USER IS ', authUser);
     if(authUser){ // if there is a user logged in
       dispatch({
         type: 'SET_USER',
         user:authUser // on envoie le user avec l'action
       })
     }else{
       //user logged out
       dispatch({
       type:'SET_USER',
       user:null // if user logged out we dispatch the action set user and set the user => null
     })
    }
   })
  }, [])// will only run once when the app component loads
  // va se lancer au login, au logout... it's like an observer, a listener
  //whenever an authentification changes, it will give us the authentificate user
  
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
