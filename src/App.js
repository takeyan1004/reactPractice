import React, { Component } from 'react';
import './App.css';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import {Hotellist} from './component/hotellist';


export class App extends Component {
  render() {
    return (

	<Row className="show-grid">
      <Col xs={6} md={4}></Col>
      <Col xs={6} md={4}>
	<div className="App">
      <div className="hotel-list">
        <Hotellist />
      </div>
    </div> 
      </Col>
      <Col xsHidden md={4}></Col>
	</Row>

    );
  }
}




