import React from 'react';
import './main.css';

export default function BenefitsPages({item}) {
    return (
        <>
            <div className="benefits-page">
                <img src={item.img} alt="error" />
                <h1>{item.title}</h1>
                <p>{ item.text }</p>
            </div>
        </>
    )
}
