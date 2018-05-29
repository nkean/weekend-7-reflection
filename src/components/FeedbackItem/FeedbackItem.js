import React from 'react';

const FeedbackItem = props => (
  <tr>
    <td>{props.feedback.feeling}</td>
    <td>{props.feedback.understanding}</td>
    <td>{props.feedback.support}</td>
    <td>{props.feedback.comments}</td>
    <td><button onClick={() => props.removeFeedback(props.feedback)}>DELETE</button></td>
  </tr>
);

export default FeedbackItem;