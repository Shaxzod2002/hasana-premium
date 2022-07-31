import React from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FiPhoneCall } from 'react-icons/fi';
import { TbTruckDelivery } from 'react-icons/tb';
import './main.css';
import { NavLink } from 'react-bootstrap';

export default function Connect() {
    return (
        <>
            <div className="connect" id='connect'>
                <div className="connect-container">
                    <div className="row contact">
                        <div className="connect-left col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="title">
                                <span></span>
                                <h1>Bog‘lanish</h1>
                            </div>
                            <div className="location">
                                <HiOutlineLocationMarker className='icon' />
                                <div>
                                    <NavLink href="#">
                                        Farg‘ona viloyati, Marg‘ilon shahar,
                                        Mustaqillik ko‘chasi, 65-uy
                                    </NavLink>
                                </div>
                            </div>
                            <div className="phone">
                                <FiPhoneCall className='icon' />
                                <div>
                                    <NavLink href="tel:+998996009966">
                                        +998 (99) 600 99-66
                                    </NavLink> <br />
                                    <NavLink href="tel:+998999009966">
                                        +998 (99) 900 99-66
                                    </NavLink>
                                </div>
                            </div>
                            <div className="delivery">
                                <TbTruckDelivery className='icon' />
                                <div>
                                    <NavLink href="#">
                                        Respublika bo‘yicha yetkazib <br />
                                        berish xizmati mavjud!
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="connect-right col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="log-in">
                                <h2>Savol va takliflar</h2>
                                <p>
                                    Quyidagi forma orqali savollaringizni yo‘llang.
                                    Tez orada javob beriladi!
                                </p>
                                <form action="" method="post">
                                    <textarea name="contact" id="contact" cols="50" rows="5" placeholder="Contact"></textarea>
                                    <input type="text" name='fullname' id="fullname" placeholder="To'liq Ismingizni kiriting:" />
                                    <input type="tel" name="tel" id="tel" placeholder="Raqamingiz:" />

                                    <input type="submit" value="Yuborish" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
