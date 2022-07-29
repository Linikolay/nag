
import  React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import logo from './logo.svg';
// import './App.css';
import { FlapperSpinner } from "react-spinners-kit";
// import MainPage from './component/MainPage'

// const MainPage = lazy(() => import('./component/MainPage'));
const Headers = React.lazy(() => import('./component/Headers'));
const Footer = React.lazy(() => import('./component/Footer'));
const MainPage = React.lazy(() => import('./component/MainPage'));
const Contacts = React.lazy(() => import('./component/Contacts'));

const Allstat = React.lazy(() => import('./component/Allstat'));

const Category = React.lazy(() => import('./component/Product/Category'));
const All = React.lazy(() => import('./component/Product/All'));
const One = React.lazy(() => import('./component/news/one'));
const Product = React.lazy(() => import('./component/Product/Product'));
const AllCategory = React.lazy(() => import('./component/AllCategory'));


// lazy(() => import('bootstrap/dist/css/bootstrap.min.css'))
// lazy(() => import('./App.css'))
class App extends Component {
  render() {
    return ( <Router>
      <div className="page-wrap">
       
        <div className="main-body gagwheth">
      
            <Headers />

          <Suspense
           fallback={
            <div className="centered">
         
            </div>
          }
          >
            <Switch>

              <Route exact path="/" component={MainPage} />
           
              <Route path="/all" component={All} />
              <Route path="/one/:id" component={One} />
              <Route path="/contacts" component={Contacts} />
              <Route path="/allstat" component={Allstat} />
              <Route path="/allcat" component={AllCategory} />
              <Route path="/category/:id/" component={Category} />
              <Route path="/view/:id" component={Product} />



            </Switch>




          </Suspense>

            
      
            <Footer />
        </div>
   
</div>
</Router>
    )
    
  }
}


export { App as default } 