import React from 'react';
// import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
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

{/*   no bootstrap version
        <div className="hotel-form-fields">
        <div className="name-form"><input className="name-input" placeholder="Hotel Name:" ref={input => this._name = input} /></div>
        <div className="text-form"><textarea className="text-input" placeholder="Hotel Info:" ref={textarea => this._body = textarea} onChange={this._getCharacterCount.bind(this)}></textarea></div>  
        </div>
        <p>{this.state.characters} characters</p>
        <div className="hotel-form-actions"><Button bsStyle="primary" type="submit">Post Hotel Info.</Button></div> */}

{/* in order to get the value from inputform, we need to use inputRef instead of ref. below is the bootstrap version */}

        <FormGroup className="name-form">
          <FormControl className="name-input" type="text" placeholder="Hotel Name:" inputRef={input => this._name = input}/>
        </FormGroup>
        <FormGroup className="text-form" bsSize="large">
          <FormControl className="text-input" type="text" placeholder="Hotel Info:" inputRef={input => this._body = input} onChange={this._getCharacterCount.bind(this)}/>
        </FormGroup>
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