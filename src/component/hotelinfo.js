import React from 'react';
// import ReactDOM from 'react-dom';
import { Panel } from 'react-bootstrap';


export class Hotelinfo extends React.Component {
  render() {
    return(
      <div className="hotel-info">

{/* 

Here is the html code for the below Panel component

<h3 className="hotel-header">{this.props.name}</h3>
        <p className="hotel-body">{this.props.body}</p>
        <div>Hotel ID: {this.props.id}</div>
        <div className="hotel-actions"><a href="#" onClick={this._handleDelete.bind(this)}>Delete hotels</a></div>

*/}

    <Panel header={this.props.name} bsStyle="info">
      {this.props.body}
      <div>Hotel ID: {this.props.id}</div>
      <div className="hotel-actions"><a href="#" onClick={this._handleDelete.bind(this)}>Delete hotels</a></div>
    </Panel>

      </div>
    );
  }

 _handleDelete(event) {
    event.preventDefault();
    this.props.onDelete(this.props.id);
  }

}