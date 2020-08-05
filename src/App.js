import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import Homepage from './screens/homepage/homepage.screen';
import Features from './screens/features/features.screen';
import Pricing from './screens/pricing/pricing.screen';
import Login from './screens/login/login.screen';
import Signup from './screens/signup/signup.screen';
import Dashboard from './screens/dashboard/dashboard.screen';

function App() {
  return (
    <Router>
      <ToastContainer
        position="top-center"
        autoClose={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
      {/* <Header /> */}
      <br />
      <Route path="/" exact component={Homepage}></Route>
      <Route path="/features" exact component={Features}></Route>
      <Route path="/pricing" exact component={Pricing}></Route>
      <Route path="/login" exact component={Login}></Route>
      <Route path="/signup" exact component={Signup}></Route>
      <Route path="/dashboard" exact component={Dashboard}></Route>
    </Router>
  );
}

export default App;
