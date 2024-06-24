// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import PostDetailsPage from './PostDetailsPage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/post/:postId" component={PostDetailsPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
