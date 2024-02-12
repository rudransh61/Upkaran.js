// index.js

import { render } from './Upkaran.js';
import { App } from './App.js';

// Get the root element
const rootElement = document.getElementById('root');

// Render the App component
render(rootElement, App());

//Repeat Render
function RepeatRender (){
    render(rootElement, App());
}

//Repeat it
setInterval(RepeatRender, 1000);

 
