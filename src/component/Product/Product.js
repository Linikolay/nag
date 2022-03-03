
import React, { Component, lazy, useState } from 'react';
import { Container, Row, Col, NavLink, Breadcrumb } from 'react-bootstrap';

import "react-multi-carousel/lib/styles.css";
import styled from 'styled-components';
import mini1 from '../../img/mini1.png';
import mini2 from '../../img/mini2.png';
import banner from '../../img/banner.png';
import brandico from '../../img/brandico.svg';
import garant from '../../img/garant.svg';
import rgblue from '../../img/rgblue.svg';
import icodoc from '../../img/icodoc.svg';
import ReactSlider from 'react-slider'
import { Range, getTrackBackground } from "react-range";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";

import back from "../../img/back.svg";
import backp from "../../img/backp.svg";
import slidebtn from "../../img/slidebtn.svg";
import nextp from "../../img/nextp.svg";
import next1 from "../../img/next1.svg";
import down from "../../img/downcat.svg";
import cartbtn from "../../img/cartbtn.svg";
import arti from "../../img/ari.svg";
import srav from "../../img/sravbtn.svg";
import favorite from "../../img/favorite.svg";

import { Carousel } from 'react-responsive-carousel';
import imgproduct from "../../img/imgproduct.svg";
import "bootstrap/dist/css/bootstrap.min.css"
import ImageSlider from "../Slide/ImageSlider";

import { LARGE_IMAGES } from "../data/data";
import '../../App.css'
import '../../Pro.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



class Category extends Component {

