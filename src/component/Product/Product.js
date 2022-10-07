
import React, { Component, } from 'react';
import { Container, Row, Col, Breadcrumb, Dropdown } from 'react-bootstrap';
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
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

class Prdocut extends Component {

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
            gala: false,
            dec: true,
            har: false,
            gala: false,
            doc: false,
            childcrumbersload: false,
            pers: {
                filter: []
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
    bufer = e => {

        navigator.clipboard.writeText(e)
        /* Скопируйте текст внутри текстового поля */
        NotificationManager.success(e, 'Артикул Скопирован');

    }
    galer = e => {
        console.log('test')
        this.setState({
            gala: true
        })
    }
    desa = e =>{
        this.setState({
            gala: false
        })
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
                src: vals,

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


        fetch(process.env.REACT_APP_BASE_URL + '/auth/oneproduct/' + pathArray[2], requestOptions)
            .then((response) => response.json())

            .then(data => {
                var cont = data
                console.log(data)
                var ArrB = { ...data }
                this.setState({
                    apro: data.apro,
                    infocrumb: data.crumbinfo,
                    crumbcategory: data.apro,
                })
                if (data.apro.child) {

                    for (var g = 0; g < data.apro.child.length; g++) {
                        if (data.apro.child[g].product.length > 0) {
                            console.log(data.apro.child[g])
                            this.setState({

                                crumbchild: data.apro.child[g],
                                childcrumbersload: true
                            })
                        }
                    }
                }

                for (var i = 0; i < cont.product.mainparams.length; i++) {


                    for (var b = 0; b < cont.product.mainparams[i].filter.length; b++) {

                        for (var f = 0; f < cont.product.mainparams[i].filter[b].filterchild.length; f++) {



                            for (var t = 0; t < cont.product.mainparams[i].filterchild.length; t++) {




                                if (cont.product.mainparams[i].filter[b].filterchild[f]._id == cont.product.mainparams[i].filterchild[t]._id) {

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
                    test: data.apro,
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

        this.setState({
            count: this.state.count + 1,
            curen: this.state.curenter * (this.state.count + 1)
        })

    }
    minus() {
        if (this.state.count <= 1) {
        } else {

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
                <div className='defaultheruslan'>
                </div>
            )
        } else {
            return (
                <div className="page-wrap">
                    <NotificationContainer />
                    <div className="main-body">
                        {console.log(this.state.test)}
                        <Container className='controlerspadr'>

                            <Row className='nootstup'>
                                <div className='breadr'>
                                    <a className={'mainurl'} href="/">Главная</a>
                                    /
                                    <a href={'/allcat'} className={'decomargins'}>
                                        Категории
                                    </a >
                                    /
                                    {(() => {

                                        if (this.state.childcrumbersload == true) {
                                            return (
                                                <Dropdown className="dopscrumbs maincams dropdown">
                                                    <Dropdown.Toggle variant="success" className='maindrope333 btn btn-primary dropdown-toggle' id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        {this.state.crumbcategory.nameru}
                                                    </Dropdown.Toggle>

                                                    <div className='dropdown-menu'>
                                                        {this.state.infocrumb.map((data) =>
                                                            <div>
                                                                {data.nameru != this.state.crumbcategory.nameru && (
                                                                    <Dropdown.Item href={"/category/" + data._id}>{data.nameru}</Dropdown.Item>
                                                                )}

                                                            </div>

                                                        )}

                                                    </div>
                                                </Dropdown>

                                            )
                                        } else {
                                            return (
                                                <Dropdown className="dopscrumbs maincams dropdown">
                                                    <Dropdown.Toggle variant="success" className='maindrope333 btn btn-primary dropdown-toggle' id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        {this.state.crumbcategory.nameru}
                                                    </Dropdown.Toggle>

                                                    <div className='dropdown-menu'>
                                                        {this.state.infocrumb.map((data) =>
                                                            <div>
                                                                {data.nameru != this.state.crumbcategory.nameru && (
                                                                    <Dropdown.Item href={"/category/" + data._id}>{data.nameru}</Dropdown.Item>
                                                                )}

                                                            </div>

                                                        )}

                                                    </div>
                                                </Dropdown>
                                            )
                                        }
                                    })()}
                                    {this.state.childcrumbersload == true && (
                                        <span>/</span>
                                    )}
                                    {(() => {
                                        if (this.state.childcrumbersload == true) {
                                            return (
                                                <Dropdown className="dopscrumbs maincams dropdown">
                                                    <Dropdown.Toggle variant="success" className='maindrope333 btn btn-primary dropdown-toggle' id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        {this.state.crumbchild.nameru}
                                                    </Dropdown.Toggle>

                                                    <div className='droperesr dropdown-menu'>
                                                        {this.state.apro.child.map((data) =>
                                                            <div>
                                                                {data.nameru != this.state.crumbchild.nameru && (
                                                                    <Dropdown.Item href={"/category/" + data._id}>{data.nameru}</Dropdown.Item>
                                                                )}

                                                            </div>

                                                        )}


                                                    </div>
                                                </Dropdown>

                                            )
                                        } else {

                                        }

                                    })()}
                                    /
                                    {(() => {
                                        if (this.state.childcrumbersload == true) {
                                            return (
                                                <a className={'rgconsole'}>{this.state.main.nameru}</a>
                                            )
                                        } else {
                                            return (
                                                <a className={'rgconsole'}>{this.state.main.nameru}</a>
                                            )
                                        }

                                    })()}

                                </div>

                                <Col className='nopadd cladco productblocked poducteresgkibak textpssss' xs={12}>






                                    <Row className='nootstup'>
                                        <Col className=' clasrightline classmobile' xs={12} sm={12} md={12} lg={12} xl={4}>
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

                                                        <div className='btnaddcartsrav btcustomers btnaddcartsravdet'><img src={srav}></img></div>
                                                        <div className='btnaddcartfavorite btcustomers btnaddcartfavoritedet'><img src={favorite}></img></div>
                                                    </div>

                                                    {
                                                        this.state.gala == true && (
                                                            <div onClick={this.desa} className='galamain'>
                                                                <img className='imgmyconfirm' src={process.env.REACT_APP_IMG + this.state.src.url}></img>
                                                            </div>
                                                        )
                                                    }
                                                    <button className='galerbtns' onClick={this.galer}>  <img className='imgproductdetals' src={process.env.REACT_APP_IMG + this.state.src.url}></img></button>


                                                    {this.state.maincount > 1 && (
                                                        <div className='container maincontro'>
                                                            <ImageSlider onChange={this.changeimg} maincount={this.state.maincount} images={main.image} />
                                                        </div>
                                                    )
                                                    }
                                                    {this.state.maincount <= 1 && (
                                                        <div className='nonemyconsoleser container maincontro'>
                                                            <ImageSlider onChange={this.changeimg} maincount={this.state.maincount} images={main.image} />
                                                        </div>
                                                    )
                                                    }
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
                                        <Col className='alabmobiles' xs={12} sm={12} md={12} lg={12} xl={4}>
                                            <div className='midlblock'>
                                                <p className='midletextproduct'>{main.nameru}</p>
                                                <img className='artimges' src={arti}></img>
                                                <button onClick={() => this.bufer(main.artikul)} className='articul'>Артикул</button>
                                                <button id='snerstest' value={'fdsfsdf'} className='snerstest' onClick={() => this.bufer(main.artikul)}>   {main.artikul}</button>
                                                <p className='maldesctiptiom' dangerouslySetInnerHTML={{ __html: (main.minidescriptionru) }}>

                                                </p>

                                                <div className='linebottoms'></div>

                                                {
                                                    this.state.main.meta.length > 0 && (
                                                        <div className='listharaktersmyname'>
                                                            <div className='gradientblock'></div>
                                                            {this.state.main.meta[0].map((data, idx) =>

                                                                <div >
                                                                    {data.text.t2.length > 0 && idx <= 4 && (
                                                                        <div className='types'>
                                                                            <p className='minitext'>{data.text.t1}</p>
                                                                            <p className='minitext1'>{data.text.t2}</p>


                                                                        </div>
                                                                    )
                                                                    }

                                                                </div>
                                                            )}
                                                        </div>
                                                    )
                                                }





                                            </div>

                                        </Col>
                                        <Col className='classmobilehlders' xs={12} sm={12} md={12} lg={12} xl={4}>
                                            <div className='rightblockproduct'>
                                                <div className='topers'>
                                                    <div className='groupelipse grtonamecontrolers'>
                                                        {
                                                            this.state.main.count == 0 && (
                                                                <div className='elipse awaitbtn'></div>
                                                            )
                                                        }
                                                        {
                                                            this.state.main.count > 0 && (
                                                                <div className='elipse'></div>
                                                            )
                                                        }

                                                        {
                                                            this.state.main.count == 0 && (
                                                                <span className='elipsenals awaitcount'>Ожидается</span>
                                                            )
                                                        }
                                                        {
                                                            this.state.main.count > 0 && (
                                                                <span className='elipsenals'>В наличии</span>
                                                            )
                                                        }

                                                    </div>
                                                    <img className='brandconts' src={brandico}></img>
                                                </div>
                                                <div className='linemonproduct'></div>
                                                <p className='stoimprod'>Стоимость</p>
                                                {
                                                    this.state.curen == 0 && (
                                                        <p className='titleboldcena'>По запросу</p>
                                                    )
                                                }
                                                {
                                                    this.state.curen > 0 && (
                                                        <p className='cenatopiks'>{Math.ceil(this.state.curen).toLocaleString()} сум</p>
                                                    )
                                                }



                                                {
                                                    this.state.curen > 0 && (
                                                        <div className='tik'>
                                                            <p className='tiktext'>Количество</p>

                                                            <div className='grouties'>
                                                                <button onClick={this.minus} className='btnleftminus'>-</button>
                                                                <div className='countd'>{this.state.count}</div>
                                                                <button onClick={this.plus} className='btnpls'>+</button>
                                                            </div>
                                                        </div>
                                                    )
                                                }

                                                {
                                                    this.state.curen > 0 && (
                                                        <button className='carttoproductes'><img src={cartbtn} />Добавить в корзину</button>
                                                    )
                                                }


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

                                            {
                                                this.state.main.meta.length > 0 && (
                                                    <button onClick={this.har} className={this.state.har ? 'btnactive' : 'btnactiveno'}>
                                                        Характеристики
                                                    </button>
                                                )
                                            }

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
                                                    <div dangerouslySetInnerHTML={{ __html: (main.descriptionru) }}  ></div>

                                                </Col>
                                            )
                                        }
                                        {
                                            this.state.har == true && (
                                                <Col className=' clasrightline opisanser' xs={12}>
                                                    <Row>
                                                        <Col xs={9}>


                                                            {this.state.main.meta[0].map((data, idx) =>



                                                                <div>


                                                                    <div className=''>

                                                                        {
                                                                            data.text.t2.length == 0 && (
                                                                                <div className='haeaasaas'>  <spnan className={"fdsfdsss233f"}> {data.text.t1}</spnan></div>
                                                                            )
                                                                        }


                                                                        {(() => {
                                                                            if (data.text.t2.length > 0) {
                                                                                if (Number.isInteger(idx / 2)) {
                                                                                    return (
                                                                                        <Row className='grmain'>
                                                                                            <Col className='mainlable' xs={6}>
                                                                                                <div>

                                                                                                    {data.text.t1}

                                                                                                </div>

                                                                                            </Col>

                                                                                            <Col className='mainlable' xs={6}>
                                                                                                <div>



                                                                                                    <div>

                                                                                                        {data.text.t2}
                                                                                                    </div>


                                                                                                </div>
                                                                                            </Col>

                                                                                        </Row>
                                                                                    )
                                                                                } else {
                                                                                    return (
                                                                                        <Row className=''>
                                                                                            <Col className='mainlable' xs={6}>
                                                                                                <div>

                                                                                                    {data.text.t1}

                                                                                                </div>

                                                                                            </Col>

                                                                                            <Col className='mainlable' xs={6}>
                                                                                                <div>



                                                                                                    <div>

                                                                                                        {data.text.t2}
                                                                                                    </div>


                                                                                                </div>
                                                                                            </Col>

                                                                                        </Row>
                                                                                    )
                                                                                }
                                                                            }

                                                                        })()}








                                                                    </div>

                                                                </div>
                                                            )}


                                                        </Col>

                                                    </Row>








                                                    {this.state.main.mainparams.map((data, idx) =>



                                                        <div>


                                                            <div>
                                                                <p className='textharakata'>{data.nameru}</p>
                                                                <div className=''>
                                                                    <Row>
                                                                        <Col xs={9}>
                                                                            {(() => {

                                                                                const ids = data.filter.map(o => o._id)
                                                                                const filtered = data.filter.filter(({ _id }, index) => !ids.includes(_id, index + 1))


                                                                                return (
                                                                                    <div>

                                                                                        {/* {filtered.map((data1, idx) =>

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


                                                                                        )} */}
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

export default Prdocut;
