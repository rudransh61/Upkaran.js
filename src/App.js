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