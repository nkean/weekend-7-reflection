// dependencies
import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';

// components
import Admin from '../Admin/Admin';
import Comments from '../Comments/Comments';
import Feeling from '../Feeling/Feeling';
import Success from '../Success/Success';
import Supported from '../Supported/Supported';
import Understanding from '../Understanding/Understanding';

// styling
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        <Route exact path='/' component={Feeling}/>
        <Route exact path='/2' component={Understanding}/>
        <Route exact path='/3' component={Supported}/>
        <Route exact path='/4' component={Comments}/>
        <Route exact path='/5' component={Success}/>
        <Route exact path='/admin' component={Admin}/>
      </div>
      </Router>
    );
  }
}

export default connect()(App);
