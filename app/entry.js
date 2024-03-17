import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import { hydrate, render } from "react-dom";

// Featured
import About from './views/About';
import Contact from './views/Contact';
import NotFound from './views/NotFound';
import Projects from './views/Projects';
import Resume from './views/Resume';
import Stats from './views/Stats';

// All of our CSS
import './static/css/main.scss';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router basename={BASE_PATH}>
    <Switch>
      <Route exact path="/" component={Resume} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/stats" component={Stats} />
      <Route path="/contact" component={Contact} />
      <Route path="/resume" component={Resume} />
      {/* Only useful in development mode */}
      <Route component={NotFound} status={404} />
    </Switch>
  </Router>,
  rootElement, rootElement.hasChildNodes() ? rootElement.firstElementChild : null
);


