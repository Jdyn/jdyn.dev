import React from 'react';
import ReactDOM from 'react-dom';
import HomeContainer from './containers/HomeContainer';

import './styles/global.css';

const ROOT_NODE = document.getElementById('root');

const app = (
  <HomeContainer />
)

ReactDOM.render(app, ROOT_NODE);
