
import React, { Component, Suspense, } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import logo from '../img/logo.svg';

import reg from '../img/reg.svg';
import cart from '../img/cart.svg';
import reklana from '../img/reklama.svg';
import favorite from '../img/favorite.svg';
import start from '../img/start.svg';

import "bootstrap/dist/css/bootstrap.min.css"
import "../App.css"

const LeftCategory = React.lazy(() => import('./LeftCategory'));
const RightBaners = React.lazy(() => import('./RightBaners'));
const Statis = React.lazy(() => import('./Statis'));
const Popular = React.lazy(() => import('./Popular'));
const NewProd = React.lazy(() => import('./NewProd'));
const Aboutmini = React.lazy(() => import('./Aboutmini'));
const Parther = React.lazy(() => import('./Parther'));
const Subs = React.lazy(() => import('./Subs'));


class MainPage extends Component {
    render() {

        return (

            <div className="page-wrap">

                <Suspense fallback={
                    <div>Load</div>
                }>
                    <div className="main-body">

                        <Container>
                            <Row>
                                <Col className='leftsider' xs={3}><LeftCategory /></Col>
                                <Col className='centerbanners' xs={9}>
                                    <RightBaners />

                                </Col>
                                <Col className='centerbanners bodymaincontrollers' xs={12}>
                                    <Popular />

                                </Col>
                                <img className='reklna' src={reklana}></img>

                                <Col className='centerbanners bodymaincontrollers' xs={12}>
                                    <NewProd />

                                </Col>



                             

                       

                            </Row>

                        </Container>
                        <Statis/>
                               
                     
                        <Container>
                            <Row>

                                <Col className='centerbanners bodymaincontrollers' xs={12}>
                                    <Aboutmini />

                                </Col>
                                <Col className='centerbanners ' xs={12}>
                                    <Parther />

                                </Col>
                                <Col className='centerbanners ' xs={12}>
                                    <Subs />

                                </Col>
                            </Row>

                        </Container>


                    </div>
                </Suspense>
            </div>
        )
    }
}

export default MainPage;
