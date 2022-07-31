import React from 'react';
import { NavLink } from 'react-bootstrap';
// import { BsFacebook } from 'react-icons/bs';
// import { SiYoutubemusic } from 'react-icons/si';
import { FaInstagram, FaTelegram } from 'react-icons/fa';
import FooterJson from '../../Component/Json/Footer.json';
import './main.css';
export default function Footer() {

    return (
        <>
            <div className="footer row">
                <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 footer-logo">
                    <img src={FooterJson.map(footer => footer.logo)} alt="error" />
                    <span>{FooterJson.map(footer => footer.premium)}</span>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 footer-help">
                    <p>
                        {FooterJson.map(footer => footer.text)}
                    </p>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 footer-href">
                    <NavLink href={'https://www.instagram.com/p/Cc-OdhlqdH3/?igshid=YmMyMTA2M2Y'} target="_blank">
                        {/* <img src={FooterJson.map(footer => footer.instagram)} alt="error" /> */}
                        <FaInstagram className='icon' />
                    </NavLink>
                    <NavLink href="https://t.me/Hasana_vitamin_detox" target="_blank">
                        {/* <img src={FooterJson.map(footer => footer.telegram)} alt="error" /> */}
                        <FaTelegram className='icon' />
                    </NavLink>
                    {/* <NavLink href="#">
                        <img src={FooterJson.map(footer => footer.youtube)} alt="error" />
                        <SiYoutubemusic className='icon' />
                    </NavLink> */}
                    {/* <NavLink href="#">
                        <img src={FooterJson.map(footer => footer.facebook)} alt="error" />
                        <BsFacebook className='icon' />
                    </NavLink> */}
                </div>
                <p className='text-white text-center'>© Created by WebShohDev</p>
            </div>
        </>
    )
}