# Learning_React
Intro to React

The public folder contains files related to how the application will display on the client, the most important of those being index.html, which is the HTML template of our page

The src folder contains all of the JavaScript, CSS, and image files that will be compiled into a bundle file and injected into index.html:
While there are other files in the src folder that come with Create React App when it is generated, the two files below are the only critical files:
• index.js: This file is the entry point into our application. In our code, a method called ReactDOM.render() is used to find an element with id="root" in the HTML and add our React application inside of that element (similar to the previous lesson).
• App.js: This file is the main component that will be rendered to the DOM, which currently includes the React logo image and the default text, that we see in the output.

A really cool feature of Create React App is Fast Refresh, which automatically reflects the changes made to the code in the browser.

    ===========================================================
ReactDOM.render(
  `<h1>Hello, React!</h1>,`
  document.getElementById('root')
); 
    ===========================================================

The code calls React's render method, and passes it two arguments, a JSX element and a container. The render method displays the provided element in the container, which, in our case, is the HTML element with id="root".

When you call the render method, any existing content of the container gets replaced. That is why, usually, the containers are empty in the HTML.

We can use any JavaScript expression inside JSX using curly braces.

    ============================================================
const name = "David";
const el = `<p>Hello, {name}</p>;`

ReactDOM.render(
  el,
  document.getElementById('root')
);
    =============================================================

In the example above, we use the variable name in the JSX element.
As you can see, JSX can be used just like JavaScript expressions. You can assign a JSX expression to a variable, return it from a function, etc.

<h2>Attributes in JSX </h2>


We can specify attributes using quotes, just like in HTML:

`<div id="name"></div>`


When using a JavaScript expression as the attributes value, the quotes should not be used:

`<div id={user.id}></div>`

React DOM uses camelCase property naming convention instead of HTML attribute names.
For example, class becomes className in JSX.

<h2>Components</h2>


Components let you split the page into independent and reusable parts.

<em> Separation of concerns is a programming principle that states that each concern should be separated into individual pieces. </em>

<h3>Functional Components </h3>
In React, there are two types of components that you can use: <b>Functional Components</b> and <b>Class Components.</b>
In this part, we will talk about functional components.

A functional component is a simple JavaScript function:
    ===============================
function Hello() {
  return `<h1>Hello world.</h1>;`
}
    ===============================

The code above defined a functional component called Hello, that returns a simple React element.
Notice that the name of the functional component begins with a capital letter. This is absolutely critical. If we start the name of a component with a lowercase letter, the browser will treat our component like a regular HTML element instead of a Component.

In order to display the component, we need to create the corresponding JSX element.
Now, we can use our user-defined element and render it on the page:

    ====================================
function Hello() {
  return `<h1>Hello world.</h1>;`
}

const el = `<Hello />; `

ReactDOM.render(
  el, 
  document.getElementById('root')
);
    =====================================

