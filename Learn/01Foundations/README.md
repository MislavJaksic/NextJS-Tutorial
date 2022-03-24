## [Foundations](https://nextjs.org/learn/foundations/about-nextjs)

### About Next.js

Need to know:
* HTML and CSS
* JavaScript
* React
* web dev concepts

React is a JavaScript library for building interactive user interfaces.  

Next.js is a React framework that gives you building blocks to create web applications.

### From JS to React

The Document Object Model (DOM) is an object representation of the HTML elements.  
Use DOM methods and JavaScript to listen to user events and manipulate the DOM.  
DOM represents the updated page content.  
See `index.html`.  

React, a declarative UI library, helps you describe what you want to show to the user.  

JSX is a syntax extension for JavaScript that allows you to describe your UI in a familiar HTML-like syntax.  
Three rules of JSX:
* return a single root element like `<>` or `<div>`
* close all tags, even self-closing tags `<img>`
* use camelCase to avoid conflicts with HTML and SVG attributes

React has to be compiled to JavaScript because it uses JSX.  

Be familiar with JavaScript's:
* Functions and Arrow Functions
* Objects
* Arrays and array methods
* Destructuring
* Template literals
* Ternary Operators
* ES Modules and Import / Export Syntax

Be familar with React's:
* Components
* Props
* State

React props allow you to pass arguments to React components.  
Reacts needs a key to differentiate list elements.  

React adds interactivity through state and event handlers.  
Hooks allow you to add additional logic such as state to your components.  
Unlike props which are passed to components as the first function parameter, the state is initiated and stored within a component.  

### From React to Next.js

Create `package.json`.  
Run `npm install react react-dom next`.  
Create `index.jsx` in `pages` directory.  
Modify `package.json`.  
Run `npm run dev`.  
Visit `localhost:3000`.  

### How Next.js Works

* From Development to Production: transitioning from developer to end user friendly application
* Compiling: transforming developer written code into instructions browsers understand
* Minifying: file size minimization by removing superflous formatting
* Bundling: resolving a web of dependencies and merging them into a package that runs on the browser
* Code Splitting: like lazy instantiation, but for web page code
* Build Time vs. Runtime: time it takes go prepeare an app for production and time it takes to answer the user's request
* Client and Server: browser and distant server
* Rendering: transforming code into HTML representation of the UI; you can chose if you want to pre-render HTML on a server, render it client-side or at build time like a static site generator
* CDNs and the Edge: origin server computes and answers requests; CDNs are servers closer to the user that server static content, cached responses, to offload the origin server and reduce response time; edge is like a CDN but can run code as well
