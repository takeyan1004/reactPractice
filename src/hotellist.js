import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import './todo.js';
// import registerServiceWorker from './registerServiceWorker';

export class Hotellist extends React.Component {

    constructor() {
    super();

    	this.state = {
      	// showComments: false,
      		hotels: [{name: "Hilton", body: "Hilton offers great service", id: "2012"}, 
            	    {name: "Marriot", body: "Marriot is the biggest hotel chains", id: "30"}, 
                	{name: "Palace hotel", body: "Palace hotel is the Japanese hotel chain", id: "7"}]
	    };
  	}

    render() {
  		const hotels = this._getHotels() || [];
    	return(<div>

    	<Form addHotel={this._addHotel.bind(this)} />
    	<h2>Hotel Info.</h2>
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

    _addHotel(hotelName, hotelInfo) {
 	    let hotel = {
        //id: Math.floor(Math.random() * (9999 - this.state.hotels.length + 1)) + this.state.hotels.length,
        //The tutorial shows the above code, but I think the below code is enough to create unique id.
        id: Math.floor(Math.random() * 9999 ) + this.state.hotels.length,

        name: hotelName,
        body: hotelInfo
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


class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: 0
    };
  }

  render() {
    return (
      <form className="hotel-form" onSubmit={this._handleSubmit.bind(this)}>

        <div className="hotel-form-fields">
          <input placeholder="Hotel Name:" ref={input => this._name = input} />
          <textarea placeholder="Hotel Info:" ref={textarea => this._body = textarea} onChange={this._getCharacterCount.bind(this)}></textarea>
        </div>
        <p>{this.state.characters} characters</p>
        <div className="hotel-form-actions">
          <button type="submit">
            Post Hotel info.
          </button>
        </div>
      </form>
    );
  }

  _getCharacterCount(e) {
    this.setState({
      characters: this._body.value.length
    });
  }
  
  _handleSubmit(event) {
    event.preventDefault();

    if (!this._name.value || !this._body.value) {
      alert('Please enter hotel name and info.');
      return;
    }

    this.props.addHotel(this._name.value, this._body.value);
    
    this._name.value = '';
    this._body.value = '';
    this.setState({characters: 0});
  }
}


class Hotelinfo extends React.Component {
  render() {
    return(
      <div className="hotel-info">
        
        <h3 className="hotel-header">{this.props.name}</h3>
        <p className="hotel-body">
          {this.props.body}
        </p>

        <div>Hotel ID: {this.props.id}</div>

        <div className="hotel-actions">
          <a href="#" onClick={this._handleDelete.bind(this)}>Delete hotels</a>
        </div>

      </div>
    );
  }


 _handleDelete(event) {
    event.preventDefault();
    this.props.onDelete(this.props.id);
  }

}

