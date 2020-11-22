
import React from 'react';
import Header from './components/Header';
import Info from './components/Info';
import Account from './components/Account';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (            
      <main>            
          <Header/>
          <Info/>
          <Account/>
          <Footer/>       
      </main>        
  )
}

export default App;
