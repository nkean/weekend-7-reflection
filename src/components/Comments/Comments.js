import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {
  nextPageHandler = () => {
    this.props.history.push('/5');
  }

  render() {
    return (
      <div>
        <h1>COMMENTS</h1>
        <button onClick={this.nextPageHandler}>NEXT</button>
      </div>
    );
  }
}

export default connect()(Comments);