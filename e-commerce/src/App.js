
import {useState, useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header/';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Checkout from './Components/Checkout';
import Payment from './Components/Checkout/Payment';
import {auth} from './Config/firebase';
import {useStateValue} from './Contextes/stateprovider';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import './App.css';

// stripe public key inside
const stripePromise = loadStripe('pk_test_51Imc6qFWDa1pRXQrEzFKdLBrYnsPiA51i2zzs93k64k357pGO77EaSY9OQ43BFmBM5WlZZVVlGoWbxpchatppr6U00EbBkdJtz');

const App = () => {
const [{},dispatch] = useStateValue()

  //create a listener 
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
        <Route path="/login" component={Login} /> 

        <Route path="/checkout">
          <Header/>
          <Checkout/> 
        </Route>
   
        <Route path="/payment">
        <Header/> 
        <Elements stripe={stripePromise}> <Payment/> </Elements>
       
        </Route>
        
        
      </Switch> 
      
    </div>
  );
}

export default App;
