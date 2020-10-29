import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutJob from './Pages/AboutJob';

import './App.css';




import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutJob} />
      </Switch>
    </BrowserRouter>


  )

}

export default App;
