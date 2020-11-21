import React from 'react';
import { Redirect } from 'react-router-dom';
import AssessmentWindow from './AssessmentWindow.jsx';
import AboutWindow from './AboutWindow.jsx';
// import styles from '../styles/styles.css';

function AssessmentPage(props) {
  const redirectToResults = () => {
    return <Redirect to="/results" />;
  };

  return (
    <div>
      <h1>Assessment Page</h1>
      <div id="assessment-page">
        <div className="window">
          <AboutWindow />
        </div>
        <div className="window">
          <AssessmentWindow />
          <button
            onClick={(e) => {
              redirectToResults();
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default AssessmentPage;
