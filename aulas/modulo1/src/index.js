import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

class Button extends React.Component {
  render() {
    return (
      <a href="#" onClick={this.props.onClick}>
        {this.props.children}
      </a>
    )
  }
}

Button.defaultProps = {
  children: "Salvar"
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string
};

class App extends React.Component {
  render() {
    return <Button onClick={() => { alert("button 1"); }}/>;
  }
}

render(<App />, document.getElementById('app'));