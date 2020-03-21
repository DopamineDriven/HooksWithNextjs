# HooksWithNextjs
useState, useRef, useEffect

# Getting Started with Next.js
- open terminal and run
    - npm init -y
    - npm install --save react react-dom next
    - mkdir pages
- create index.jsx in pages folder for your home screen (routes with "/")
- add the following to "scripts" in package.json before launching from terminal
- "scripts": {
    - "dev": "next",
    - "build": "next build",
    - "start": "next start"
- }
- navigate to terminal and run
    - npm run dev
- if port 3000 is already running elsewhere, try
    - npm run dev -- -p 3001
- note, 3001 was arbitrarily chosen (it can be any unoccupied port)
- this launches prerendered react pages
- No more reactDOM.render boilerplate!
- *important*: be sure to create .gitignore manually and add node_modules and .next to it before pushing
# Overview

- Page file name = url extension 
    - for example, localhost:3000/ImageChangeOnScroll
- static folder is where images are stored when using next
- content derived from Using React Hooks tutorial II 
by Peter Kellner on https://app.pluralsight.com

# useState
## echoing input field
- without useState hook:
    - would have had to create a class constructor to initialize state
    - would have had to do some convoluted programming around calling getState and setState
- with useState hook:
    - use a simple react hook that returns a variable and a setter for that variable 

# useEffect

side effects === bad thing

- Components can be free of side effects
    - This is a pure component

- useEffect Hook introduces side effects
- when useEffect is first called:
    - function associated with useEffect is executed
    - when complete
    - another function associated with useEffect is also executed

not necessarily a bad thing 

- if adding listeners to DOM elements rendered in functional components, useEffect perfect place to add them
- Once functional component goes away, we want to remove these listeners avoiding any potential resource leaks in app
- This is why useEffect is non-pure
    - it doesn't necessarily mean it won't execute like a pure component
    - it just isn't guaranteed to always execute as a pure component absent side effects

### useEffect definition
Accepts a function that contains imperative, possibly effectful code.

@param effect — Imperative function that can return a cleanup function

@param deps — If present, effect will only activate if the values in the list change.

@version — 16.8.0

@see — https://reactjs.org/docs/hooks-reference.html#useeffect


NOTES CONT
- first parameter must be a function
- using arrow syntax, create function reference
- return from this function another function
- second parameter is just an array [] that returns dependencies for the component
- if array is empty, then useEffect is only called once when component first mounted
- if want it called again before component is unmounted, the array must contain all
- values that will change. That is, the values that the rendered output is dependent on
- useful for things like the true or false values of a checkbox field on the screen
    - if checkbox value changes (checked vs not checked; ie, truthy vs falsy), re-render the component and the function and useEffect is called again