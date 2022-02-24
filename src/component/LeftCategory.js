
import React, { Component, lazy } from 'react';
import { Container, Row, Col, NavLink } from 'react-bootstrap';

import komutator from '../img/komutator.svg';
import allcategory from '../img/allcategory.svg';
import mediaconverter from '../img/mediaconvert.svg';
import optical from '../img/optical.svg';
import sfp from '../img/sfp.svg';
import usb from '../img/usb.svg';
import voip from '../img/voip.svg';
import next from '../img/next.svg';
import router from '../img/router.svg';

import "bootstrap/dist/css/bootstrap.min.css"

class LeftCategory extends Component {
    render() {

        return (
            <div className="page-wrap catereseed1">
                <div className="main-body">
                    <NavLink className='blockcatersrre'>
                        <img className='imgtemp' src={komutator} />
                        <div className='blockcater'>
                            <p className='textcategory'>Коммутаторы</p>
                            <p className='brandcategory'>SNR, MikroTik, Ubiquiti, Powertone</p>
                        </div>
                        <img className='nextcateg' src={next} />


                    </NavLink>

                    <NavLink className='blockcatersrre'>
                        <img className='imgtemp' src={router} />
                        <div className='blockcater'>
                            <p className='textcategory'>Маршруторизаторы</p>
                            <p className='brandcategory'>SNR, MikroTik</p>
                        </div>
                        <img className='nextcateg' src={next} />

                    </NavLink>
                    <NavLink className='blockcatersrre'>


                        <img className='imgtemp' src={usb} />
                        <div className='blockcater'>
                            <p className='textcategory'>Оптические кабели</p>
                            <p className='brandcategory'>FTTH, канализационный, подвесной, распределительный </p>
                        </div>
                        <img className='nextcateg' src={next} />



                    </NavLink>
                    <NavLink className='blockcatersrre'>



                        <img className='imgtemp' src={mediaconverter} />
                        <div className='blockcater'>
                            <p className='textcategory'>Медиаконвертеры</p>
                            <p className='brandcategory'>Оптические медиаконвертеры</p>
                        </div>
                        <img className='nextcateg' src={next} />



                    </NavLink>
                    <NavLink className='blockcatersrre' >
                        <img className='imgtemp' src={sfp} />
                        <div className='blockcater'>
                            <p className='textcategory'>Коммутаторы</p>
                            <p className='brandcategory'>SNR, MikroTik, Ubiquiti, Powertone</p>
                        </div>
                        <img className='nextcateg' src={next} />

                    </NavLink>

                    <NavLink className='blockcatersrre' >
                        <img className='imgtemp' src={optical} />
                        <div className='blockcater'>
                            <p className='textcategory'>Модули SFP</p>
                            <p className='brandcategory'>Small Form factor Pluggable</p>
                        </div>
                        <img className='nextcateg' src={next} />

                    </NavLink>

                    <NavLink className='blockcatersrre'>
                    <img className='imgtemp' src={voip} />
                    <div className='blockcater'>
                        <p className='textcategory'>VoIP и телефония</p>
                        <p className='brandcategory'>IP-Телефоны, системы ВКС, абонентские шлюзы и др.
                        </p>
                    </div>
                    <img className='nextcateg' src={next} />
            



                </NavLink>
                </div>

                <NavLink className='botallcateg'>
                        <img src={allcategory} />
                        <span className='botallcategtext'>Показать все категории</span>
                    </NavLink>
            </div>
        )
    }
}

export default LeftCategory;
