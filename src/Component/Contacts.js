import React, {Component} from 'react';
import "../Style/Contacts.css"

class Contacts extends Component{
    render(){
        return(
            <div id="container"> 
                <h1>Contactanos</h1>
                <div>
                    <h4>Nombre</h4>
                    <input className="text" type="text"></input>    
                </div>
                <div>
                    <h4>Correo</h4>
                    <input className="text" type="text"></input>
                </div>
                
                
            </div>
        )
    }
}

export default Contacts;
