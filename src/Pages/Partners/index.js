import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import PartnersJson from '../../Component/Json/Partners.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import './main.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Partners() {
    return (
        <>
            <div className="partners" id='partners'>
                <div className="title">
                    <span></span>
                    <h1>{PartnersJson.map(partners => partners.title)}</h1>
                </div>
                {/* full version */}
                <Swiper
                    className='partners-swiper'
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide className='partors-slide'>
                        <img src={PartnersJson.map(partners => partners.ruxsor)} alt={PartnersJson.map(partners => partners.ruxsorName)} />
                    </SwiperSlide>
                    <SwiperSlide className='partors-slide'>
                        <img src={PartnersJson.map(partners => partners.gold)} alt={PartnersJson.map(partners => partners.goldName)} />
                    </SwiperSlide>
                    <SwiperSlide className='partors-slide'>
                        <img src={PartnersJson.map(partners => partners.ruxsorRuxsor)} alt={PartnersJson.map(partners => partners.ruxsorRuxsorName)} />
                    </SwiperSlide>
                    <SwiperSlide className='partors-slide'>
                        <img src={PartnersJson.map(partners => partners.madad)} alt={PartnersJson.map(partners => partners.madadName)} />
                    </SwiperSlide>
                    <SwiperSlide className='partors-slide'>
                        <img src={PartnersJson.map(partners => partners.madad)} alt={PartnersJson.map(partners => partners.madadName)} />
                    </SwiperSlide>
                </Swiper>
                {/* mobile version */}
                <Swiper
                    className='partners-swiper-mobile'
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide className='partors-slide'>
                        <img src={PartnersJson.map(partners => partners.ruxsor)} alt={PartnersJson.map(partners => partners.ruxsorName)} />
                    </SwiperSlide>
                    <SwiperSlide className='partors-slide'>
                        <img src={PartnersJson.map(partners => partners.gold)} alt={PartnersJson.map(partners => partners.goldName)} />
                    </SwiperSlide>
                    <SwiperSlide className='partors-slide'>
                        <img src={PartnersJson.map(partners => partners.ruxsorRuxsor)} alt={PartnersJson.map(partners => partners.ruxsorRuxsorName)} />
                    </SwiperSlide>
                    <SwiperSlide className='partors-slide'>
                        <img src={PartnersJson.map(partners => partners.madad)} alt={PartnersJson.map(partners => partners.madadName)} />
                    </SwiperSlide>
                    <SwiperSlide className='partors-slide'>
                        <img src={PartnersJson.map(partners => partners.madad)} alt={PartnersJson.map(partners => partners.madadName)} />
                    </SwiperSlide>
                </Swiper>
                {/* planete version */}
                <Swiper
                    className='partners-swiper partners-swiper-planete'
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={20}
                    slidesPerView={2}
                    navigation
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide className='partors-slide'>
                        <img src={PartnersJson.map(partners => partners.ruxsor)} alt={PartnersJson.map(partners => partners.ruxsorName)} />
                    </SwiperSlide>
                    <SwiperSlide className='partors-slide'>
                        <img src={PartnersJson.map(partners => partners.gold)} alt={PartnersJson.map(partners => partners.goldName)} />
                    </SwiperSlide>
                    <SwiperSlide className='partors-slide'>
                        <img src={PartnersJson.map(partners => partners.ruxsorRuxsor)} alt={PartnersJson.map(partners => partners.ruxsorRuxsorName)} />
                    </SwiperSlide>
                    <SwiperSlide className='partors-slide'>
                        <img src={PartnersJson.map(partners => partners.madad)} alt={PartnersJson.map(partners => partners.madadName)} />
                    </SwiperSlide>
                    <SwiperSlide className='partors-slide'>
                        <img src={PartnersJson.map(partners => partners.madad)} alt={PartnersJson.map(partners => partners.madadName)} />
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}
