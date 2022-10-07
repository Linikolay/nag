
import React, { Component, lazy } from 'react';
import { Container, Row, Col, NavLink } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import aboimg from '../img/aboimg.png';
import logoser from '../img/logoser.svg';

import "bootstrap/dist/css/bootstrap.min.css"
const CustomRightArrow = ({ onClick }) => {
    return <i className="custom-right-arrow" onClick={() => onClick()} />;
};

const CustomLeftArrow = ({ onClick }) => (
    <i onClick={() => onClick()} className="custom-left-arrow" />
);

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};



class Aboutmini extends Component {
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
                            <Col className='' xs={6}>

                                <img src={logoser}></img>
                                <p className='abotitle'>О компании</p>
                                <p className='discaboutmal'>Мы предоставляем активное и пассивное телекоммуникационное оборудование: волоконно-оптический кабель, оптические патч-корды, коммутаторы, медиаконвертеры, SFP модули, муфты, кроссы, серверные шкафы и много другое.

Компания имеет большой опыт в реализации проектов по сетевой и системной интеграции любой степени сложности с использованием оборудования ведущих производителей и в соответствии с узбекскими и международными стандартами качества.</p>
                                <a href={'https://liderteam.uz'} className='urblbtnabout'>Побробнее</a>
                            </Col>

                            <Col className='' xs={6}>

                                <div className='aboimgblock'>
                                    <img className='aboimg' src={aboimg}></img>

                                    <div className='absblocktext'>
                                        <div className='abominiblock'>
                                            <p className='aboint'>1000+</p>
                                            <p className='abostr'>наименований продукции</p>
                                        </div>
                                        <div className='abominiblock'>
                                            <p className='aboint'>1500+</p>
                                            <p className='abostr'>реализованных проектов</p>
                                        </div>
                                        <div className='abominiblock'>
                                            <p className='aboint'>9+</p>
                                            <p className='abostr'>лет на рынке</p>
                                        </div>
                                        
                                    </div>
                                </div>

                            </Col>

                        </Row>

                    </Container>


                </div></div>
        )
    }
}

export default Aboutmini;
