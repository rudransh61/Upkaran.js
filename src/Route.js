// Route.js
import { createElement, render } from "./Upkaran.js"; // Import createElement and render from Upkaran.js

export function router(routes) {
    const rootElement = document.getElementById('root');

    function navigateTo(path) {
        if (routes[path]) {
            rootElement.innerHTML = '';
            const components = routes[path]();
            const element = createElement(components);
            render(element, rootElement);
        } else {
            console.error("Route not found:", path);
        }
    }

    // Initial route based on the current URL
    console.log("Initial Route:", window.location.hash.substring(1));
    navigateTo(window.location.hash.substring(1));

    // Event listener for hash changes
    window.addEventListener('hashchange', () => {
        const newHash = window.location.hash.substring(1);
        console.log("Hash Changed:", newHash);
        navigateTo(newHash);
    });

    // Function to refresh the current route
    function refresh() {
        navigateTo(window.location.hash.substring(1));
    }

    return {
        refresh,
        element: rootElement,
    };
}
