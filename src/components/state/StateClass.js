// @flow
import * as React from 'react';

export class StateClass extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            name: 'Test',
            age: 12
        }
    }
    
    handleOnChange = () => {
        this.setState({ name: 'Test_2'})
    }
    
  render() {
    return (
      <div>
        <small>State Class</small>
        <p>{JSON.stringify(this.state)}</p>
        <button onClick={this.handleOnChange}>Click</button>
      </div>
    );
  };
};