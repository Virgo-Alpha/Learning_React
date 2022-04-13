# Learning_React
Intro to React

The public folder contains files related to how the application will display on the client, the most important of those being index.html, which is the HTML template of our page

The src folder contains all of the JavaScript, CSS, and image files that will be compiled into a bundle file and injected into index.html:
While there are other files in the src folder that come with Create React App when it is generated, the two files below are the only critical files:
• index.js: This file is the entry point into our application. In our code, a method called ReactDOM.render() is used to find an element with id="root" in the HTML and add our React application inside of that element (similar to the previous lesson).
• App.js: This file is the main component that will be rendered to the DOM, which currently includes the React logo image and the default text, that we see in the output.

A really cool feature of Create React App is Fast Refresh, which automatically reflects the changes made to the code in the browser.

