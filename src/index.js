import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import Dashboard from './Dashboard';
//import Dashboard_Team from './Dashboard_Team';
//
//import { BrowserRouter } from 'react-router-dom';
//import { Switch, Route } from 'react-router-dom';
//
//ReactDOM.render((
//  <BrowserRouter>
//    <Dashboard /> {/* The various pages will be displayed by the `Main` component. */}
//  </BrowserRouter>
//  ), document.getElementById('root')
//);
//
//
//ReactDOM.render(
//  <Router routes={routes} history={history} />,
//  document.getElementById('root')
//);
//
//ReactDOM.render(
//  <Router routes={routes} history={history} />,
//  document.getElementById('other')
//);

ReactDOM.render(<Dashboard />, document.getElementById('root'));
