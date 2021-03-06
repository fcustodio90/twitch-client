# Twitch Client

This is a Single page application featuring React and Redux.

## Installation

0. Clone the repository
1. Run `npm install`
2. Run `npm start`

## Backend API

This is a client side project only. However it uses RESTful conventions to comunicate with a server side api.

Go to https://github.com/fcustodio90/twitch-api read the instructions and run the api locally. By default client runs on localhost:3000 while the api runs on localhost:3001.

## Components structure

### StreamCreate

Handles the ability to create streams 

```js
class StreamCreate extends React.Component {
  
  // Receives meta object -> de-structure into error and touched arguments.
  // Renders errors if form object has an error and is touched 
  // (meaning user clicks outside the input fields while making an error)
  renderError({ error, touched }) { // 
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="error">{error}</div>
        </div>
      );
    }
  }
  
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

// Handles form validations errors
// Displays error messages if user did not enter a title or description
// Note: errors.title and errors.description only work because by 
// convention that's how we named the field names
const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must enter a title";
  }

  if (!formValues.description) {
    errors.description = "You must enter a description";
  }

  return errors;
};

// Wrapping ReduxForm in a const to make code easier to read
const formWrapped = reduxForm({
  form: "streamCreate",
  validate
})(StreamCreate);

// Using the connect and passing the action creator and the ReduxForm wrapped
export default connect(
  null,
  { createStream }
)(formWrapped);
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

Handles authentication using google auth2. Auth is saved in redux store to be sure to handle authorization in components later on (TODO)

```js
class GoogleAuth extends React.Component {
  // Handles authentication as soon as component is mounted
  componentDidMount() {
    // makes the request to google auth 2 api
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        // query params
        clientId: '461330436468-vg2mfk7al6e5pv6edmuqdvuipmjihsse.apps.googleusercontent.com',
        // custom scopes. For this project only email is needed
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        // checks if the user is Signed In or Not.
        // This is a built in function inside auth object. Returns a boolean
        this.onAuthChange(this.auth.isSignedIn.get());
        // Auth object has a listen function to detect if user changes his logged in state
        // As an argument we pass this.onAuthChange which is a custom function to handle auth state
        // inside or redux store. So if the user logs in or logs out the state gets saved into our redux store
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    // calls signIn action creator
    this.auth.signIn();
  };

  onSignOutClick = () => {
    // cals signOut action creator
    this.auth.signOut();
  }

  renderAuthButton() {
    // logic to render different buttons no big deal really.
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui google plus button">
          <i className="google plus icon"></i>
          Sign out with google
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui google plus button right-floated">
          <i className="google plus icon"></i>
          Sign in with google
        </button>  
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  } 
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn }
}

export default connect(
  mapStateToProps,
  {signIn, signOut}
)(GoogleAuth);
```

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
