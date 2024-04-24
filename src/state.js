import {handleStateChange} from './index.js';

// Define a reactive state
export function createState(initialState) {
    let state = initialState;
    const listeners = new Set();

    function getState() {
        return state;
    }

    function setState(newState) {
        state = { ...state, ...newState };
        // Subscribe to state changes
        this.subscribe(handleStateChange);
        // Notify all listeners
        listeners.forEach(listener => listener(state));
        // render(document.getElementById('root'),App())

    }

    function subscribe(listener) {
        listeners.add(listener);
        // Return a function to unsubscribe
        return () => {
            listeners.delete(listener);
        };
    }

    return { getState, setState, subscribe };
}

// Custom useEffect function
export function useEffect(callback, dependencies, state) {
    const deps = dependencies || [];
    const prevState = state.getState();

    // Check if any dependency has changed
    const hasChanged = deps.some(dep => prevState[dep] !== state.getState()[dep]);

    if (hasChanged) {
        // Call the callback function
        callback();
    }
}

export function useInterval(callback, delay) {
    useEffect(() => {
        const intervalId = setInterval(callback, delay);

        return () => clearInterval(intervalId);
    }, []);
}