'use client'


import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import style from './Mobile.module.css';

// import required modules
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';
import Gt from '../Gt';
import TicTacToe from '../TicTacToe';
import Taski from '../Taski';
import GifApp from '../GifApp';
import Api from '../Api';


export default function Mobile() {
  return (
    <div className={style.mobile_container}>
      <Swiper
        effect={'flip'}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className={style.mySwiper}
      >
        <SwiperSlide>
            <Gt/>
        </SwiperSlide>
        <SwiperSlide>
            <Api/>
        </SwiperSlide>
        <SwiperSlide>
          <TicTacToe/>
        </SwiperSlide>
        <SwiperSlide>
          <Taski/>
        </SwiperSlide>
        <SwiperSlide>
          <GifApp/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}