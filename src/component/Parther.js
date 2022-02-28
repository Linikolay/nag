
import React, { Component, lazy } from 'react';
import { Container, Row, Col, NavLink } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import aboimg from '../img/aboimg.png';
import logoser from '../img/logoser.svg';
import partner from '../img/partner.png';
import "bootstrap/dist/css/bootstrap.min.css"



class Parther extends Component {
    constructor(props) {
        super()
        this.state = {
            sle: "",
        }
    }
    render() {
        return (
            <div className="page-wrap">
                <div className="main-body">


                    <Container className='controlerspadr'>
                        <Row>
                            <p className='tetilepatrhners'>Наши партнеры</p>
                            <Col className='' xs={12}>
                                <div className='imgparmauioage'>
                                    <img className='parthmain' src={partner}></img>
                                </div>
                                <div className='imgparmauioage'>
                                    <img className='parthmain' src={partner}></img>
                                </div>
                                <div className='imgparmauioage'>
                                    <img className='parthmain' src={partner}></img>
                                </div>
                                <div className='imgparmauioage'>
                                    <img className='parthmain' src={partner}></img>
                                </div>
                                <div className='imgparmauioage'>
                                    <img className='parthmain' src={partner}></img>
                                </div>
                                <div className='imgparmauioage'>
                                    <img className='parthmain' src={partner}></img>
                                </div>

                            </Col>



                        </Row>

                    </Container>


                </div></div>
        )
    }
}

export default Parther;
