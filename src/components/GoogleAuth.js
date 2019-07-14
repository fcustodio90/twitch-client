import React from 'react';

class GoogleAuth extends React.Component {
  state = { isSignedIn: null }

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '461330436468-vg2mfk7al6e5pv6edmuqdvuipmjihsse.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
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

export default GoogleAuth;