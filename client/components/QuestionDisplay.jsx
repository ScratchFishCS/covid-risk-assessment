import React from 'react';

function QuestionDisplay(props) {
  return (
    <div className="question">
      <label htmlFor={props.keyword}>{props.text}</label>
      <input name={props.keyword} type="checkbox" key={props.index} />
    </div>
  );
}

export default QuestionDisplay;
