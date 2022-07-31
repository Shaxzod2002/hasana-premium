import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ThoughtsJson from '../../Component/Json/Thoughts.json';
import './main.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Thoughts() {
    return (
        <>
            <div className="thoughts" id='thoughts'>
                <div className="title">
                    <span></span>
                    <h1>Mijozlarimiz fikrlari</h1>
                </div>
                {/* full version */}
                <Swiper
                    className='swiper-container'
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={30}
                    slidesPerView={4}
                    navigation
                    pagination={{ clickable: true }}>
                    {
                        ThoughtsJson.map(item =>
                            <SwiperSlide className="thoughts-page" item={item} key={item.id}>
                                <img src={item.icon} alt="logo" />
                                <p>{item.text}</p>
                                <img className='thoughts-image' src={item.img} alt={item.name} />
                                <p className='item-title'>{item.name}</p>
                            </SwiperSlide>)
                    }
                </Swiper>
                {/* mobile version */}
                <Swiper
                    className='swiper-container swiper-mobile'
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                >
                    {
                        ThoughtsJson.map(item =>
                            <SwiperSlide className="thoughts-page" item={item} key={item.id}>
                                <img src={item.icon} alt="logo" />
                                <p className='paragraph'>{item.text}</p>
                                <img className='thoughts-image' src={item.img} alt={item.name} />
                                <p className='item-title'>{item.name}</p>
                            </SwiperSlide>)
                    }
                </Swiper>
                {/* flange version */}
                <Swiper
                    className='swiper-container swiper-flange'
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={20}
                    slidesPerView={2}
                    navigation
                >
                    {
                        ThoughtsJson.map(item =>
                            <SwiperSlide className="thoughts-page" item={item} key={item.id}>
                                <img src={item.icon} alt="logo" />
                                <p className='paragraph'>{item.text}</p>
                                <img className='thoughts-image' src={item.img} alt={item.name} />
                                <p className='item-title'>{item.name}</p>
                            </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </>
    )
}
