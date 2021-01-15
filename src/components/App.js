import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

import calculate from '../logic/calculate';

const App = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleClick = buttonName => {
    const result = calculate({ total, next, operation }, buttonName);

    setTotal(result.total);
    setNext(result.next);
    setOperation(result.operation);
  };

  const renderResult = `${total}${operation}${next}`.replace(/null/g, '');

  return (
    <div className="App">
      <Display result={renderResult || undefined} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
};

export default App;
