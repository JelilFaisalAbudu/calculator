import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

/* eslint-disable no-unused-vars */
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const { total, next, operation } = this.state;

    this.setState(calculate({ total, next, operation }, buttonName));
  }

  render() {
    const { total, next, operation } = this.state;
    let result = total || next;

    if (total && next && operation) {
      result = `${total} ${operation} ${next}`;
    } else if (total && operation) {
      result = `${total} ${operation}`;
    }
    return (
      <div className="App">
        <Display result={result || undefined} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
