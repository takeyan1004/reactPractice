import React from 'react';
// import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
// import './hotellist.css';


export class Form extends React.Component {
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
        <div className="name-form"><input className="name-input" placeholder="Hotel Name:" ref={input => this._name = input} /></div>
        <div className="text-form"><textarea className="text-input" placeholder="Hotel Info:" ref={textarea => this._body = textarea} onChange={this._getCharacterCount.bind(this)}></textarea></div>  
        </div>
        <p>{this.state.characters} characters</p>
        <div className="hotel-form-actions"><Button bsStyle="primary" type="submit">Post Hotel Info.</Button></div>

      </form>

    );
  }

  _getCharacterCount() {
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

    this.props.addHotel(this._name.value, this._body.value, this.props.photo);
    
    this._name.value = '';
    this._body.value = '';
    this.setState({characters: 0});
  }
}