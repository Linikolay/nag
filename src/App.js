
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainPage from './component/MainPage'
import Headers from './component/Headers'



import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {

    return (
      <div className="page-wrap">
        <div className="main-body">
          <Headers/>
          <Router>
        
              <Routes>
            
                <Route path="/" element={<MainPage/>} />
               
                {/* <Route exact path="/room/" component={App} /> */}

                {/* <Route exact path="/teachercreate/" component={TeachPage} /> */}

              </Routes></Router>
        </div></div>
    )
  }
}

export default App;
