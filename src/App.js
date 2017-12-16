import React, { Component } from 'react';
import './App.css';
import {Hotellist} from './hotellist';

class App extends Component {
  render() {
    return (
    <div className="App">
      <div className="hotel-list">
        <Hotellist />
      </div>
    </div> 
    );
  }
}


export default App;


