import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Views/Home/index'
import NotFound from './Views/NotFound/index'
import Posts from './Views/Posts/index'
import Header from './components/Header'
import MyPage from './Views/MyPage/index'
import Login from './Views/Login/index'
import './App.css';

class App extends Component {
  render() {
    return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/about/:username" component={NotFound} />
        <Route path="/posts" component={Posts} />
        <Route path="/login" component={Login} />
        <Route path="/me" component={MyPage} />
      </div>
    </Router>
    );
  }
}


export default App;
