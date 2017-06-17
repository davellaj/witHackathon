import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import App from './App';
import GalleryContainer from './GalleryContainer';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={App} />
      <Route path="/gallery" component={GalleryContainer} />
    </Router>,
  document.getElementById('root'),
);
