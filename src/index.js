import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import registerServiceWorker from './registerServiceWorker';

//Before rendering, we need to import components

//this file connects html file and react component(ex. App.js). we will use ReactDOM.render(<Component name/ >, html)
ReactDOM.render(<App />, document.getElementById('root'));


registerServiceWorker();
