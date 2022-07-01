
import  React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import logo from './logo.svg';
// import './App.css';

// import MainPage from './component/MainPage'

// const MainPage = lazy(() => import('./component/MainPage'));
const Headers = React.lazy(() => import('./component/Headers'));
const Footer = React.lazy(() => import('./component/Footer'));
const MainPage = React.lazy(() => import('./component/MainPage'));
const Category = React.lazy(() => import('./component/Product/Category'));
const All = React.lazy(() => import('./component/Product/All'));
const One = React.lazy(() => import('./component/news/one'));
const Product = React.lazy(() => import('./component/Product/Product'));
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
                <Route path="/all" element={<All/>} />
                <Route path="/one/:id" element={<One/>} />
                

                <Route path="/category/:id" element={<Category/>} />
                <Route  path="/view/:id"
              
                element={<Product props={":id"}/>} />
              </Routes></Router>
         
             <Footer/>
        </div>
   
        </Suspense></div>
    )
  }
}


export { App as default } 