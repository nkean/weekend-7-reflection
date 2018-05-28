import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feeling extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }
  
  valueChangeHandler = event => {
    this.setState({
      value: event.target.value,
    });
  }

  nextPageHandler = () => {
    this.props.history.push('/2');
  }

  render() {
    return (
      <div>
        <h1>How are you feeling today?</h1>
        <div>
          <label>
            <input type="radio" value="1" checked={this.state.value === '1'} onChange={this.valueChangeHandler} />
            1
          </label>
          <label>
            <input type="radio" value="2" checked={this.state.value === '2'} onChange={this.valueChangeHandler} />
            2
          </label>
          <label>
            <input type="radio" value="3" checked={this.state.value === '3'} onChange={this.valueChangeHandler} />
            3
          </label>
          <label>
            <input type="radio" value="4" checked={this.state.value === '4'} onChange={this.valueChangeHandler} />
            4
          </label>
          <label>
            <input type="radio" value="5" checked={this.state.value === '5'} onChange={this.valueChangeHandler} />
            5
          </label>
        </div>
        <button onClick={this.nextPageHandler}>NEXT</button>
      </div>
    );
  }
}

export default connect()(Feeling);