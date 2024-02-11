// RenderCount.js

// Define a component to render the count dynamically
export function renderCount(state) {
    return {
        type: 'h3',
        content: `Count: ${state.getState().count}` // Function to dynamically render the count
    };
}
