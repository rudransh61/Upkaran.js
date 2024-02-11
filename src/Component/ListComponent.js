// ListComponent.js

// Define a component for rendering a list
export function ListComponent(items) {
    // Function to render the list items
    const renderListItems = () => {
        return items.map((item, index) => ({
            type: 'li',
            content: item,
            attr: {
                key: index // Assign a unique key to each list item
            }
        }));
    };

    return {
        type: 'ul',
        content: renderListItems() // Render the list items dynamically
    };
}
