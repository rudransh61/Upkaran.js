App.js

import { createState } from './Upkaran.js';
import { renderCount } from './Component/RenderCount.js';

// Define a component that uses state
export function App() {
    // Create reactive state
    const state = createState({ count: 0 });

    const IncreaseCount = () => {
        // Update state on button click
        const currentState = state.getState();
        state.setState({ count: currentState.count + 1 });
        console.log(state.getState().count);
    };
     // Subscribe to state changes
     state.subscribe(() => {
        // Call renderCount function to get updated count value and re-render the component
        App();
    });

    return {
        type: 'div',
        content: [
            // Use a function to dynamically render the count based on the state
            {
                type: 'h1',
                content: renderCount(state) // Render count dynamically
            },
            {
                type: 'button',
                content: 'Increment',
                onClick: IncreaseCount // Pass reference to the function without invoking
            }
        ]
    };
    
}
// App.js




// // App.js

// // import { ListComponent } from './Component/ListComponent.js';

// // // Define a component for the list app
// // export function App() {
// //     // Sample list data
// //     const items = ['Item 1', 'Item 2', 'Item 3','Item 4'];

// //     return {
// //         type: 'div',
// //         content: [
// //             {
// //                 type: 'h1',
// //                 content: 'List App'
// //             },
// //             ListComponent(items) // Use the ListComponent to render the list,
// //         ]
// //     };
// // }
