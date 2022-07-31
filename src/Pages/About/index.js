import React from 'react';
import AboutJson from '../../Component/Json/About.json';
import './main.css';

export default function About() {
    return (
        <>
            <div className="about row" id='about'>
                <div className="about-left col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
                    <div className="title">
                        <span></span>
                        <h1>{AboutJson.map(about => about.title)}</h1>
                    </div>
                    <p>{AboutJson.map(about => about.paragraph)}</p>
                    <div className="content">
                        <p>{ AboutJson.map(about => about.content)}</p>
                    </div>
                </div>
                <div className="about-right col-6">
                    <img src={ AboutJson.map(about => about.img)} alt="error" />
                </div>
            </div>
        </>
    )
}
