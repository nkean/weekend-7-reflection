import React, { Component } from 'react';
import { connect } from 'react-redux';

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

  nextPageHandler = () => {
    this.props.history.push('/5');
  };

  render() {
    return (
      <div>
        <h1>Any comments you want to leave?</h1>
        <div>
          <input value={this.state.comment} placeholder="Your comments" onChange={this.commentChangeHandler} />
        </div>
        <button onClick={this.nextPageHandler}>NEXT</button>
      </div>
    );
  }
}

export default connect()(Comments);