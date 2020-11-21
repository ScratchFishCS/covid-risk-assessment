import React, { useEffect, useState } from 'react';
import Activities from './Activities.jsx';
import styles from '../styles/styles.css';
import Questions from '../questions';

function ResultsPage(props) {
  let questions = Questions;

  const lookupTable = questions.reduce((table, question) => {
    table[question.keyword] = question.text;
    return table;
  }, {});

  const activities = [];
  for (let i = 0; i < props.riskyActs.length; i += 1) {
    const text = lookupTable[props.riskyActs[i]];
    activities.push(<Activities behavior={text} />);
  }

  return (
    <div>
      <h1>Results Page</h1>
      <div>
        <h3>Your Results:</h3>
        <h5>Risk level based on behaviors: {props.riskLevel}</h5>
        <h5>The riskiest behaviors you engage in include:</h5>
        {activities}
      </div>
    </div>
  );
}

export default ResultsPage;
