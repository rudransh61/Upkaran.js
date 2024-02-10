
// Render DOM
export function Render(root, component) {
    for (const element of component) { // Traverse the component array
        // Create a new DOM element
        const newElement = document.createElement(element.type);

        if (element.content) {
            // Check if the content is another component object
            if (typeof element.content === 'object') {
                // If so, recursively render the nested component
                Render(newElement, element.content);
            } else {
                newElement.innerHTML = element.content; // Set inner HTML if content is a string
            }
        }

        if (element.attr) { // Check if attributes exist
            for (const attr in element.attr) {
                if (attr === 'children') continue;
                newElement.setAttribute(attr, element.attr[attr]); // Set attributes
            }
        }

        root.appendChild(newElement); // Add the new element to the DOM
    }
}
