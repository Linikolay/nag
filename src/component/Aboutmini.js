
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
                                <p className='discaboutmal'>На нашем сайте вы найдете широкий ассортимент сетевого оборудования, такого как: коммутаторы; маршрутизаторы; телекоммуникационные шкафы; оптические патч-корды и кабели; беспроводное оборудование; оптические кроссы и муфты. Вся предлагаемая продукция сертифицирована и лицензирована.</p>
                                <button className='urblbtnabout'>Побробнее</button>
                            </Col>

                            <Col className='' xs={6}>

                                <div className='aboimgblock'>
                                    <img className='aboimg' src={aboimg}></img>

                                    <div className='absblocktext'>
                                        <div className='abominiblock'>
                                            <p className='aboint'>835+</p>
                                            <p className='abostr'>наименований продукции</p>
                                        </div>
                                        <div className='abominiblock'>
                                            <p className='aboint'>835+</p>
                                            <p className='abostr'>наименований продукции</p>
                                        </div>
                                        <div className='abominiblock'>
                                            <p className='aboint'>835+</p>
                                            <p className='abostr'>наименований продукции</p>
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
