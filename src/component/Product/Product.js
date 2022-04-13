
import React, { Component, } from 'react';
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';
import styled from 'styled-components';
import mini1 from '../../img/mini1.png';
import mini2 from '../../img/mini2.png';
import banner from '../../img/banner.png';
import brandico from '../../img/brandico.svg';
import garant from '../../img/garant.svg';
import rgblue from '../../img/rgblue.svg';
import icodoc from '../../img/icodoc.svg';

import PropTypes from "prop-types";

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
// import '../../Pro.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class Category extends Component {

    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };
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
            count: 1,
            dec: true,
            har: false,
            doc: false,
            pers: {
                filter:[]
            },
            src: { _id: 9999999999, url: "" },




        }
        this.change = this.change.bind(this);
        this.plus = this.plus.bind(this);
        this.minus = this.minus.bind(this);
        this.changeimg = this.changeimg.bind(this);
        this.dec = this.dec.bind(this);
        this.har = this.har.bind(this);
        this.doc = this.doc.bind(this);
    }
    change = e => {
        this.setState({
            sle: e
        })
    }
    changeimg(vals) {

        if (this.state.src._id == vals._id) {

        } else {
            this.setState({
                src: vals
            })
        }

    }
    dec() {
        this.setState({
            dec: true,
            har: false,
            doc: false
        })
    }
    har() {
        this.setState({
            dec: false,
            har: true,
            doc: false
        })
    }

    doc() {
        this.setState({
            dec: false,
            har: false,
            doc: true
        })
    }
    componentDidMount() {
        console.log(this.slider2)
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2,
            curen: this.state.curenter * this.state.count
        });


        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

            })
        };
        var pathArray = window.location.pathname.split('/');
        console.log(pathArray)

        fetch('http://localhost:5000/auth/oneproduct/' + pathArray[2], requestOptions)
            .then((response) => response.json())

            .then(data => {
                var cont = data
                console.log(data)
                var ArrB = {...data}
                console.log(ArrB)
                for (var i = 0; i < cont.product.mainparams.length; i++) {


                    for (var b = 0; b < cont.product.mainparams[i].filter.length; b++) {
                       
                        for (var f = 0; f < cont.product.mainparams[i].filter[b].filterchild.length; f++) {

                           

                            for (var t = 0; t < cont.product.mainparams[i].filterchild.length; t++) {

                              
                                
                            
                                if ( cont.product.mainparams[i].filter[b].filterchild[f]._id == cont.product.mainparams[i].filterchild[t]._id) {
                                    console.log("fefe")
                                    cont.product.mainparams[i].filter[b].product.push(cont.product.mainparams[i].filterchild[t])
                                
                                
                     

                                }


                            }


                        }







                    }
                }


             
                if (data.product.image.length > 3) {
                    this.setState({
                        maincount: 3
                    })
                } else if (data.product.image.length == 3) {
                    this.setState({
                        maincount: 3
                    })
                } else if (data.product.image.length == 2) {
                    this.setState({
                        maincount: 2
                    })
                } else if (data.product.image.length == 1) {
                    this.setState({
                        maincount: 1
                    })
                }
                this.setState({
                    main: data.product,
                    isLoad: true,
                    curen: data.product.sum,
                    curenter: data.product.sum,
                })
            }
            )


            .catch((error) => {
                console.error(error);
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





        const { thumbsSwiper, setThumbsSwiper, isLoad, main } = this.state

        if (!isLoad) {
            return (
                <p>

                </p>
            )
        } else {


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

                                                    <div className='goruptopproducer groupmaindetailproduct testposition2222'>

                                                        {
                                                            main.new == true && (
                                                                <div className='new newvenv testposition'>
                                                                    Новинка

                                                                </div>
                                                            )
                                                        }

                                                        {
                                                            main.recomend == true && (
                                                                <div className='reqomend testposition'>
                                                                    Рекомендуем
                                                                </div>
                                                            )
                                                        }


                                                        {
                                                            main.act == true && (
                                                                <div className='discount testposition'>
                                                                    Акция
                                                                </div>
                                                            )
                                                        }


                                                        {
                                                            main.discount > 0 && (
                                                                <div className='skidk testposition'>
                                                                    -{main.discount}%
                                                                </div>
                                                            )
                                                        }

                                                        <div className='btnaddcartsrav btnaddcartsravdet'><img src={srav}></img></div>
                                                        <div className='btnaddcartfavorite btnaddcartfavoritedet'><img src={favorite}></img></div>
                                                    </div>
                                                    <img className='imgproductdetals' src={this.state.src.url}></img>
                                                    <p><h1>{this.state.src.id}</h1></p>

                                                    <div className='container'>
                                                        <ImageSlider onChange={this.changeimg} maincount={this.state.maincount} images={

                                                            main.image

                                                        } />

                                                    </div>
                                                </div>

                                                <div className='topgrgarant'>
                                                    <img className='imggrgarant' src={garant}></img>
                                                    <div className='grgarant'>
                                                        <p className='garantmaintext'>
                                                            Гарантия
                                                        </p>
                                                        <p className='garantmonth'>
                                                            {main.garant} месяцев
                                                        </p>
                                                    </div>
                                                </div>

                                            </div>

                                        </Col>
                                        <Col className='' xs={4}>
                                            <div className='midlblock'>
                                                <p className='midletextproduct'>{main.nameru}</p>
                                                <img className='artimges' src={arti}></img>
                                                <p className='articul'>Артикул         </p>
                                                <p className='snerstest'> {main.artikul}</p>
                                                <p className='maldesctiptiom'>
                                                    {main.minidescriptionru}</p>

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

                                            </div>
                                        </Col>
                                    </Row>

                                </Col>


                                <Col className='nopadd cladco productblocked textpssss harakters halopers' xs={12}>






                                    <Row>

                                        <Col className=' clasrightline opisek' xs={12}>

                                            <button onClick={this.dec}

                                                className={this.state.dec ? 'btnactive' : 'btnactiveno'}

                                            >

                                                Описание
                                            </button>
                                            <button onClick={this.har} className={this.state.har ? 'btnactive' : 'btnactiveno'}>
                                                Характеристики
                                            </button>
                                            {
                                                main.files.length > 0 && (
                                                    <button onClick={this.doc} className={this.state.doc ? 'btnactive' : 'btnactiveno'}>

                                                        Документация
                                                    </button>
                                                )
                                            }

                                        </Col>



                                        {
                                            this.state.dec == true && (
                                                <Col className=' clasrightline opisanser' xs={12}>
                                                    {main.descriptionru}

                                                </Col>
                                            )
                                        }
                                        {
                                            this.state.har == true && (
                                                <Col className=' clasrightline opisanser' xs={12}>
                                                    {console.log(this.state.main)}
                                                    {this.state.main.mainparams.map((data, idx) =>



                                                        <div>


                                                            <div>
                                                                <p className='textharakata'>{data.nameru}</p>
                                                                <div className=''>
                                                                    <Row>
                                                                        <Col xs={9}>
                                                                            {(() => {
                                                                                console.log(data)
                                                                                const ids = data.filter.map(o => o._id)
                                                                                const filtered = data.filter.filter(({ _id }, index) => !ids.includes(_id, index + 1))
                                                                                console.log(filtered)

                                                                                return (
                                                                                    <div>
                                                                                        {filtered.map((data1, idx) =>

                                                                                            <div>
                                                                                                {(() => {
                                                                                                    if (Number.isInteger(idx / 2)) {
                                                                                                        return (
                                                                                                            <Row className='grmain'>
                                                                                                                <Col className='mainlable' xs={6}>
                                                                                                                    <div>

                                                                                                                        {data1.nameru}Фильтр

                                                                                                                    </div>

                                                                                                                </Col>

                                                                                                                <Col className='mainlable' xs={6}>
                                                                                                                    <div>

                                                                                                                        {data1.product.map((maip, idx) =>

                                                                                                                            <div>

                                                                                                                                {maip.nameru} Подфильтр
                                                                                                                            </div>

                                                                                                                        )}
                                                                                                                    </div>
                                                                                                                </Col>

                                                                                                            </Row>
                                                                                                        )
                                                                                                    } else {
                                                                                                        return (
                                                                                                            <Row className=''>
                                                                                                                <Col className='mainlable' xs={6}>
                                                                                                                    <div>

                                                                                                                        {data1.nameru}Фильтр

                                                                                                                    </div>

                                                                                                                </Col>

                                                                                                                <Col className='mainlable' xs={6}>
                                                                                                                    <div>

                                                                                                                        {data1.product.map((maip, idx) =>

                                                                                                                            <div>

                                                                                                                                {maip.nameru} Подфильтр
                                                                                                                            </div>

                                                                                                                        )}
                                                                                                                    </div>
                                                                                                                </Col>

                                                                                                            </Row>
                                                                                                        )
                                                                                                    }
                                                                                                })()}


                                                                                            </div>


                                                                                        )}
                                                                                    </div>
                                                                                )
                                                                            })()}


                                                                        </Col>

                                                                    </Row>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    )}



                                                </Col>
                                            )
                                        }
                                        {
                                            this.state.doc == true && (
                                                <Col className=' clasrightline opisanser' xs={6}>
                                                    {main.files.map((pop, idx) =>

                                                        <div>

                                                            <div className='documentbtn'>


                                                                <a href={pop.url} target="_blank" className='pastext'><img className='icodoc' src={icodoc} /><p>{pop.nameru} </p></a>

                                                            </div>
                                                        </div>

                                                    )}


                                                </Col>
                                            )
                                        }


                                    </Row>

                                </Col>
                            </Row>

                        </Container>


                    </div></div>
            )
        }
    }
}

export default Category;
