import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "pages/home";
import Guides from "pages/guides";
import GuideSingle from "pages/guide-single";
import Tools from "pages/tools";
import About from "pages/about";
import Contact from "pages/contact";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />

        <Route path="/guides" component={Guides} />
        <Route path="/tutoriais" component={Guides} />

        <Route path="/guide/:slug" component={GuideSingle} />
        <Route path="/tutorial/:slug" component={GuideSingle} />

        <Route path="/tools" component={Tools} />
        <Route path="/ferramentas" component={Tools} />

        <Route path="/about" component={About} />
        <Route path="/sobre" component={About} />

        <Route path="/contact" component={Contact} />
        <Route path="/contato" component={Contact} />

        <Route path="/" component={GuideSingle}/>
      </Switch>
    </BrowserRouter>
  );
}
