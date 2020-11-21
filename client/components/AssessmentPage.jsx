import React from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import AssessmentWindow from './AssessmentWindow.jsx';
import AboutWindow from './AboutWindow.jsx';
import styles from '../styles/styles.css';

function AssessmentPage(props) {
  console.log(props);
  return (
    <div>
      <h1>Assessment Page</h1>
      <div id="assessment-page">
        <div className="window">
          <AboutWindow />
        </div>
        <div className="window">
          <AssessmentWindow add={props.add} remove={props.remove} />
          {/* // return <Redirect to="/results"></Redirect>; */}

          <NavLink to="/results">
            <button
              onClick={() => {
                props.submitAnswers();
              }}
            >
              Submit
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default AssessmentPage;
