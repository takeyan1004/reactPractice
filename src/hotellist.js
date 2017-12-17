import React from 'react';
// import ReactDOM from 'react-dom';

import './hotellist.css';
import {Hotelinfo} from './hotelinfo';
import {Form} from './form';

// import App from './App';
// import './todo.js';
// import registerServiceWorker from './registerServiceWorker';

export class Hotellist extends React.Component {

    constructor() {
    super();

    	this.state = {
      	// showComments: false,
      		hotels: [{name: "Hilton", body: "Hilton offers great service", id: "2012"},
            	    {name: "Marriot", body: "Marriot is the biggest hotel chain", id: "30"},
                	{name: "Palace hotel", body: "Palace hotel is the Japanese hotel chain", id: "7"}]
	    };
  	}

    render() {
  		const hotels = this._getHotels() || [];
    	return(<div>
      <h2>Hotel Info.</h2>
    	<Form addHotel={this._addHotel.bind(this)} />
    	{this._getEnoughInfo(hotels.length)}
    	<h4 className="hotel-count">Number of hotels: {hotels.length}</h4>
    	<div className="hotel-list">{hotels}</div>

    	</div>)
  	}

	_getHotels(){
    	
    	return this.state.hotels.map((hotel) => {
      	
      	return (<Hotelinfo
               name={hotel.name}
               body={hotel.body}
               id={hotel.id}
               onDelete={this._deleteHotel.bind(this)}
                />);

    	});

	}

	_getEnoughInfo(hotelCount){
		const enoughHotel = 10;
		if(hotelCount > enoughHotel){
			return (<div>Great work! You are an expert of hotel industry</div>);
		}

	}	

    _addHotel(hotelName, hotelInfo, hotelPhoto) {
 	    let hotel = {
        //id: Math.floor(Math.random() * (9999 - this.state.hotels.length + 1)) + this.state.hotels.length,
        //The tutorial shows the above code, but I think the below code is enough to create unique id.
        id: Math.floor(Math.random() * 9999 ) + this.state.hotels.length,
        name: hotelName,
        body: hotelInfo,
    };

    	this.setState({
      		hotels: this.state.hotels.concat([hotel])
    	});
    }

    _deleteHotel(hotelID) {
    	if (!hotelID) {
      		return;
    	}
    
    	const hotels = this.state.hotels.filter(
      		hotel => hotel.id !== hotelID
    	);
    
	    this.setState({ hotels });
  	} 

}



//I just added hotellogo.jpg into src folder. I will add the hotel logo into each post. →　image doesn't show up
//And, I will separate hotellist.js file into each component(Hotellist component, Form component, Hotelinfo component).
//Tried to use Bootstrap but was stuck on FormGroup

