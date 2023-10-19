'use client'

import React, { useRef, useState } from 'react'
import style from './Tecnologias.module.css'

import html from './assets/html.svg'
import css from './assets/css.svg'
import js from './assets/js.svg'
import ts from './assets/ts.svg'
import react from './assets/react.svg'
import next from './assets/next2.svg'
import tailwind from './assets/tailwind.svg'
import node from './assets/node.svg'
import redux from './assets/redux.svg'
import angular from './assets/angular.svg'
import postgres from './assets/postgres.svg'
import Image from 'next/image'


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Autoplay } from 'swiper/modules';




const Tecnologias = () => {
  return (
    <div>
        <h2 className={style.titleSec}>Tecnologias y Frameworks</h2>

        <div id='tecnologias' className={style.tecnologias}>
            
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    modules={[ Autoplay]}
                    className={style.mySwiper}
                    loop={true}
                    breakpoints={{                                        
                        500: {
                          slidesPerView: 2,
                        },
                        714: {
                          slidesPerView: 3,
                        },
                        1036:{
                            slidesPerView: 4,
                        },
                        1340:{
                            slidesPerView: 5,
                        },
                        1570:{
                            slidesPerView: 6,
                        },
                        1834:{
                            slidesPerView: 7
                        }
                      }}
                    >
                    <SwiperSlide className={style.swiper_slide}>
                        <div className={style.tecnologia}>
                            <div className={style.htmlCard}>
                                <p id='p' className={style.html}>HTML</p>
                                <Image className={style.imageCard} src={html}/>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className={style.swiper_slide}>
                        <div className={style.tecnologia}>
                            <div className={style.cssCard}>
                                <p className={style.css}>CSS</p>
                                <Image className={style.imageCard} src={css}/>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className={style.swiper_slide}>
                        <div className={style.tecnologia}>
                            <div className={style.jsCard}>
                                <p className={style.js}>Javascript</p>
                                <Image className={style.imageCard}  src={js}/>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className={style.swiper_slide}>
                        <div className={style.tecnologia}>
                            <div className={style.tsCard}>
                                <p className={style.ts}>Typescript</p>
                                <Image className={style.imageCard} src={ts}/>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className={style.swiper_slide}>
                        <div className={style.tecnologia}>
                            <div className={style.reactCard}>
                                <p className={style.react}>React</p>
                                <Image className={style.imageCard} src={react}/>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className={style.swiper_slide}>
                        <div className={style.tecnologia}>
                            <div className={style.nextCard}>
                                <p className={style.next}>Next Js</p>
                                <Image className={style.imageCard} src={next}/>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className={style.swiper_slide}>
                        <div className={style.tecnologia}>
                            <div className={style.angularCard}>
                                <p className={style.angular}>Angular</p>
                                <Image className={style.imageCard} src={angular}/>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className={style.swiper_slide}>
                        <div className={style.tecnologia}>
                            <div className={style.reduxCard}>
                                <p className={style.redux}>Redux</p>
                                <Image className={style.imageCard} src={redux}/>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className={style.swiper_slide}>
                        <div className={style.tecnologia}>
                            <div className={style.nodeCard}>
                                <p className={style.node}>Node Js</p>
                                <Image className={style.imageCard} src={node}/>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className={style.swiper_slide}>
                        <div className={style.tecnologia}>
                            <div className={style.postgresCard}>
                                <p className={style.postgres}>PostgreSQL</p>
                                <Image className={style.imageCard} src={postgres}/>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className={style.swiper_slide}>
                        <div className={style.tecnologia}>
                            <div className={style.tailwindCard}>
                                <p className={style.tailwind}>Tailwind</p>
                                <Image className={style.imageCard} src={tailwind}/>
                            </div>
                        </div>
                    </SwiperSlide>
                    
                </Swiper>
        
        </div>
    </div>
  )
}

export default Tecnologias