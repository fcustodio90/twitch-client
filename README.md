# Twitch Client

This is a Single page application featuring React and Redux.

## Installation

0. Clone the repository
1. Run `npm install`
2. Run `npm start`

## Components structure

### StreamCreate

TODO: Make the StreamCreate be able to handle Create actions (CRUD)

```js
const StreamCreate = () => {
  return <div>StreamCreate</div>;
};
```
### StreamDelete

TODO: Make the StreamDelete be able to handle delete actions (CRUD)

```js
const StreamDelete = () => {
  return <div>StreamDelete</div>;
};
```

### StreamEdit

TODO: Make the StreamDelete be able to handle edit actions (CRUD)

```js
const StreamEdit = () => {
  return <div>StreamEdit</div>;
};
```

### StreamList

TODO: Make the StreamList be able to handle edit actions (CRUD)

```js
const StreamList = () => {
  return <div>StreamList</div>;
};
```
### StreamShow

TODO: Make the StreamList be able to handle edit actions (CRUD)

```js
const StreamList = () => {
  return <div>StreamList</div>;
};
```

### Header

The header component will be fixed on top of every single page application. 

TODO: Later down the road Header component will need to have rendering logic in order to change according to user login status.

```js
const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Streamy
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All Streams
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};
```

### GoogleAuth

TODO::

## Actions

### Sign in

Handles gapi authentication status. Responsible for changing the status of the auth inside redux store from true to false or vice versa. Default value starts as null. Also contains userId which will come from google gapi and will be needed later in the application to share userId state across several components in order to identify which user is which and to perform crud operations accordindly

```js
export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId  
  };
};
```
### Sign out

Same logic as signIn really.

```js
export const signOut = () => {
  return {
    type: SIGN_OUT  
  };
};
```





## CREATE-REACT-APP Documentation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
