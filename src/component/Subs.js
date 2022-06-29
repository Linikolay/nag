
import React, { Component, lazy } from 'react';
import { Container, Row, Col, NavLink, } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import aboimg from '../img/aboimg.png';
import logoser from '../img/logoser.svg';
import mail from '../img/mail.svg';
import "bootstrap/dist/css/bootstrap.min.css"



class Subs extends Component {
    constructor(props) {
        super()
        this.state = {
            sle: "",
        }
    }
    render() {
        return (
            <div className="page-wrap suberes">
                <div className="main-body">
                    <Container className=''>
                        <div className='subsblock'>
                            <Row>
                                <Col className='' xs={5}>
                                    <p className='titlesubs'>Будьте вкурсе событий</p>
                                    <p className='dessubs'>Лучшие предложения от нас и наших партнеров будут приходить вам на мпочту</p>
                                </Col>
                                <Col className='' xs={7}>
                                    <div className='formmailblock'>
                                        <input placeholder='Ваше имя' className='inpmail' />
                                        <input placeholder='Ваше email' className='inpmail' />
                                        <button className='vtnsubmail'><img src={mail} /> Подписаться</button>
                                    </div>
                                    <div className='groupformtestermail'>
                                        <div className="form-group">
                                            <input type="checkbox" id="javascript" />
                                            <label htmlFor="javascript"></label>
                                        </div>
                                        <span className='boulkdtext'>Согласен с</span>
                                        <span className='boulkdtext1'> политикой конфеденциальности</span>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div></div>
        )
    }
}

export default Subs;
