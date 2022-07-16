
import React, { Component, lazy } from 'react';
import { Container, Row, Col, NavLink } from 'react-bootstrap';

import mini1 from '../img/mini1.png';
import mini2 from '../img/mini2.png';
import banner from '../img/banner.png';
import partner from '../img/partner.png';

import Slider from "react-slick";

import back from "../img/back.svg";

import next1 from "../img/next1.svg";
import backp from "../img/backp.svg";

import nextp from "../img/nextp.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css"
import "../App.css"
class Allstat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoad: false,
            isLoaded: false,

        }


    }
   
    componentDidMount() {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },

        };
        fetch(process.env.REACT_APP_BASE_URL + '/auth/news', requestOptions)
            .then((response) => response.json())

            .then(data => {
                console.log(data)
                this.setState({
                    main: data,
                    isLoad: true
                })
            }
            )


            .catch((error) => {
                console.error(error);
            });


    }
    render() {
      
        const { isLoad, isLoaded } = this.state

        if (!isLoad ) {
            return (
                <p></p>
            )
        } else {


            return (

                <div className="page-wrap">
                    <div className="main-body">


                        <Container>
                            <Row>
                               
                             


                                <Col className='' xs={12}>
                                    <p className='polezstt'>Полезные статьи</p>
                                </Col>



                                {this.state.main.news.map((data) =>
                                            <Col  xs={12} sm={12} md={12} lg={12} xl={3}>
                                                <div className='testersssee'>
                                                    <a href={"/one/" + data._id}><img className='sttiimages33' src={process.env.REACT_APP_IMG + data.icon} /></a>
                                                    <div className='grtextsttis'>
                                                        <p className='brandtextvers'>21.04.2020
                                                        </p>
                                                        <a href={"/one/" + data._id} className='textrowproduct'>{data.nameru}
                                                        </a>
                                                    </div>

                                                </div>

                                            </Col>
                                        )}
                                <Col className='centerbanners alignbaner mainmalabs' xs={12} sm={12} md={12} lg={12} xl={12}>



                                </Col>
                            </Row>

                        </Container>




                    </div>


                </div>
            )
        }
    }
}

export default Allstat;

