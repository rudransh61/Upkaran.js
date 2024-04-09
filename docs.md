**README.md**

# Upkaran: Simple Virtual DOM with Reactive State

Upkaran is a lightweight JavaScript library that implements a simple virtual DOM with reactive state management. It provides a minimalistic framework for building dynamic web applications with reactive updates based on changes to the application state.

## About

Upkaran consists of three main components:

1. **State Management**: The `state.js` module provides a `createState` function for creating reactive state objects. These state objects store application data and trigger re-renders whenever their values change.

2. **Components**: The `App.js` module defines the main application component `App()`, which serves as the root component of the application. This component renders dynamic content and styles based on the application state. It also contains event handlers for updating the state.

3. **Rendering**: The `Upkaran.js` module offers functions for rendering components to the DOM. The `render` function accepts a root element and a component object, recursively rendering the component tree to the DOM and applying styles and event handlers as specified.

## How to Use

1. **Installation**: Clone the Upkaran repository to your local machine.

2. **Setup**: Ensure you have an HTML file with a root element (`<div id="root"></div>`) where the application will be rendered.

3. **Usage**:
   - Import the required modules:
     ```javascript
     import { render } from './Upkaran.js';
     import { App } from './App.js';
     ```
   - Get the root element:
     ```javascript
     const rootElement = document.getElementById('root');
     ```
   - Render the main application component:
     ```javascript
     render(rootElement, App());
     ```

4. **Run**: Open the HTML file in a web browser to see the rendered application.

## Algorithm

The rendering algorithm of Upkaran follows these steps:

1. **Component Tree Creation**: The application component tree is constructed, starting from the root component (`App()`).

2. **Virtual DOM Construction**: For each component in the tree, a corresponding virtual DOM element is created with its attributes, content, styles, and event handlers.

3. **DOM Diffing**: The virtual DOM is compared with the actual DOM to identify the differences (additions, removals, or updates).

4. **DOM Update**: Based on the differences detected, the necessary updates are applied to the actual DOM, ensuring that it reflects the current state of the application.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Feel free to explore and modify Upkaran to suit your needs! If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request. Contributions are welcome!