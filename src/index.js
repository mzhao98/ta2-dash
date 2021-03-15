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

//ReactDOM.render(<Dashboard_Team />, document.getElementById('other'));

//
//import React from 'react';
//import { Route, IndexRoute } from 'react-router';
//
///**
// * Import all page components here
// */
//import Dashboard from './Dashboard';
//import Dashboard_Team from './Dashboard_Team';
//
///**
// * All routes go here.
// * Don't forget to import the components above after adding new route.
// */
//export default (
//  <Route path="/" component={Dashboard}>
//    <IndexRoute component={Dashboard} />
//    <Route path="/some/where" component={Dashboard_Team} />
//    <Route path="/some/otherpage" component={Dashboard_Team} />
//  </Route>
//);
//
//// You can choose your kind of history here (e.g. browserHistory)
//import { Router, hashHistory as history } from 'react-router';
//// Your routes.js file
//import routes from './routes';
//
//ReactDOM.render(
//  <Router routes={routes} history={history} />,
//  document.getElementById('your-app')
//);