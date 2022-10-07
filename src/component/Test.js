
import React, { Component, lazy } from 'react';
import { Container, Row, Col, NavLink, Breadcrumb, Dropdown } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom'

const STEP = 10000;
const MIN = 0;
const MAX = 500000;
const COLORS = ["rgba(0, 0, 0, 0.00)", " #0A8ED8", "rgba(0, 0, 0, 0.00)"];
const COLORS2 = ["rgba(0, 0, 0, 0.00)", " rgba(0, 0, 0, 0.00)", "rgba(0, 0, 0, 0.00)"];
class Test extends Component {
    constructor(props) {
        super()
        this.state = {
            isLoad: false,
            values: [0, 500000],
            categories: "",
            main: "",
            activepage: 1,
            brandfilter: [],
            count: "",
            all: false,
            breadchild: "",
            favor: "",
            main: '',
            cart: "",
            breadcat: "",
            get: false,
            pops: false,
            banload: true,
            catload: true,
            cenload: true,
            tipload: true,
            mini: ''
        }

    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }



    componentDidMount() {


        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },

        };
        fetch("http://192.168.100.14:5000", requestOptions)
            .then((response) => response.json())

            .then(data => {
                console.log(data)
                this.setState(
                    {
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
        const { isLoad } = this.state

        if (!isLoad) {
            return (
                <div className='defaultheruslan'>

                </div>
            )
        } else {
            return (
                <div className="page-wrap">
                    {console.log(this.state.main)}
                    /////////
                    {this.state.main.test.СписокЗаказов.Заказ.map((data) =>
                        <div>

                            {(() => {
                                if (data.Менеджер._text == 'URUNBAYEV DJASUR DAVLATOVICH' && data.ПроцентОтгрузки._text == '100') {
                                    return (
                                        <span>{data.Документ._text}

                                        </span>
                                    )
                                }
                            })()}


                            

                        </div>
                    )}
                    /////////
{this.state.main.test.СписокЗаказов.Заказ.map((data) =>
                        <div>

                         

                            {(() => {
                                if (data.Менеджер._text == 'URUNBAYEV DJASUR DAVLATOVICH' && data.ПроцентОтгрузки._text == '100') {
                                    return (
                                        <span>{data.Договор._text}

                                        </span>
                                    )
                                }
                            })()}

                         

                        </div>
                    )}
/////////
                    {this.state.main.test.СписокЗаказов.Заказ.map((data) =>
                        <div>

                         

                            {(() => {
                                if (data.Менеджер._text == 'URUNBAYEV DJASUR DAVLATOVICH' && data.ПроцентОтгрузки._text == '100') {
                                    return (
                                        <span>{data.Контрагент._text}

                                        </span>
                                    )
                                }
                            })()}

                         

                        </div>
                    )}
/////////
                    {this.state.main.test.СписокЗаказов.Заказ.map((data) =>
                        <div>

                         
                            {(() => {
                                if (data.Менеджер._text == 'URUNBAYEV DJASUR DAVLATOVICH' && data.ПроцентОтгрузки._text == '100') {
                                    return (
                                        <span>{data.СуммаДокумента._text}

                                        </span>
                                    )
                                }
                            })()}

                        </div>
                    )}

                </div>
            )
        }

    }
}

export default Test;
