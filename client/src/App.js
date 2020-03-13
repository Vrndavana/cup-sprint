import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Players from './components/Players';
// import Navbar from './components/Navbar';
// import { response } from 'express';




class App extends React.Component{
  constructor(){
    super();
     this.state = {
       players: []
     };
  }

  componentDidMount(){
  axios
  .get('http://localhost:5000/api/players')
  .then( response => {console.log(response) 
    this.setState({players:response.data})}) 
  .catch( error => {console.log('This broken', error)})
}



  render () {
  return (
    <div className="App">
        <Players players={this.state.players}/>
    </div>
  );
  }
}

export default App;
