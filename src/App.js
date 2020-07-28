import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Header from './components/header/header.component';
import Homepage from './components/homepage/homepage.component';

function App() {
  return (
    <Router>
      <Header />
      <br />
      <Route path="/" exact component={Homepage}></Route>
    </Router>
  );
}

export default App;
