import React, { useState } from 'react';
import { NavLink } from 'react-bootstrap';
import NavbarJson from '../../Component/Json/Navbar.json';
import './main.css';

export default function Navbar() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);

    return (
        <>
            <div className="navbar d-flex row justify-content-around align-items-center" id='navbar'>
                <div className={click ? "main-container" : ""} onClick={() => Close()} />
                <div className="navbar-logo col-xxl-2 col-xl-2 col-lg-2 col-mg-4 col-sm-10 col-10">
                    <img src={NavbarJson.map(navbar => navbar.logo)} alt="error" />
                    <span>PREMIUM</span>
                </div>
                <nav className="navbar-menu col-xxl-9 col-xl-9 col-lg-9 col-md-7 col-sm-0 col-0" onClick={e => e.stopPropagation()}>
                    <div className="nav-container">
                        <ul className={click ? 'd-flex align-items-center justify-content-evenly nav-menu active' : 'nav-menu'}>
                            <li className="nav-item">
                                <NavLink
                                    href='#header'
                                    activeClassName="active"
                                    className="nav-links"
                                    onClick={click ? handleClick : null}
                                >
                                    {NavbarJson.map(navbar => navbar.Basic)}
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    href='#about'
                                    activeClassName="active"
                                    className="nav-links"
                                    onClick={click ? handleClick : null}
                                >
                                    {NavbarJson.map(navbar => navbar.About)}
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    href='#benefits'
                                    activeClassName="active"
                                    className="nav-links"
                                    onClick={click ? handleClick : null}
                                >
                                    {NavbarJson.map(navbar => navbar.Benefits)}
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    href='#thoughts'
                                    activeClassName="active"
                                    className="nav-links"
                                    onClick={click ? handleClick : null}
                                >
                                    {NavbarJson.map(navbar => navbar.Thoughts)}
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    href='#partners'
                                    activeClassName="active"
                                    className="nav-links"
                                    onClick={click ? handleClick : null}
                                >
                                    {NavbarJson.map(navbar => navbar.Parners)}
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    href='#connect'
                                    activeClassName="active"
                                    className="nav-links"
                                    onClick={click ? handleClick : null}
                                >
                                    {NavbarJson.map(navbar => navbar.Conect)}
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div
                        className="nav-icon"
                        onClick={handleClick}>
                        <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
                    </div>
                </nav>
                <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-0 col-0 none"></div>
            </div>
        </>
    );
}