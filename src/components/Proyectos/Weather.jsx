'use client'


import React, {useState, useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFlip, Pagination, Navigation, Autoplay } from 'swiper/modules';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Link, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import rainy from './assets/rainy.png'
import overcast from './assets/overcast.png'
import sunny from './assets/sunny.png'
import partlycloudy from './assets/partlycloudy.png'
import style from './Proyectos.module.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import js from './assets/js.png'
import react from './assets/reactjs.png'
import css from './assets/css.png'




export default function Weather() {

    const {isOpen, onOpen, onClose} = useDisclosure();
    const [backdrop, setBackdrop] = React.useState('opaque')

    const backdrops = ["blur"];

    const handleOpen = (backdrop) => { 
        setBackdrop(backdrop) 
        onOpen(); }


    return(
        <div className={style.swiper_container}>
        <Swiper
          effect={'flip'}
          grabCursor={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            }}
        //   pagination={true}
          // navigation={true}
          modules={[EffectFlip, Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide className={style.swiper_slide}>
            <Image style={{width:200, margin:'auto'}} src={sunny} alt="weather"/>
          </SwiperSlide>
          <SwiperSlide className={style.swiper_slide}>
            <Image style={{width:200, margin:'auto'}} src={overcast} alt="weather"/>
          </SwiperSlide>
          <SwiperSlide className={style.swiper_slide}>
            <Image style={{width:200, margin:'auto'}} src={rainy} alt="weather"/>
          </SwiperSlide>
          <SwiperSlide className={style.swiper_slide}>
            <Image style={{width:200, margin:'auto'}} src={partlycloudy} alt="weather"/>
          </SwiperSlide>
        </Swiper>
        <div style={{display:'flex', justifyContent:'center', gap:20,  padding:10, paddingBottom:15}}>
            {backdrops.map((a) => (
            <Button  
                key={a}
                variant="shadow" 
                color="success" 
                onPress={() => handleOpen(a)}
                className="capitalize"
            >
            Info
            </Button>
            ))} 

            <Dropdown>
      <DropdownTrigger>
        <Button color="primary" as={Link} showAnchorIcon variant="shadow">
            Explorar
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem className={style.dropItem} href='https://drive.google.com/file/d/101RMc3_2vV7oTvcfsxhCu5ewTn6iIUR8/view?usp=drive_link' as={Link} target='_blank'> <LanguageIcon/> Sitio</DropdownItem>
        <DropdownItem className={style.dropItem} href='https://github.com/Manuel-latorre/Weather-App' as={Link} target='_blank'> <GitHubIcon/> Repositorio</DropdownItem>
      </DropdownMenu>
    </Dropdown> 
        </div>
      
      <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
        <ModalContent style={{zIndex:9999}}>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Weather App</ModalHeader>
              <ModalBody>
                <p> 
                Es una App del clima para poder informarse sobre el clima de cualquier ciudad del mundo.
                Cuenta con un buscador para facilitar la busqueda de ciudades alrededor del mundo, tambien cuenta la opcion de poder ver el clima que se aproxima en los siguientes siete dias.
                Tambien cuenta con la opcion de ver el porcentaje de humedad, viento y temperatura de la respectiva ciudad.
                </p>
                <p style={{fontWeight:'bold', fontSize:18}}>Tecnologias aplicadas</p>
                <ul>
                    <div style={{display:'flex', alignItems:'center', gap:10, margin:5}}>
                        <Image style={{width:40}} src={react} alt="inmg" />
                        <li>React Native</li>
                    </div>
                    <div style={{display:'flex', alignItems:'center', gap:10, margin:5}}>
                        <Image style={{width:40}} src={js} alt="gdd" />
                        <li>Javascript</li>
                    </div>
                    <div style={{display:'flex', alignItems:'center', gap:10, margin:5}}>
                        <Image style={{width:40}} src={css} alt="fdf" />
                        <li>CSS</li>
                    </div>
                
                </ul>
                
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
                <Dropdown>
      <DropdownTrigger>
        <Button as={Link} color="primary" showAnchorIcon variant="solid">
            Explorar
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem className={style.dropItem} href='https://drive.google.com/file/d/101RMc3_2vV7oTvcfsxhCu5ewTn6iIUR8/view?usp=drive_link' as={Link} target='_blank'> <LanguageIcon/> Sitio</DropdownItem>
        <DropdownItem className={style.dropItem} href='https://github.com/Manuel-latorre/Weather-App' as={Link} target='_blank'> <GitHubIcon/> Repositorio</DropdownItem>
      </DropdownMenu>
    </Dropdown> 
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      
      </div>
    )
}