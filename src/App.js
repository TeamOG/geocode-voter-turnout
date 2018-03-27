import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import './App.css';

// Views
import Home from './views/Home';
import Maps from './views/Maps';
import Data from './views/Data';


//This is start of our application. All of the routes will extend from here.
class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <div className="App">
            <Switch>
                    <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
                    <Route exact path={process.env.PUBLIC_URL + '/maps'} component={Maps} />
              <Route exact path={process.env.PUBLIC_URL + '/data'} component={Data} />
            </Switch>
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;