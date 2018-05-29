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

  removeFeedback = feedback => {
    if (window.confirm('Are you sure?')) {
      axios.delete(`/api/remove/${feedback.id}`)
        .then(response => {
          console.log('Successfully removed feedback');
          this.getAllFeedback();
        })
        .catch(error => {
          console.log('Error with DELETE: ', error);
        })
    }
  };

  render() {
    return (
      <div>
        <h2>Feedback Received:</h2>
        <div className="center">
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
                                                        removeFeedback={this.removeFeedback}
                                                       />)}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="6"></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

export default connect()(Admin);