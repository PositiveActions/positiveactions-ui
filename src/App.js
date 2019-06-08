import React, { Component } from 'react';
import './scss/App.scss';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import EventDetails from './components/pages/EventDetails';
import Contact from './components/elements/Contact';
import NotFound from './components/pages/NotFound';
import { Provider } from 'mobx-react';
import EventsStore from './stores/EventsStore';
import EventDetailsStore from './stores/EventDetailsStore';
import NavigationStore from './stores/NavigationStore';
import UserStore from './stores/UserStore';
import Profile from './components/pages/Profile';
import Subscribe from './components/pages/Subscribe';
import Login from './components/pages/Login';
import AddEvent from './components/pages/AddEvent';
import ForgotPassword from './components/pages/ForgotPassword';


class App extends Component {
  
  render() {

    //  We create private routes that can not be accessed by anyone
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={(props) => (
        UserStore.userLoggedIn ? <Component {...props} /> : <Redirect to='/signin' />
      )}>
      </Route>
    );

    return (
      <Router>
        <div className="App">
          {/* <Home></Home> */}
          <Provider EventsStore={EventsStore} EventDetailsStore={EventDetailsStore} UserStore={UserStore} NavigationStore={NavigationStore}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/events/:id" component={EventDetails} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/profile/:id" component={Profile} />
              <Route exact path="/signup" component={Subscribe} />
              <Route exact path="/signin" component={Login} />
              <Route exact path="/forgotpassword" component={ForgotPassword} />
              <PrivateRoute exact path="/addevent" component={AddEvent} />
              <Route exact path='*' component={NotFound} />
            </Switch>
          </Provider>
        </div>
      </Router>
    );
  }
}

export default App;
