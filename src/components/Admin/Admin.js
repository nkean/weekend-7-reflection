// dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import FeedbackItem from '../FeedbackItem/FeedbackItem';

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      feedbackList: [],
    };
  }

  componentDidMount() {
    this.getAllFeedback();
  }

  getAllFeedback = () => {
    axios.get('/api/all')
      .then(response => {
        console.log('Successful GET from server');
        this.setState({
          feedbackList: response.data
        });
      })
      .catch(error => {
        console.log('Error with GET: ', error);
      })
  };

  render() {
    return (
      <div>
        <h1>ADMIN</h1>
        <table>
          <thead>
            <tr>
              <th>Feeling</th>
              <th>Comprehension</th>
              <th>Support</th>
              <th>Comments</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.feedbackList.map(feedback => <FeedbackItem
              key={feedback.id}
              feedback={feedback}
              getAllFeedback={this.getAllFeedback}
            />)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect()(Admin);