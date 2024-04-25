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

export function useEffect(callback, dependencies, state) {
    const deps = dependencies || [];
    const prevState = state.getState();

    // Check if any dependency has changed, or if it's the initial render
    const hasChanged = deps.some(dep => prevState[dep] !== state.getState()[dep]);

    // Call the callback function after the initial render or if any dependency has changed
    if (hasChanged || deps.length === 0) {
        callback();
    }
}


export function useInterval(callback, delay) {
    useEffect(() => {
        const intervalId = setInterval(callback, delay);

        return () => clearInterval(intervalId);
    }, []);
}