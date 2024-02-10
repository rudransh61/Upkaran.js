# UPKARAN.js
 - A simple js frontend framework for <i>abhiyanta</i>(engineers)

 ## Why a new framework 
 - becz i want to create

# How to use it? 
The main code is in `App.js` file
You can create HTML elements like js objects ...
Example Code :
```javascript
import { li } from './Component/List.js';

// App element
export const App = [
    {
        type: 'a',
        attr: {
            href: 'https://google.com',
            target: '_blank'
        },
        content: "Click here to go to google.com"
    },
    {
        type: 'h1',
        attr: {},
        content: "Namaste World!!"
    },
    {
        type : 'hr',
        attr:{},
        content : null
    },
    {
        type:'h2',
        attr : {},
        content : "This is a list"
    },
    {
        type : 'ul',
        content: [
            li,
            li,
            { type: 'li', content: 'This is also an element' }
        ]
    }
];
```

Output is in `index.html` file of `public` folder...
![img](img1.png)