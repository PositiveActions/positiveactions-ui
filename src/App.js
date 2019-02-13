import React, { Component } from 'react';
import './scss/App.scss';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EventDetails from './components/pages/EventDetails';
import Contact from './components/elements/Contact';
import NotFound from './components/pages/NotFound';
import { Provider } from 'mobx-react';
import EventsStore from './stores/EventsStore';
import CommentsStore from './stores/CommentsStore';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* <Home></Home> */}
          <Provider EventsStore={EventsStore} CommentsStore={CommentsStore}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/events/:id" component={EventDetails} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path='*' component={NotFound} />
            </Switch>
          </Provider>
        </div>
      </Router>
    );
  }
}

export default App;
