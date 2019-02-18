import React, { Component } from 'react';
import './scss/App.scss';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EventDetails from './components/pages/EventDetails';
import Contact from './components/elements/Contact';
import NotFound from './components/pages/NotFound';
import { Provider } from 'mobx-react';
import EventsStore from './stores/EventsStore';
import EventDetailsStore from './stores/EventDetailsStore';
import UserStore from './stores/UserStore';
import Profile from './components/pages/Profile';
import Subscribe from './components/pages/Subscribe';
import Connect from './components/pages/Connect';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* <Home></Home> */}
          <Provider EventsStore={EventsStore} EventDetailsStore={EventDetailsStore} UserStore={UserStore}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/events/:id" component={EventDetails} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/profile/:id" component={Profile} />
              <Route exact path="/subscribe" component={Subscribe} />
              <Route exact path="/connect" component={Connect} />
              <Route exact path='*' component={NotFound} />
            </Switch>
          </Provider>
        </div>
      </Router>
    );
  }
}

export default App;
