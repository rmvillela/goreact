import React, { Fragment } from 'react';
import { render } from 'react-dom';

import Button from './Button';

class App extends React.Component {
  state = {
    counter: 0
  };

  /** 
   * Esta função diferencia-se da debaixo pois nesse caso o THIS refere-se a própria função,
  já no estilo arrow 
  
    handleClick() {
      this.state.counter += 1;
    }
  */ 
  
  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return (
      <Fragment>
        <h1>Hello Rocketseat</h1>
        <h1>{this.state.counter}</h1>
        <Button onClick={this.handleClick}>Somar</Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));