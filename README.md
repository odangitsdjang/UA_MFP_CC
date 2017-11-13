# How to run this?
- You can simply just open index.html in this repository, and play around with what I wrote. Everything else is already set up.
- If you wanted to develop more from this repo, you can run the following command in terminal: 
```js
npm run webpack 
```
to make sure the javascripts get compiled properly. bundle.js gets updated everytime you update a javascript file while that command is running (while webpack is watching). 

## Setting up process: 
1. Set up js frameworks for frontend (React/Redux)
```js 
npm init -y 
npm install --save webpack react react-dom react-redux react-router-dom redux redux-logger redux-thunk babel-core babel-loader babel-preset-react babel-preset-es2015 
```
2. Make webpack.config.js file and set up the file structure; add npm run webpack script to package.json

## After: 
1. Draw on paper the design that I want for this coding challenge
2. Code out the skeleton, using flexboxes to space things nicely
3. Frameworks/other things used:
  1. materialize-icons for icons
  2. react-modals to have a modal for a form to add foods
  3. react-select for dropdown inside the form
4. Since there is no backend, whenever I add foods from the react-modal, it simply gets added to the redux store, and the rest of the front end architecture grabs the appropriate data to render. 
5. Lots of boilerplate written to make it very simple to add an API backend.



## Implementation specific
1. There is only one breakfast, lunch, or dinner, but multiple snacks. 
