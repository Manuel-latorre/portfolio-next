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





export default function Gt() {

    const {isOpen, onOpen, onClose} = useDisclosure();
    const [backdrop, setBackdrop] = React.useState('opaque')

    const backdrops = ["blur"];

    const handleOpen = (backdrop) => { 
        setBackdrop(backdrop) 
        onOpen(); }


    return (
        <div className={style.gt_container}>
              <p className={style.title}>Generación Tech</p>
              <Image className={style.gt} src={gt} alt='oo'/>
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
          <DropdownItem className={style.dropItem} href='https://earnest-seahorse-a33a79.netlify.app/' as={Link} target='_blank'> <LanguageIcon/> Sitio</DropdownItem>
          <DropdownItem className={style.dropItem} href='https://github.com/Manuel-latorre/GENERACION-TECH' as={Link} target='_blank'> <GitHubIcon/> Repositorio</DropdownItem>
        </DropdownMenu>
      </Dropdown> 
          </div>
        
        <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose} >
          <ModalContent style={{zIndex:9999}}>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">Generación Tech</ModalHeader>
                <ModalBody>
                  <p> 
                    Generación Tech se trata de una SPA(Single page application), que ofrece servicios de desarrollo web, marketing digital y comercio electronico.
                    Cuenta con un diseño interactivo el cual lo diseñe para la compañia, tambien cuenta con un formulario de contacto que este fue manejado a traves del framework Email js
                  </p>
                  <p style={{fontWeight:'bold', fontSize:18}}>Tecnologias aplicadas</p>
                  <ul>
                      <div style={{display:'flex', alignItems:'center', gap:10, margin:5}}>
                          <Image style={{width:40}} src={react} alt="inmg" />
                          <li>React Js</li>
                      </div>
                      <div style={{display:'flex', alignItems:'center', gap:10, margin:5}}>
                          <Image style={{width:40}} src={js} alt="gdd" />
                          <li>Javascript</li>
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
          <DropdownItem className={style.dropItem} href='https://earnest-seahorse-a33a79.netlify.app/' as={Link} target='_blank'> <LanguageIcon/> Sitio</DropdownItem>
          <DropdownItem className={style.dropItem} href='https://github.com/Manuel-latorre/GENERACION-TECH' as={Link} target='_blank'> <GitHubIcon/> Repositorio</DropdownItem>
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