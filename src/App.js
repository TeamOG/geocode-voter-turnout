import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';


//This is start of our application. All of the routes will extend from here.
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <Switch>
      <Route exact path="/" component={Home} />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;