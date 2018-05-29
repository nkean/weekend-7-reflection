import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

const mapReduxStateToProps = (reduxState) => (
  { reduxState }
);

class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: '',
    };
  }

  commentChangeHandler = event => {
    this.setState({
      comment: event.target.value,
    });
  };

  submitHandler = () => {
    const feedback = { ...this.props.reduxState.feedbackData, comments: this.state.comment };
    axios.post('/api/add', feedback)
      .then(response => {
        this.props.history.push('/5');
      })
      .catch(error => {
        console.log('Error posting to server: ', error);
        alert('There was a problem submitting your feedback :(');
      })
  };

  render() {
    return (
      <div className="center">
        <div className="card">
          <div className="container">
            <h1>Any comments you want to leave?</h1>
            <div>
              <input value={this.state.comment} placeholder="Your comments" onChange={this.commentChangeHandler} />
            </div>
            <button onClick={this.submitHandler}>SUBMIT</button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(Comments);