'use client'



import React, {useState, useEffect} from 'react';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Link, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import gt from './assets/net.png'
import style from './Proyectos.module.css'
import js from './assets/js.png'
import react from './assets/reactjs.png'
import css from './assets/css.png'
import html from './assets/html.png'
import Image from 'next/image';
import infinity from './assets/infinitynet.png'
import next from './assets/nextjs.png';
import ts from './assets/ts.png'
import mongodb from './assets/mongo.png'
import ex from './assets/ex.png'




export default function Gt() {

    const {isOpen, onOpen, onClose} = useDisclosure();
    const [backdrop, setBackdrop] = React.useState('opaque')

    const backdrops = ["blur"];

    const handleOpen = (backdrop) => { 
        setBackdrop(backdrop) 
        onOpen(); }


    return (
        <div className={style.gt_container}>
              <p className={style.title}>Infinity</p>
              <Image className={style.gt} src={infinity} alt='oo'/>
              <div style={{display:'flex', justifyContent:'center', gap:20,  padding:10, paddingBottom:15}}>
              {backdrops.map((b) => (
              <Button  
                  key={b}
                  variant="shadow" 
                  color="success" 
                  onPress={() => handleOpen(b)}
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
        <DropdownMenu>
          <DropdownItem className={style.dropItem} href='https://infinity-ecommerce.vercel.app/' as={Link} target='_blank'> <LanguageIcon/> Sitio</DropdownItem>
          <DropdownItem className={style.dropItem} href='https://github.com/Manuel-latorre/infinity-ecommerce' as={Link} target='_blank'> <GitHubIcon/> Repositorio</DropdownItem>
        </DropdownMenu>
      </Dropdown> 
          </div>
        
        <Modal size='3xl' backdrop={backdrop} isOpen={isOpen} onClose={onClose} >
          <ModalContent style={{zIndex:9999}}>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">Infinity</ModalHeader>
                <ModalBody>
                  <p> 
                  Se trata de un E-commerce de productos orientados al gaming(auriculares, mouses, teclados, mousepads). 
                  La aplicación se construyó con un stack tecnológico que incluye MongoDB como base de datos, Express para 
                  el backend, TypeScript para el desarrollo del lado del servidor y Next.js para el frontend. Implemente mi 
                  propia API para gestionar productos, lo que permite una flexibilidad total en la administración de inventario.
                  La aplicación cuenta con un sistema de carrito de compras que permite a los usuarios agregar, actualizar y 
                  eliminar productos de manera intuitiva. Tambien implemente un sistema de autenticación con NextAuth que 
                  permite a los usuarios registrarse y iniciar sesión, brindando una capa adicional de seguridad y 
                  personalización de la experiencia de compra. Utilice la API de Mercado Pago para el checkout, 
                  proporcionando a los usuarios métodos de pago seguros y confiables. Los estilos de la aplicación se 
                  gestionan mediante la biblioteca Next UI, lo que garantiza una interfaz de usuario atractiva y coherente en 
                  todo el sitio.
                  </p>
                  <p style={{fontWeight:'bold', fontSize:18}}>Tecnologias aplicadas</p>
                  <ul>
                      <div style={{display:'flex', alignItems:'center', gap:10, margin:5}}>
                          <Image style={{width:40}} src={next} alt="inmg" />
                          <li>Next Js</li>
                      </div>
                      <div style={{display:'flex', alignItems:'center', gap:10, margin:5}}>
                          <Image style={{width:40}} src={ts} alt="gdd" />
                          <li>Typescript</li>
                      </div>
                      <div style={{display:'flex', alignItems:'center', gap:10, margin:5}}>
                          <Image style={{width:40}} src={ex} alt="gdd" />
                          <li>Express</li>
                      </div>
                      <div style={{display:'flex', alignItems:'center', gap:10, margin:5}}>
                          <Image style={{width:40}} src={mongodb} alt="gdd" />
                          <li>Mongo DB</li>
                      </div>
                      <div style={{display:'flex', alignItems:'center', gap:10, margin:5}}>
                        <Image style={{width:40}} src={html} alt="fdf" />
                        <li>HTML</li>
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
        <DropdownMenu>
          <DropdownItem className={style.dropItem} href='https://infinity-ecommerce.vercel.app/' as={Link} target='_blank'> <LanguageIcon/> Sitio</DropdownItem>
          <DropdownItem className={style.dropItem} href='https://github.com/Manuel-latorre/infinity-ecommerce' as={Link} target='_blank'> <GitHubIcon/> Repositorio</DropdownItem>
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