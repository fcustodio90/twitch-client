import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () => {
  return (
    <div>
      <Link to="/pagetwo">Navigate to page Two.</Link>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      <button>Click me!</button>
      <Link to="/">Navigate to page One.</Link>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;