
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
const MobBaners = React.lazy(() => import('./MoBaners'));
const Statis = React.lazy(() => import('./Statis'));
const Popular = React.lazy(() => import('./Popular'));
const NewProd = React.lazy(() => import('./NewProd'));
const Aboutmini = React.lazy(() => import('./Aboutmini'));
const Parther = React.lazy(() => import('./Parther'));
const Subs = React.lazy(() => import('./Subs'));


class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

            part: false,
            get: false
        }

        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
 

    }

    updateWindowDimensions = () => {

        if (window.innerWidth <= 991) {
            this.setState({
                get: true
            })
        } else {
            this.setState({
                get: false
            })
        }

        if (window.innerWidth <= 1199) {
            this.setState({
                part: true
            })
        } else {
            this.setState({
                part: false
            })
        }
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }


    componentDidMount(){
        if (window.innerWidth <= 991) {
            this.setState({
                get: true
            })
        } else {
            this.setState({
                get: false
            })
        }

        if (window.innerWidth <= 1199) {
            this.setState({
                part: true
            })
        } else {
            this.setState({
                part: false
            })
        }
        window.addEventListener('resize', this.updateWindowDimensions);
    }
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
                                {this.state.get == false&&(
  <Col className='centerbanners'  xs={9}>
  <RightBaners />

</Col>

                                )}
                                {this.state.get == true&&(
                                      <Col className='centerbanners'  xs={12}>
                                      <RightBaners />
  
                                  </Col>
  
                                    )}

                              


                                {this.state.part == true &&(
  <Col className='centerbanners' xs={12}>
  <MobBaners />

</Col>
                                )}
                              

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
                                <Col className='centerbanners partnernoe ' xs={12}>
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
