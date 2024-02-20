// index.js

import { render } from './Upkaran.js';
import { App, routes } from './App.js';
import { router } from './Route.js'; // Import the route handling function

// Get the root element
const rootElement = document.getElementById('root');

// Initial rendering
render(rootElement, App());

// Example router initialization
const r = router(routes);

// Append router element to entry
document.body.appendChild(r.element);

// Listen for route changes and refresh only when there's a change
function handleHashChange() {
    const newHash = window.location.hash.substring(1);
    console.log("Hash Changed:", newHash);
    r.refresh();
}

// Initial route based on the current URL
console.log("Initial Route:", window.location.hash.substring(1));
r.refresh();

// Event listener for hash changes
window.addEventListener('hashchange', handleHashChange);

// Set up an interval to check for changes
// setInterval(handleHashChange, 300);

//update the dom
function RenderRepeat(){
    render(rootElement, App());
    handleHashChange();
}

setInterval(RenderRepeat,300);
