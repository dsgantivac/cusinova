import React, { Component } from 'react';
import '../Style/Images.css';

import * as firebase from 'firebase';


firebase.initializeApp({
  apiKey: "AIzaSyAplpzsfIuSTbBGvMeRElQAyWkbEe0h290",
  authDomain: "cusinova-cd9a1.firebaseapp.com",
  databaseURL: "https://cusinova-cd9a1.firebaseio.com",
  projectId: "cusinova-cd9a1",
  storageBucket: "gs://cusinova-cd9a1.appspot.com",
  messagingSenderId: "325435496693"
});

const storage = firebase.storage().ref();
class Products extends Component{

  constructor(){
    super()
    this.state = {
      nombre: "",
      url: "",
      names: []  
    }
    
  }

  getImage (image) {
    storage.child(`${image}.jpeg`).getDownloadURL().then((url) => {
      this.state[image] = url;
      this.setState(this.state);
    })

    storage.child(`${image}.jpg`).getDownloadURL().then((url) => {
      this.state[image] = url;
      this.setState(this.state);
    })

    storage.child(`${image}.png`).getDownloadURL().then((url) => {
      this.state[image] = url;
      this.setState(this.state);
    })

  }

  componentWillMount(){
    const productsRef = firebase.database().ref().child('products')
    productsRef.on('value',(snapshot) =>{
      this.setState({
        names: snapshot.val()
      })
      for (let index = 0; index < snapshot.val().length; index++) {
        let name = console.log(snapshot.val()[index]);
        name = snapshot.val()[index]
        this.setState({name: this.getImage(name)}) 
      }
    })

  }

  render(){
    let rows = [];
    this.state.names.map(name =>
      rows.push( <img src={ this.state[name] } className="products" alt={name} />) 
    );
     
    return(
      <div>    
        
        {rows}
        
      </div>
    );
  }
}


export default Products;

