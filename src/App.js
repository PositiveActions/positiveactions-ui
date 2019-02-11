import React, { Component } from 'react';
import './scss/App.scss';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EventDetails from './components/pages/EventDetails';
import Contact from './components/elements/Contact';
import NotFound from './components/pages/NotFound';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* <Home></Home> */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/events/:id" component={EventDetails} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path='*' component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
