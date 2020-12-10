import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from 'pages/home';
import GuideList from 'pages/guideList';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/guides" component={GuideList} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
