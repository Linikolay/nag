
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
            loadcont:false,
            loadcart: false,
            cart: '',
            counttr: '',
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
    clicked = e =>{
        console.log("headddddd")
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
        setInterval(() => {
   
            if(JSON.parse(localStorage.getItem('favor')) != undefined){
                this.setState({
                    counttr: JSON.parse(localStorage.getItem('favor')).length,
                    loadcont: true
                })
            }else{

            }
         
            if(JSON.parse(localStorage.getItem('cart')).length>0){
                this.setState({
                    cart: JSON.parse(localStorage.getItem('cart')).length,
                    loadcart: true
                })
            }

          
            
          }, 1000);
      
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
            <div>
                
            </div>
            )
        }

    }
}
export default Headers
