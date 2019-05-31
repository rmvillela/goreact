import React, { Fragment } from 'react';
import { render } from 'react-dom';

import Button from './Button';

import './style.scss';

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
        <h2>{this.state.counter}</h2>
        <Button onClick={this.handleClick}>Somar</Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));