import React, { Component } from 'react';
//import logo from '../Images/logo.svg';
import logo from '../Images/Logos/logo_blanco.jpeg'; 
import '../Style/App.css';
import NavBar from './NavBar';
import Products from './Products';
import Contacts from './Contacts';
import Explanation from './Explanation';




class App extends Component {
  render() {
    
    //<img src={logo} className="App-logo" alt="logo" />
    return (
      
      <div className="App">
        <NavBar />
        <Contacts/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className = "Title" >
            Nuestros productos
          </p>
          <Products/>

          <p className = "Title" >
            Por que realmente lo creemos.
          </p>
          < Explanation />
          
          <p className = "Title" >
            Quienes han creido en nosotros.
          </p>
          


        </header>
      </div>
    );
  }
}

export default App;
