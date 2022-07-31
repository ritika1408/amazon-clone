import React , {useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment'
import {auth} from './firebase';
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './Orders';
import Footer from './Footer';

const promise= loadStripe(
   'pk_test_51LPg5ESG5pMf6w17hH6VHOYjQK41ni8emdRag2rTGQzGaLbejMO9TJhcASmi7iSWDRL1D7RjjtXguisXx1UIxbRB00FTvUmFhh');

function App() {
   const [{}, dispatch]= useStateValue();

   useEffect(()=>{
      //loads the component only once
      auth.onAuthStateChanged(authUser =>{
         console.log("The user is >>>", authUser);
         if(authUser){
            //just logged in or was logged in and dispatches the user email in the data layer
            dispatch({
               type:'SET_USER',
               user: authUser 
            })

         }
         else{
            //logged out
            dispatch({
               type: 'SET_USER',
               user: null
            })
         }
      })

   },[]);
  return (    
  <Router>
   <div className="app">
  
   <Switch> 
   <Route exact path="/orders">
      <Header/>
      <Orders />

   </Route>
   <Route exact path="/login">
      <Login/>
   </Route>
   <Route exact path="/checkout">
      <Header/>
      <Checkout/>
   </Route>
   <Route exact path="/payment">
      <Header/>
      <Elements stripe={promise}>
      <Payment/>
      </Elements>
      
      
   </Route>
   <Route exact path="/">
      <Header/>
      <Home/>
      <Footer/>
   </Route>
   </Switch>
      
   </div>
   </Router>
  );
}

export default App;
