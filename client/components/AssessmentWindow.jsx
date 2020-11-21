import React, { Redirect } from 'react';
import QuestionDisplay from './QuestionDisplay.jsx';

function AssessmentWindow(props) {
  // question bank
  let questions = [
    { text: 'Check the mail', keyword: 'mail' },
    { text: 'Went grocery shopping', keyword: 'groceries' },
  ];

  // question display generator
  questions = questions.map((question, index) => {
    return (
      <QuestionDisplay
        keyword={question.keyword}
        key={`question${index}`}
        text={question.text}
      />
    );
  });

  console.log(questions);

  return (
    <div className="assessment-window">
      <h3>Assessment Window</h3>
      {questions}
    </div>
  );
}

// redirectToResults = () => {
//   return <Redirect to="/results" />;
// };

export default AssessmentWindow;
