<h1>How Does JSX Work? </h1>


When the JSX expressions are compiled, they are converted into JavaScript objects, representing React elements.
React then uses these elements to build the corresponding HTML DOM and display it in the browser.

We use setInterval to call the show function every second and render the counter element on the page.

One of the great features of React is that it updates only the elements that need an update. You can inspect the HTML output of the example above and see that only the text in the paragraph gets updated every second.
In practice, most React apps call ReactDOM.render() once.
We will learn how to update elements without calling the render method in the next lessons.
