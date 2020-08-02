import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/header/header.component';
import Homepage from './screens/homepage/homepage.screen';
import Features from './screens/features/features.screen';
import Pricing from './screens/pricing/pricing.screen';
import Login from './screens/login/login.screen';
import Signup from './screens/signup/signup.screen';

function App() {
  return (
    <Router>
      <Header />
      <br />
      <Route path="/" exact component={Homepage}></Route>
      <Route path="/features" exact component={Features}></Route>
      <Route path="/pricing" exact component={Pricing}></Route>
      <Route path="/login" exact component={Login}></Route>
      <Route path="/signup" exact component={Signup}></Route>
    </Router>
  );
}

export default App;
