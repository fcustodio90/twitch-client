import React from 'react';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '461330436468-vg2mfk7al6e5pv6edmuqdvuipmjihsse.apps.googleusercontent.com',
        scope: 'email'
      });
    });
  }

  render() {
    return <div>Google Auth</div>;
  } 
}

export default GoogleAuth;