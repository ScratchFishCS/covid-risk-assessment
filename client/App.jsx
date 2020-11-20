import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AssessmentPage from './components/AssessmentPage';
import ResultsPage from './components/ResultsPage';
import ErrorPage from './components/ErrorPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>Covid Risk Assessment Quiz</h1>
          <Switch>
            <Route path="/" component={AssessmentPage} exact></Route>
            <Route path="/results" component={ResultsPage}></Route>
            <Route component={ErrorPage}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
