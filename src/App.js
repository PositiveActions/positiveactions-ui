import React, { Component } from 'react';
import './scss/App.scss';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EventDetails from './components/pages/EventDetails';
import Contact from './components/elements/Contact';
import NotFound from './components/pages/NotFound';
import { Provider } from 'mobx-react';
import EventsStore from './stores/EventsStore';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* <Home></Home> */}
          <Switch>
            <Provider EventsStore={EventsStore}>
              <React.Fragment>
                <Route exact path="/" component={Home} />
                <Route exact path="/events/:id" component={EventDetails} />
              </React.Fragment>
            </Provider>
            <Route exact path="/contact" component={Contact} />
            <Route exact path='*' component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
