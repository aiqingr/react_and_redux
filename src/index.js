import React from 'react';
import ReactDOM from 'react-dom';


const API_KEY = 'AIzaSyDbSmJZAm2wlqkbjo2wUkqblAfelP1GFww';
// Create a mew component. This component should produce
// some HTML
const App = () => {
  return <div>Hi!</div>;
}
// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
