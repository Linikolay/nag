
import React, { Component } from 'react';

import { Navbar, Form, Nav, Container, NavDropdown, FormGroup, FormControl, Button, Dropdown } from 'react-bootstrap';
import logo from '../img/logo.svg';
import { BrowserRouter as Link, Route, Routes } from 'react-router-dom'
import reg from '../img/reg.svg';
import cart from '../img/cart.svg';
import favorite from '../img/favorite.svg';
import start from '../img/start.svg';
import seaicobn from '../img/seaicobn.svg';


import 'bootstrap/dist/css/bootstrap.min.css';


class Headers extends Component {
    constructor(props) {
        super()
        this.state = {
            sle: "",
            searchlist: [],
            nolist: false,
            search: false,
            isLoad: false
        }
        this.search = this.search.bind(this);
        this.funsss = this.funsss.bind(this);


    }
    focused = e => {
        console.log(e.target.value)
        if (this.state.searchlist.data != undefined) {
            if (this.state.searchlist.data.length > 0) {
                this.setState({
                    search: true
                })
            } else {

            }
        }


    }

    search = e => {
        console.log(e.target.value)
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },

        };
        fetch( process.env.REACT_APP_BASE_URL+'/auth/search?text=' + e.target.value, requestOptions)
            .then((response) => response.json())

            .then(data => {
                console.log(data)
          
                    this.setState({
                        searchlist: data,
                        categorysearch: data.categorysearch,
                        search: true
                    })
              
            }
            )


            .catch((error) => {
                console.error(error);
            });
    }

    componentDidMount() {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

            })
        };
        fetch(process.env.REACT_APP_BASE_URL+'/auth/getOneCategorysControllers', requestOptions)
            .then((response) => response.json())

            .then(data => {
                this.setState({

                    category: data.data,
                    isLoad: true
                })
            }
            )


            .catch((error) => {
                console.error(error);
            });




        this.funsss()
        document.addEventListener("click", (e) => {
            
            if (e.target.className == "searchform form-control") {

            } else {
                this.setState({
                    search: false
                })

            }
        });
    }
    funsss = () => {

    }


    render() {
        const { isLoad } = this.state
        if (!isLoad) {
            return(
                <div></div>
            )
        } else {
            return (
                <div className="page-wrap">
                    <div className="main-body">

                        <Navbar bg="light" expand="lg">
                            <Container>
                                <Navbar.Brand href="/"><img src={logo} />
                                    <div className='grtextlogo'>
                                        <p className='textlogo textlogonoew'>Сетевое и </p>
                                        <p className='textlogo textlogonoew'> телекоммуникационное </p>
                                        <p className='textlogo textlogonoew'>оборудование</p>
                                    </div>
                                 
         
                                </Navbar.Brand>
       
                                <div className='grtextlogo0'>
                                 <a href={"tel:+998712058585"}> <p className='textlogo tel'>998 (71) 205-85-85 </p> </a>   
                                    <p className='textlogo date'> Пн-Сб 09:00-18:00 </p>

                                </div>

    
                                <FormGroup className='contrtopbars'>
                                    <FormControl onFocus={this.focused} className='searchform' onChange={this.search} type="text" placeholder="Например: Управляемый коммутатор " ></FormControl>
                                    {
                                        this.state.search == true && (
                                            <div className='mainlst'>

                                        {
                                        this.state.categorysearch.length>0&&(
                                            <div>
                                       
                                  
                                                {this.state.categorysearch.map((data) =>
                                                    <a href={'/category/' + data._id} dangerouslySetInnerHTML={{ __html: (data.nameru) }} className='product_listr3r3r'>
                                                     
                                                   
                                                    </a>
                                                )}

                                                        </div>
                                                    )
                                                }


                                                {
                                                    this.state.searchlist.data.length > 0 && (
                                                        <div className='searchproductdiv'>
                                                     
                                                         
                                                            {this.state.searchlist.data.map((data) =>
                                                                <a href={'/view/' + data._id} className='product_listr3r3r3'>
                                                                    {/* <img className='searchimg' src={process.env.REACT_APP_IMG + data.image[0].url}></img>   */}
                                                                    
                                                                      {data.nameru}
                                                                    {/* <p dangerouslySetInnerHTML={{ __html: (data.minidescriptionru) }}></p> */}
                                                                </a>
                                                            )}
                                                        </div>
                                                    )
                                                }
                                              

                                            </div>
                                        )
                                    }


                                    <img className='icosearch' src={seaicobn}></img>
                                </FormGroup>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
                                    <div className='blocknoneres'>




                                        {this.state.category.map((data, id) =>
                                            <a key={data._id} href={"category/" + data._id} className='maincatersheader'>
                                                {/* <img  className='imgtemp' src={data.icon} /> */}
                                                <div key={data.icon} className='blockcater'>
                                                    <p key={data.nameru} className='textcategory'>{data.nameru}</p>
                                                </div>
                                            </a>
                                        )}

                                    </div>
                                    <Nav className="me-auto">
                                        <Nav.Link className='rgtopbuttn' href="#home"><img src={start} />Сравнение</Nav.Link>
                                        <Nav.Link className='rgtopbuttn' href="#home"><img src={favorite} />Избранное</Nav.Link>
                                        <Nav.Link className='rgtopbuttn' href="#home"><img src={cart} />Корзина</Nav.Link>
                                        <Nav.Link className='rgtopbuttn regbtn' href="#home"><img src={reg} />Войти</Nav.Link>
                                        {/* <NavDropdown title="Ру" id="basic-nav-dropdown">

                                        <NavDropdown.Item href="#action/3.2">Uz</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Uz</NavDropdown.Item>
                                     
                                    </NavDropdown> */}
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>




                    </div></div>
            )
        }

    }
}
export default Headers
