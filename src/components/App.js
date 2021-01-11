import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

/* eslint-disable no-unused-vars */
import calculate from '../logic/calculate';

function App() {
  return (
    <div>
      <Display result="23" />
      <ButtonPanel />
    </div>
  );
}

export default App;
