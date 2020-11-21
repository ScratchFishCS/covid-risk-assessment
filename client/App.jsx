import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AssessmentPage from './components/AssessmentPage.jsx';
import ResultsPage from './components/ResultsPage.jsx';
import ErrorPage from './components/ErrorPage.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      riskLevel: '',
      riskyActs: [],
      answers: [],
    };

    // this.submitAnswers = this.submitAnswers.bind(this);
  }

  sumbitAnswers() {
    // gather responses
    // get response from backend
    // save response in this.riskLevel
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>Covid Risk Assessment Quiz</h1>
          <Switch>
            {/* <Route path="/" component={AssessmentPage} /> */}
            <Route
              path="/"
              render={() => (
                <AssessmentPage submitAnswers={this.state.submitAnswers} />
              )}
            />
            <Route
              path="/results"
              render={() => (
                <ResultsPage
                  riskLevel={this.state.riskLevel}
                  riskyActs={this.state.riskyActs}
                />
              )}
            />
            <Route component={ErrorPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
