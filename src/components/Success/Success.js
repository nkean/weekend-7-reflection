import React, { Component } from 'react';
import { connect } from 'react-redux';

class Success extends Component {
  nextPageHandler = () => {
    const action = {type: 'RESET'};
    this.props.dispatch(action);
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <h1>SUCCESS!</h1>
        <button onClick={this.nextPageHandler}>NEXT</button>
      </div>
    );
  }
}

export default connect()(Success);