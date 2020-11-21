import React from 'react';

function QuestionDisplay(props) {
  return (
    <div className="question">
      <label htmlFor={props.keyword}>{props.text}</label>
      <input
        name={props.keyword}
        type="checkbox"
        key={props.index}
        onChange={(e) => {
          console.log('e.target.checked is', e.target.checked);
          if (e.target.checked) {
            props.add(props.keyword);
          } else {
            props.remove(props.keyword);
          }
        }}
      />
    </div>
  );
}

export default QuestionDisplay;
