
import React, { Component, lazy } from 'react';
import { Container, Row, Col, NavLink } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import aboimg from '../img/aboimg.png';
import logoser from '../img/logoser.svg';
import '../App.css'
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



class Contacts extends Component {
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
                            <Col className='' xs={12} sm={12} md={12} lg={12} xl={6}>

                            <div class="art-map-left"><h3 class="art-map-title">Ташкент</h3><p class="art-map-sub-title"><b>Адрес:</b></p><p>г. Ташкент, Мирабадский район, ул. А.С. Банокатий, 199</p><p class="art-map-sub-title"><b>Ориентир:</b></p><p>Транспортный институт (общежитие), Korzinka.uz - Саракулька</p><p class="art-map-sub-title"><b>Телефон:</b></p><p><a href="tel:998712058585">+998 71 205-85-85</a></p><p class="art-map-sub-title"><b>E-mail:</b></p><p><a href="mailto:info@itmag.uz">info@itmag.uz</a></p></div>
                            </Col>

                            <Col className='' xs={12} sm={12} md={12} lg={12} xl={6}>
                            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A39cf01c6ad98331e3e715f850fbaf5706828a303c2af621d430ed90599f4f5d9&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>

                            </Col>

                        </Row>


                        <Row>
                            <Col className='' xs={12} sm={12} md={12} lg={12} xl={6}>

                            <div class="art-map-left"><h3 class="art-map-title">Фергана</h3><p class="art-map-sub-title"><b>Адрес:</b></p><p>г.Фергана, улица Ал-Фаргоний, дом 20</p><p class="art-map-sub-title"><b>Ориентир:</b></p><p>Офис интернет-провайдера Comnet.</p><p class="art-map-sub-title"><b>Телефон:</b></p><p><a href="tel:998977409722">+998 97 740-97-22</a></p><p class="art-map-sub-title"><b>E-mail:</b></p><p><a href="mailto:fergana@liderteam.uz">fergana@liderteam.uz</a></p></div>
                            </Col>

                            <Col className='' xs={12} sm={12} md={12} lg={12} xl={6}>
                            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Afa716d8879b1373c0c6aa6fbb3df90f6f67e129bf85a8287867219bf31482d6f&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>

                            </Col>

                        </Row>




                        <Row>
                            <Col className='' xs={12} sm={12} md={12} lg={12} xl={6}>

                            <div class="art-map-left"><h3 class="art-map-title">Самарканд</h3><p class="art-map-sub-title"><b>Адрес:</b></p><p>г. Самарканд. ул Рудакий, дом 150</p><p class="art-map-sub-title"><b>Ориентир:</b></p><p>Табачная фабрика.</p><p class="art-map-sub-title"><b>Телефон:</b></p><p><a href="tel:998977407911">+998 97 740-79-11</a></p><p class="art-map-sub-title"><b>E-mail:</b></p><p><a href="mailto:samarkand@liderteam.uz">samarkand@liderteam.uz</a></p></div>
                            </Col>

                            <Col className='' xs={12} sm={12} md={12} lg={12} xl={6}>
                            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A64d27234d15e5d5c696ca2d4febf4528a2d83d39fd8cc60b99e9d9d5b7732e06&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>
                            </Col>

                        </Row>


                    </Container>


                </div></div>
        )
    }
}

export default Contacts;
