import React from 'react';
import Home from './Home.jsx';
import Store from './Store.jsx';
import Gallery from './Gallery.jsx';
import About from './About.jsx';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      placeholder: true
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Link to="/">Home</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/store">Store</Link>
          <Link to="/about">About</Link>
          <Switch>
            <Route path="/gallery">
              <Gallery />
            </Route>
            <Route path="/store">
              <Store />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}


export default App;