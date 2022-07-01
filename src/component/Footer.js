
import React, { Component, lazy } from 'react';
import { Container, Row, Col, NavLink, } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import aboimg from '../img/aboimg.png';
import logofooter from '../img/logofooter.svg';

import "bootstrap/dist/css/bootstrap.min.css"



class Footer extends Component {
    constructor(props) {
        super()
        this.state = {
            sle: "",
        }
    }
    render() {
        return (
            <div className="page-wrap">
                <div className="footer">


                    <Container className=''>
                        <div className=''>
                            <Row>




                                <Col className='' xs={12} sm={12} md={2} lg={2} xl={2} >
                                    <img src={logofooter} />
                                    <p className='logotext'>Сетевое и телекоммуникационное оборудование</p>
                                </Col>

                                <Col className='' xs={12} sm={12} md={2} lg={2} xl={2}>
                                    <p className=' textfootertop'>Lider Team </p>
                                    <p className='linkfootertext'>О компании</p>
                                    <p className='linkfootertext'>Лицензии</p>
                                    <p className='linkfootertext'>Гарантия</p>
                                    <p className='linkfootertext'>Контакты</p>
                                    <p className='linkfootertext'>Партнеры</p>

                                </Col>


                                <Col className='' xs={12} sm={12} md={2} lg={2} xl={2}>
                                    <p className=' textfootertop'>Магазин</p>
                                    <p className='linkfootertext'>Личный кабинет</p>
                                    <p className='linkfootertext'>Каталог товаров</p>
                                    <p className='linkfootertext'>Новинки</p>
                                    <p className='linkfootertext'>Скидки</p>
                                    <p className='linkfootertext'>Акции</p>
                                    <p className='linkfootertext'>Партнеры</p>

                                </Col>


                                <Col className='' xs={12} sm={12} md={2} lg={2} xl={2}>
                                    <p className=' textfootertop'>Прочее </p>
                                    <p className='linkfootertext'>F.A.Q</p>
                                    <p className='linkfootertext'>Способы оплаты</p>
                                    <p className='linkfootertext'>Как оформить заказ</p>
                                    <p className='linkfootertext'>Политика конфиденциальности</p>


                                </Col>


                                {/* <Col className='' xs={12} sm={12} md={2} lg={2} xl={2}>
                                    <p className=' textfootertop'>Рассылка </p>
                                    <p className='linkfootertext'>Подпишитесь на рассылку что бы быть в курсе всех событий</p>
                                    <button className='footbtnsubs'>Подписаться</button>

                                </Col> */}

                                <Col className='' xs={12} sm={12} md={4} lg={4} xl={4}>
                                    <a href="tel:+998712058585" className=' numbertxt'>
                                        <p>+998 (71) 205-85-85 г. Ташкент</p>

                                    </a>
                                    <a href="tel:+998911509707" className=' numbertxt'>
                                        <p>+998 (91) 150-97-07 г. Фергана
</p>
                                    </a>
                                    <a href="tel:+998972058585" className=' numbertxt'>+998 (97) 740-79-11 г. Самарканд

                                    </a>
                                    <p className='linkfootertext'>Пн-Пт 09:00-18:00</p>


                                </Col>


                            </Row>
                        </div>
                    </Container>

                    <div className='footerbottoms'>


                        <Container>
                            <Row>
                                <Col className='' xs={6}>
                                    <p className='linkfootertext'>© 2012-2020 «LIDER TEAM» - продажа сетевого оборудования
                                    </p>
                                </Col>
                                <Col className='' xs={6}>
                                    <p className='linkfootertext linkfootertextbtntext'>info@nag.uz</p>
                                </Col>
                            </Row>
                        </Container>


                    </div>

                </div>



            </div>
        )
    }
}

export default Footer;
