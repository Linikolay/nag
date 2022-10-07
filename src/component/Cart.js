
import React, { Component, lazy } from 'react';
import { Container, Row, Col, NavLink, Breadcrumb } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link, useHistory } from 'react-router-dom'
import aboimg from '../img/aboimg.png';
import logoser from '../img/logoser.svg';
import headsss from '../component/Headers'
import InputMask from 'react-input-mask';
import trash from '../img/trash.svg';
import '../App.css'
import "bootstrap/dist/css/bootstrap.min.css"


class Cart extends Component {
    constructor(props) {
        super()
        this.state = {
            sle: "",
            maindata: "",
            phone:'',
            bag0: false,
            fio: '',
            bag1: false,
            bag2: false,
            bag3: false,
            bag4: false,
            bag5: false,
            bag6: false,
            bag7: false,
            bag8: false,
            alldata: "",
            isLoad: false,
        }
    }
    minus = e => {
        let magg = this.state.maindata
        for (var i = 0; i < magg.length; i++) {
            console.log(magg[i].artikul)
            console.log(e.artikul)
            if (magg[i].artikul == e.artikul) {

                magg[i].count = magg[i].count - 1
                console.log(magg[i].count)
            }
        }
        this.setState({
            maindata: magg
        })


        const totalAmount = magg.reduce(
            // Аргумент sum является аккумулятором,
            // в нём храним промежуточное значение
            function (sum, currentAccount) {
                // Каждую итерацию берём текущее значение
                // и складываем его с количеством денег
                // на текущем счету
                return sum + currentAccount.sum * currentAccount.count
            },
            0 // Начальное значение аккумулятора
        )
        this.setState({
            alldata: totalAmount
        })
        console.log(totalAmount)
    }
    plus = e => {

        let magg = this.state.maindata
        for (var i = 0; i < magg.length; i++) {
            console.log(magg[i].artikul)
            console.log(e.artikul)
            if (magg[i].artikul == e.artikul) {

                magg[i].count = magg[i].count + 1
                console.log(magg[i].count)
            }
        }
        this.setState({
            maindata: magg
        })


        const totalAmount = magg.reduce(
            // Аргумент sum является аккумулятором,
            // в нём храним промежуточное значение
            function (sum, currentAccount) {
                // Каждую итерацию берём текущее значение
                // и складываем его с количеством денег
                // на текущем счету
                return sum + currentAccount.sum * currentAccount.count
            },
            0 // Начальное значение аккумулятора
        )
        this.setState({
            alldata: totalAmount
        })
        console.log(totalAmount)
    }
    componentDidMount() {
        if (localStorage.getItem('cart') == undefined) {

        } else {
            if (localStorage.getItem('cart').length > 0) {
                let gala = JSON.parse(localStorage.getItem('cart'))
                for (var i = 0; i < gala.length; i++) {
                    gala[i].count = 1
                }

                this.setState({
                    maindata: gala,
                    isLoad: true
                })

                const totalAmount = gala.reduce(
                    // Аргумент sum является аккумулятором,
                    // в нём храним промежуточное значение
                    function (sum, currentAccount) {
                        // Каждую итерацию берём текущее значение
                        // и складываем его с количеством денег
                        // на текущем счету
                        return sum + currentAccount.sum * currentAccount.count
                    },
                    0 // Начальное значение аккумулятора
                )
                this.setState({
                    alldata: totalAmount
                })
                console.log(totalAmount)
            }
        }

    }
    phone = e => {
      
        var mystr = e.target.value
  
        this.setState({
            phone: e.target.value
        })
       var bage =  mystr.replace(/\s+/g, '')
       var letterNumber = /^[0-9a-zA-Z]+$/;
       var mgarr = bage.split('')
        if ((mgarr[0].match(letterNumber))) {
            this.setState({
                bag0: true
            })
        } else {
            this.setState({
                bag0: false
            })
        }

        if ((mgarr[1].match(letterNumber))) {
            this.setState({
                bag1: true
            })
        } else {
            this.setState({
                bag1: false
            })
        }

        if ((mgarr[2].match(letterNumber))) {
            this.setState({
                bag2: true
            })
        } else {
            this.setState({
                bag2: false
            })
        }

        if ((mgarr[3].match(letterNumber))) {
            this.setState({
                bag3: true
            })
        } else {
            this.setState({
                bag3: false
            })
        }

        if ((mgarr[4].match(letterNumber))) {
            this.setState({
                bag4: true
            })
        } else {
            this.setState({
                bag4: false
            })
        }

        if ((mgarr[5].match(letterNumber))) {
            this.setState({
                bag5: true
            })
        } else {
            this.setState({
                bag5: false
            })
        }
        if ((mgarr[6].match(letterNumber))) {
            this.setState({
                bag6: true
            })
        } else {
            this.setState({
                bag6: false
            })
        }
        if ((mgarr[7].match(letterNumber))) {
            this.setState({
                bag7: true
            })
        } else {
            this.setState({
                bag7: false
            })
        }
        if ((mgarr[8].match(letterNumber))) {
            this.setState({
                bag8: true
            })
        } else {
            this.setState({
                bag8: false
            })
        }
        






      
    }
    buy = e =>{
        console.log(this.state.maindata)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                product: this.state.maindata,
                fio: this.state.fio,
                phone: this.state.phone
            })
        };
        fetch(process.env.REACT_APP_BASE_URL + '/auth/order', requestOptions)
            .then((response) => response.json())

            .then(data => {

                console.log(data)
            }
            )


            .catch((error) => {
                console.error(error);
            });



    }
    fio = e => {
        this.setState({
            fio: e.target.value
        })
    }
    hea = e => {
        <headsss data={'897459847598'} />
    }
    render() {

        if (!this.state.isLoad) {
            return (
               <div className='nocardt'>
                 <p>Тут не чего нету</p>
               </div>
            )
        } else {
            return (
                <div className="page-wrap mincart">
                    <div className="main-body">


                        <Container className='controlerspadr'>
                            <Breadcrumb className='breadr'>
                                <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
                                <Breadcrumb.Item active>
                                    Категории
                                </Breadcrumb.Item>

                            </Breadcrumb>
                            <Row className='norow'>


                                <Col className='nopadd' xs={6} sm={6} md={6} lg={6} xl={8}>

                                    <table cellPadding={20} className='tableinoger'>
                                        <thead className='carttopblock'>
                                            <tr>

                                                <th> Наименование и фото товара</th>

                                                <th> Цена </th>
                                                <th> Кол-во </th>

                                                <th> Общая сумма </th>
                                                <th> </th>
                                            </tr>
                                        </thead>
                                        <tbody className='mainbgwhite'>
                                            {this.state.maindata.map((data) =>
                                                <tr>
                                                    <td className='tdlayod'>
                                                        <img className='imgcart' src={data.img[0]}></img><span className='cartname'>  {data.nameru}</span>
                                                    </td>
                                                    <td>
                                                        {data.sum.toLocaleString()}
                                                    </td>
                                                    <td>
                                                        {
                                                            data.count == 1 && (
                                                                <button className='plusminus'>-</button>
                                                            )
                                                        }
                                                        {
                                                            data.count > 1 && (
                                                                <button onClick={() => this.minus(data)} className='plusminus'>-</button>
                                                            )
                                                        }
                                                        <span className='cartfrom'>{data.count}</span>
                                                        <button onClick={() => this.plus(data)} className='plusminus'>+</button>
                                                    </td>
                                                    <td>

                                                        {(() => {
                                                             let tula = data.sum * data.count 
                                                          
                                                             return(
                                                                <span>{tula.toLocaleString()}</span>
                                                             )
                                                        })()}
                                                       
                                                    </td>
                                                    <td>
                                                        <button className='trash'><img src={trash} /></button>
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </Col>
                                <Col className='nopadd' xs={6} sm={6} md={6} lg={4} xl={4}>
                                  
                                    <div className='itogcart'>
                                    <div>
                                        <input className='fiopatern' onChange={this.fio} type="text" placeholder='Фио'></input>
                             
                                        <InputMask className='phonemask'   onChange={this.phone} value={this.state.phone} placeholder='99 999 99 99' mask="99 999 99 99" />
                                    </div>
                                        <p className='itogtext'>Итого</p>
                                        <div className='subitog'>
                                            <p className='stoim'>Стоимость</p>
                                            <p className='vsego'>Всего</p>
                                        </div>
                                        <div className='subitog1'>
                                            <p className='stoimsotim'>{this.state.alldata.toLocaleString()} сум</p>
                                            <p className='stoimalltext'>{this.state.alldata.toLocaleString()} сум</p>
                                        </div>

                                        {(() => {
                                            if (
                                                this.state.bag0 == true &&
                                                this.state.bag1 == true &&
                                                this.state.bag2 == true &&
                                                this.state.bag3 == true &&
                                                this.state.bag4 == true &&
                                                this.state.bag5 == true &&
                                                this.state.bag6 == true &&
                                                this.state.bag7 == true &&
                                                this.state.bag8 == true &&
                                                this.state.fio.length > 0 
                                            ) {
                                                return (
                                                    <button onClick={this.buy} className='orederbuy'>Оформить Заказ</button>
                                                )
                                            } else {
                                                return (
                                                    <button className='orederbuydis'>Оформить Заказ</button>
                                                )
                                            }
                                        })()}



                                       
                                    </div>
                                </Col>


                            </Row>




                        </Container>


                    </div></div>
            )
        }

    }
}

export default Cart;