    constructor(props) {
        super()
        this.state = {
            values: [0, 500000],
            thumbsSwiper: null,
            setThumbsSwiper: null,
            nav1: null,
            nav2: null,
            curen: 1580000,
            curenter: 1580000,
            count: 2,
            src: { id: 9999999999, src: "" },

            IMAGES: [
                {
                    id: 1,
                    src: "../../img/router.png",
                    alt: "Placeholder image",
                },
                {
                    id: 2,
                    src: "../../img/router.png",
                    alt: "Placeholder image",
                },
                {
                    id: 3,
                    src: "../../img/router.png",
                    alt: "Placeholder image",
                },
                {
                    id: 4,
                    src: "../../img/router.png",
                    alt: "Placeholder image",
                },
                {
                    id: 5,
                    src: "../../img/router.png",
                    alt: "Placeholder image",
                },
                {
                    id: 6,
                    src: "../../img/router.png",
                    alt: "Placeholder image",
                },
            ],

            LARGE_IMAGES: [
                {
                    id: 1,
                    src: "../../img/router.png",
                    alt: "Placeholder image",
                },
                {
                    id: 2,
                    src: "../../img/router.png",
                    alt: "Placeholder image",
                },
                {
                    id: 3,
                    src: "../../img/router.png",
                    alt: "Placeholder image",
                },
                {
                    id: 4,
                    src: "../../img/router.png",
                    alt: "Placeholder image",
                },
                {
                    id: 5,
                    src: "../../img/router.png",
                    alt: "Placeholder image",
                },
                {
                    id: 6,
                    src: "../../img/router.png",
                    alt: "Placeholder image",
                },
            ],


        }
        this.change = this.change.bind(this);
        this.plus = this.plus.bind(this);
        this.minus = this.minus.bind(this);
        this.changeimg = this.changeimg.bind(this);
    }
    change = e => {
        this.setState({
            sle: e
        })
    }
    changeimg(vals) {
        console.log(this.state.src)

        if (this.state.src.id == vals.id) {

        } else {
            this.setState({
                src: vals
            })
        }

    }
    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2,
            curen: this.state.curenter * this.state.count
        });
    }
    plus() {
        console.log(this.state.curen * this.state.count)
        this.setState({
            count: this.state.count + 1,
            curen: this.state.curenter * (this.state.count + 1)
        })

    }
    minus() {
        if (this.state.count <= 1) {
        } else {
            console.log((this.state.count * this.state.curen) - this.state.curen)
            this.setState({
                count: this.state.count - 1,
                curen: ((this.state.count - 1) * this.state.curenter)
            })
        }
    }


    render() {





        const { thumbsSwiper, setThumbsSwiper } = this.state

        return (
            <div className="page-wrap">
                <div className="main-body">

                    <Container className='controlerspadr'>

                        <Row>
                            <Breadcrumb className='breadr'>
                                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                                    Library
                                </Breadcrumb.Item>
                                <Breadcrumb.Item active>Data</Breadcrumb.Item>
                            </Breadcrumb>
                            <Col className='nopadd' xs={12}>

                                <span className='populartitle'> Популярные товары</span>

                            </Col>
                            <Col className='nopadd cladco productblocked textpssss' xs={12}>






                                <Row>
                                    <Col className=' clasrightline' xs={4}>
                                        <div className='blokersstree'>
                                            <div className='slideralign'>

                                                <div className='goruptopproducer groupmaindetailproduct'>
                                                    <div className='new newvenv'>
                                                        Новинка
                                                    </div>

                                                    <div className='btnaddcartsrav btnaddcartsravdet'><img src={srav}></img></div>
                                                    <div className='btnaddcartfavorite btnaddcartfavoritedet'><img src={favorite}></img></div>
                                                </div>
                                                <img className='imgproductdetals' src={this.state.src.src}></img>
                                                <p><h1>{this.state.src.id}</h1></p>

                                                <div className='container'>
                                                    <ImageSlider onChange={this.changeimg} images={LARGE_IMAGES} />
                                                </div>
                                            </div>

                                            <div className='topgrgarant'>
                                                <img className='imggrgarant' src={garant}></img>
                                                <div className='grgarant'>
                                                    <p className='garantmaintext'>
                                                        Гарантия
                                                    </p>
                                                    <p className='garantmonth'>
                                                        12 месяцев
                                                    </p>
                                                </div>
                                            </div>

                                        </div>

                                    </Col>
                                    <Col className='' xs={4}>
                                        <div className='midlblock'>
                                            <p className='midletextproduct'>Wi-Fi мост MikroTik LHG XL 5 ac (RBLHGG-5acD -XL)</p>
                                            <img className='artimges' src={arti}></img>
                                            <p className='articul'>Артикул         </p>
                                            <p className='snerstest'> SNR-SFP+LR-10</p>
                                            <p className='maldesctiptiom'>LBE-M5-23 это новинка от Ubiquiti, мощная, легкая и компактная точка доступа! LBE-M5-23 был разработан специально для организации беспроводных ...</p>

                                            <div className='linebottoms'></div>


                                            <div className='types'>
                                                <p className='minitext'>Тип лазера</p>
                                                <p className='minitext1'>DFB</p>


                                            </div>

                                            <div className='types'>
                                                <p className='minitext'>Тип лазера</p>
                                                <p className='minitext1'>DFB</p>


                                            </div>

                                            <div className='types'>
                                                <p className='minitext'>Тип лазера</p>
                                                <p className='minitext1'>DFB</p>


                                            </div>
                                            <div className='types'>
                                                <p className='minitext'>Тип лазера</p>
                                                <p className='minitext1'>DFB</p>


                                            </div>
                                            <div className='types'>
                                                <p className='minitext'>Тип лазера</p>
                                                <p className='minitext1'>DFB</p>


                                            </div>
                                        </div>

                                    </Col>
                                    <Col className='' xs={4}>
                                        <div className='rightblockproduct'>
                                            <div className='topers'>
                                                <div className='groupelipse grtonamecontrolers'>
                                                    <div className='elipse'></div>
                                                    <span className='elipsenals'>В наличии</span>

                                                </div>
                                                <img className='brandconts' src={brandico}></img>
                                            </div>
                                            <div className='linemonproduct'></div>
                                            <p className='stoimprod'>Стоимость</p>
                                            <p className='cenatopiks'>{this.state.curen.toLocaleString()} сум</p>
                                            <div className='tik'>
                                                <p className='tiktext'>Количество</p>

                                                <div className='grouties'>
                                                    <button onClick={this.minus} className='btnleftminus'>-</button>
                                                    <div className='countd'>{this.state.count}</div>
                                                    <button onClick={this.plus} className='btnpls'>+</button>
                                                </div>
                                            </div>
                                            <button className='carttoproductes'><img src={cartbtn} />Добавить в корзину</button>
                                            <p className='documenttextlabel'>Документация</p>
                                            <div className='documentbtn'>


                                                <button className='pastext'><img className='icodoc' src={icodoc} /><p>Паспорт </p><img className='rgblue' src={rgblue}></img></button>

                                            </div>
                                            <div className='documentbtn'>


                                                <button className='pastext'><img className='icodoc' src={icodoc} /><p>Паспорт </p><img className='rgblue' src={rgblue}></img></button>

                                            </div>
                                        </div>
                                    </Col>
                                </Row>

                            </Col>


                            <Col className='nopadd cladco productblocked textpssss harakters halopers' xs={12}>






                                <Row>

                                    <Col className=' clasrightline opisek' xs={12}>
                                        <button className='btnactive'>
                                            Описание
                                        </button>
                                        <button className='btnactiveno'>
                                            Характеристики
                                        </button>

                                        <button className='btnactiveno'>
                                            Документация
                                        </button>
                                    </Col>


                                    <Col className=' clasrightline opisanser' xs={12}>
                                    Коммутационная панель (patching panel) предназначена для разделки в ней кабелей различных подсистем СКС и подключения отдельных составляющих сети друг к другу коммутационными шнурами (patching cords).

Данная патч-панель выполнена в неэкранированном исполнении, предназначена для установки в 19″ шкаф или стойку и имеет 24 порта RJ45/8P8 cat.6. Высота патч-панели — 0,5U (22,23 мм). Тип заделки кабеля — горизонтальная.

Для удобства администрирования каждый порт панели пронумерован и дополнительно снабжен заменяемой бумажной этикеткой. Имеет универсальные контакты Krone LSA-PLUS & 110 Dual Use IDC с цветовой маркировкой по стандарту T568A/B, что повышает простоту расшивки патч-панели.

Коммутационные панели SNR—UD-XXXX-6-X отвечают требованиям стандартов TIA/EIA-568, ISO/IEC 11801,ГОСТ Р 54429 и EN 50173 для компонентов локальных вычислительных сетей cat.6 (частотная полоса пропускания — 250 МГц).
                                    </Col>

                                </Row>

                            </Col>
                        </Row>

                    </Container>


                </div></div>
        )
    }
}

export default Category;
