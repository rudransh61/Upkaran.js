// Route.js
import { render } from "./Upkaran.js";

// Define routes and corresponding components
export const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
];

// Define your components for each route
function Home() {
    return {
        type: "div",
        content: "Home Page",
    };
}

function About() {
    return {
        type: "div",
        content: "About Page",
    };
}

function Contact() {
    return {
        type: "div",
        content: "Contact Page",
    };
}

// Function to render based on route
export function renderRoute(route) {
    const component = route.component();
    render(document.getElementById('root'), component);
}

// Function to navigate to a specific route
export function navigateTo(path) {
    const route = routes.find(route => route.path === path);
    if (route) {
        window.history.pushState({}, '', path);
        renderRoute(route);
    } else {
        console.error("Route not found:", path);
    }
}

// Function to handle popstate event
window.onpopstate = () => {
    const path = window.location.pathname;
    navigateTo(path);
};

// Initial render
const initialRoute = routes.find(route => route.path === '/');
if (initialRoute) {
    renderRoute(initialRoute);
} else {
    console.error("Initial route not found: /");
}
