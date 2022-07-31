import React from 'react';
import BenefitsJson from '../../Component/Json/Benefits.json';
import BenefitsPages from './Benefits Pages/index';
import './main.css';

export default function Benefits() {
    return (
        <>
            <div className="benefits" id='benefits'>
                <div className="benefits-container">
                    <div className="title">
                        <span></span>
                        <h1>Foydalari</h1>
                    </div>
                    <div className="benefits-pages">
                        {
                            BenefitsJson.map(item => <BenefitsPages item={item} key={item.id} />)
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
