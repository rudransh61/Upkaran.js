// App.js
import { createState } from "./state.js";
import { router } from "./Route.js";
import { ListComponent } from "./Component/ListComponent.js";
// Create reactive state
const initialState = {
    count: 0,
};
const state = createState(initialState);

// Define components
const Increment = () => {
    state.setState({ count: state.getState().count + 1 });
    console.log(state.getState().count);
};

const Decrement = () => {
    state.setState({ count: state.getState().count - 1 });
    console.log(state.getState().count);
};

// Define your main App component
export function App() {
    return {
        type: "div",
        content: [
            {
                type: "p",
                id: "text",
                content: `Count: ${state.getState().count}`,
            },
            {
                type: "button",
                content: "Increment",
                onclick: Increment,
            },
            {
                type: "button",
                content: "Decrement",
                onclick: Decrement,
            },
        ],
    };
}
