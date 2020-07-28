import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Header from './components/header/header.component';
import Homepage from './components/homepage/homepage.component';
import Features from './components/features/features.component';
import Pricing from './components/pricing/pricing.component';
import Login from './components/login/login.component';
import Signup from './components/signup/signup.component';

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
