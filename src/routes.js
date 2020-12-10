import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'pages/home';
import Guides from 'pages/guides';
import Tools from 'pages/tools';
import About from 'pages/about';
import Contact from 'pages/contact';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/guides" component={Guides} />
        <Route path="/tools" component={Tools} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}
