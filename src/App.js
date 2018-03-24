import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './home';
import Map from './Map';


//This is start of our application. All of the routes will extend from here.
class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/maps" component={Map} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;