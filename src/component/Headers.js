
import React, { Component } from 'react';

import { Navbar, Nav, Container, NavDropdown, FormGroup, FormControl, Button } from 'react-bootstrap';
import logo from '../img/logo.svg';

import reg from '../img/reg.svg';
import cart from '../img/cart.svg';
import favorite from '../img/favorite.svg';
import  start from '../img/start.svg';
import 'bootstrap/dist/css/bootstrap.min.css';


class Headers extends Component {
    render() {

        return (
            <div className="page-wrap">
                <div className="main-body">


                    <Navbar bg="light" expand="lg">
                        <Container>
                            <Navbar.Brand href="#home"><img src={logo}/>
                            <div className='grtextlogo'>
                            <p className='textlogo textlogonoew'>Сетевое и </p>
                            <p className='textlogo textlogonoew'> телекоммуникационное </p>
                            <p className='textlogo textlogonoew'>оборудование</p>
                            </div>
                            <div className='grtextlogo0'>
                            <p className='textlogo tel'>998 (97) 777-70-60 </p>
                            <p className='textlogo date'> Пн-Пт 09:00-18:00 </p>
                          
                            </div>
                            </Navbar.Brand>
                            <FormGroup>
        <FormControl className='searchform' type="text" placeholder="Например: Управляемый коммутатор " />
      </FormGroup>{' '}
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse className='justify-content-end'  id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link className='rgtopbuttn' href="#home"><img src={start}/>Сравнение</Nav.Link>
                                    <Nav.Link className='rgtopbuttn' href="#home"><img src={favorite}/>Избранное</Nav.Link>
                                    <Nav.Link className='rgtopbuttn' href="#home"><img src={cart}/>Корзина</Nav.Link>
                                    <Nav.Link className='rgtopbuttn regbtn' href="#home"><img src={reg}/>Войти</Nav.Link>
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
export default Headers
