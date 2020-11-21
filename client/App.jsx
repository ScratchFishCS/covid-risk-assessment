import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

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

    this.submitAnswers = this.submitAnswers.bind(this);
    this.addToAnswers = this.addToAnswers.bind(this);
    this.removeFromAnswers = this.removeFromAnswers.bind(this);
    this.getRiskLevel = this.getRiskLevel.bind(this);
    this.getRiskyActs = this.getRiskyActs.bind(this);
  }

  submitAnswers() {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ activities: this.state.answers }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('risky acts include', data.activities.riskyActs);
        const newRisk = data.activities.riskLevel;
        const newRiskyActs = data.activities.riskyActs;

        this.setState({
          ...this.state,
          riskLevel: newRisk,
          riskyActs: newRiskyActs,
        });
      });
  }

  addToAnswers(keyword) {
    const newAnswers = this.state.answers.slice();
    newAnswers.push(keyword);

    console.log('keyword is', keyword, 'new answers include :', newAnswers);
    this.setState({
      ...this.state,
      answers: newAnswers,
    });
  }

  removeFromAnswers(keyword) {
    let newAnswers = this.state.answers.slice();
    newAnswers = newAnswers.filter((answer) => answer !== keyword);

    console.log('keyword was ', keyword, 'new answers include :', newAnswers);
    this.setState({
      ...this.state,
      answers: newAnswers,
    });
  }

  getRiskyActs() {
    return this.state.riskyActs;
  }

  getRiskLevel() {
    return this.state.riskLevel;
  }

  render() {
    return (
      <div>
        <h1>Covid Risk Assessment Quiz</h1>
        <Switch>
          <Route exact path="/">
            <AssessmentPage
              submitAnswers={this.submitAnswers}
              add={this.addToAnswers}
              remove={this.removeFromAnswers}
            />
          </Route>

          <Route path="/results">
            <ResultsPage
              riskLevel={this.state.riskLevel}
              riskyActs={this.state.riskyActs}
              getRiskLevel={this.getRiskLevel}
              getRiskyActs={this.getRiskyActs}
            />
          </Route>
          <Route component={ErrorPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
