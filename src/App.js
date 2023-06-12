import React from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body';
import Login from './components/Login';

function App() {
  return (
   <div>
    <Header/>
    {/* <Login/> */}
    <Body/>
    <Footer/>
  </div>
  );
}

export default App;
