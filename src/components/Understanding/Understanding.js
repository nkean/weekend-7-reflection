// dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {
  nextPageHandler = () => {
    this.props.history.push('/3');
  }

  render() {
    return (
      <div>
        <h1>UNDERSTANDING</h1>
        <button onClick={this.nextPageHandler}>NEXT</button>
      </div>
    );
  }
}

export default connect()(Understanding);