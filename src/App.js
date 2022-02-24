
import { Component, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import logo from './logo.svg';
// import './App.css';
;
const MainPage = lazy(() => import('./component/MainPage'));
const Headers = lazy(() => import('./component/Headers'));

lazy(() => import('bootstrap/dist/css/bootstrap.min.css'))
lazy(() => import('./App.css'))
class App extends Component {
  render() {

    return (
      <div className="page-wrap">
        <Suspense fallback={
          <div>Load</div>
        }>
        <div className="main-body">
          <Headers/>
          <Router>
        
              <Routes>
            
                <Route path="/" element={<MainPage/>} />
               
                {/* <Route exact path="/room/" component={App} /> */}

                {/* <Route exact path="/teachercreate/" component={TeachPage} /> */}

              </Routes></Router>
        </div>
        </Suspense></div>
    )
  }
}


export { App as default } 