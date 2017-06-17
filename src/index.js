import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';

import App from './App';
import GalleryContainer from './GalleryContainer';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<GalleryContainer />, document.getElementById('root'));
registerServiceWorker();

// ReactDOM.render(
//     <Router>
//       <Route path="/" component={App} />
//       <Route path="/gallery" component={GalleryContainer} />
//     </Router>,
//   document.getElementById('root'),
// );
