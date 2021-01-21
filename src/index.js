import React from 'react';
import ReactDOM from 'react-dom';
import indexStyles from './index.module.css';
import Routes from './components/Routes';

ReactDOM.render(
  <React.StrictMode>
    <div className={indexStyles.container}>
      <Routes />
    </div>
  </React.StrictMode>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept();
}
