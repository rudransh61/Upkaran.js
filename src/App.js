// App.js
import { createState, useInterval } from "./state.js";
import { ListComponent } from "./Component/ListComponent.js";

// Create reactive state
const initialState = {
    count: 0,
};
const state = createState(initialState);
const timer = createState({ timer: 0 });

// Define your main App component
export function App() {
    useInterval(() => {
        timer.setState({ timer: timer.getState().timer + 1 });
    }, 1000, timer); // Pass the timer state object here

    return {
        type: "div",
        content: [
            {
                type: "p",
                id: "text",
                content: `Count: ${state.getState().count}`,
                style: {
                    color: "red",
                    fontSize: `${state.getState().count * 10}px`,
                    backgroundColor: "lightblue",
                },
            },
            {
                type: "button",
                content: "Increment",
                onclick: () => state.setState({ count: state.getState().count + 1 }),
            },
            {
                type: "button",
                content: "Decrement",
                onclick: () => state.setState({ count: state.getState().count - 1 }),
            },
            ListComponent(state.getState().count),
            {
                type: "h3",
                id: "timer",
                content: `Timer : ${timer.getState().timer} `,
            }
        ],
    };
}
