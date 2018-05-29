import React, { Component } from 'react';
import axios from 'axios';

class FeedbackItem extends Component {
  removeFeedback = () => {
    if(window.confirm('Are you sure?')) {
    axios.delete(`/api/remove/${this.props.feedback.id}`)
      .then(response => {
        console.log('Successfully removed feedback');
        this.props.getAllFeedback();
      })
      .catch(error => {
        console.log('Error with DELETE: ', error);
      })
    }
  };

  render() {
    return (
      <tr>
        <td>{this.props.feedback.feeling}</td>
        <td>{this.props.feedback.understanding}</td>
        <td>{this.props.feedback.support}</td>
        <td>{this.props.feedback.comments}</td>
        <td><button onClick={this.removeFeedback}>DELETE</button></td>
      </tr>
    );
  }
}

export default FeedbackItem;