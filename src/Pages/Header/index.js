import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import HeaderJson from '../../Component/Json/Header.json';
import './main.css';

export default function Header() {
    return (
        <>
            <div className="header" id='header'>
                <header className='row'>
                    <div className="header-left col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <h1>
                            {HeaderJson.map(header => header.title)}
                        </h1>
                        <p>
                            {HeaderJson.map(header => header.paragraph)}
                        </p>
                        <Router>
                            <NavLink to='/shopping'>
                                XARID QILISH
                            </NavLink>
                        </Router>
                    </div>
                    <div className="header-right col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <img src={HeaderJson.map(Header => Header.image0)} className="header-image-right" alt="error" />
                        <img src={HeaderJson.map(Header => Header.image1)} className="header-image-left" alt="error" />
                    </div>
                </header>
            </div>
        </>
    )
}
