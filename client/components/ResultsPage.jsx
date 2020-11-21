import React from 'react';

import styles from '../styles/styles.css';

function ResultsPage(props) {
  console.log(props);
  // const activities = [];
  // for (let activity of props.riskyActs) {
  //   activities.push(<p>{activity}</p>);
  // }

  return (
    <div>
      <h1>Results Page</h1>
      <div>
        <h3>Your Results:</h3>
        <h5>Risk level based on behaviors: {props.riskLevel}</h5>
        <h5>The riskiest behaviors you engage in include:</h5>
        {/* {activities} */}
      </div>
    </div>
  );
}

export default ResultsPage;
