/*
My mini project called Astronauts
I get the data about Astronauts from API
Date: 9.3.2020.
Author: Sejfudin
*/

import React, { Component } from 'react';
import Astronauts from './components/Astronauts';

// import css file
import './App.css';

class App extends Component {
  
  // State
   state= {
     people:[],
     number: null
    }
    
   //Fetching data from API
 componentDidMount() {
fetch('http://api.open-notify.org/astros.json')
.then(res => res.json())
.then(json => {
  //this.setState will change the State
this.setState ({
  people: json.people, 
  number: json.number
})
});
 }
 // With data and number atributes we send data from the State to Astronaut component
  render (){
    return (
    
    <div className="App">
      <header className="App-header">
      <div >
        <h3 className= "title"> Wellcome to the Space </h3>
        <Astronauts data= {this.state.people} number={this.state.number}/>
       
        </div>
      </header>
    </div>
  );
}
}

export default App;