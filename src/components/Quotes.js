/* eslint-disable max-len */
import React from 'react';
import quotesStyles from '../styles/quotes.module.css';

function Quotes() {
  return (
    <div className={quotesStyles['quote-container']}>
      <p className={quotesStyles.quote}>
        Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding. –William Paul Thurston
      </p>
    </div>
  );
}

export default Quotes;
