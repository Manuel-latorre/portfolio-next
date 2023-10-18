'use client'


import React, {useState, useEffect} from 'react';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Link, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";
import Image from 'next/image';
import style from './Proyectos.module.css'
import gifapp from './assets/gifapp.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import ts from './assets/ts.png'
import angular from './assets/angular.png'
import css from './assets/css.png'
import html from './assets/html.png'




export default function GifApp () {

    const {isOpen, onOpen, onClose} = useDisclosure();
    const [backdrop, setBackdrop] = React.useState('opaque')

    const backdrops = ["blur"];

    const handleOpen = (backdrop) => { 
        setBackdrop(backdrop) 
        onOpen(); }


    return (
        <div className={style.gt_container}>
      <p className={style.title}>Gifs App</p>
        <Image className={style.gt} src={gifapp} alt='oo'/>
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
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem className={style.dropItem} href='https://gifsapp-975977.netlify.app/' as={Link} target='_blank'> <LanguageIcon/> Sitio</DropdownItem>
        <DropdownItem className={style.dropItem} href='https://github.com/Manuel-latorre/GifsApp' as={Link} target='_blank'> <GitHubIcon/> Repositorio</DropdownItem>
      </DropdownMenu>
    </Dropdown> 
        </div>
      
      <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Weather App</ModalHeader>
              <ModalBody>
                <p> 
                    Es un sitio en el cual se pueden buscar Gifs de cualquier tipo, para ello utilice la API de GIPHY.
                    Tambien cuenta con un historial de búsqueda, en el se almacenan las ultimas 10 busquedas del usuario permitiendole volver mas facil a una busqueda anterior si asi lo desea.
                </p>
                <p style={{fontWeight:'bold', fontSize:18}}>Tecnologias aplicadas</p>
                <ul>
                    <div style={{display:'flex', alignItems:'center', gap:10, margin:5}}>
                        <Image style={{width:40}} src={angular} alt="inmg" />
                        <li>Angular</li>
                    </div>
                    <div style={{display:'flex', alignItems:'center', gap:10, margin:5}}>
                        <Image style={{width:40}} src={ts} alt="gdd" />
                        <li>Typescript</li>
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
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem className={style.dropItem} href='https://gifsapp-975977.netlify.app/' as={Link} target='_blank'> <LanguageIcon/> Sitio</DropdownItem>
        <DropdownItem className={style.dropItem} href='https://github.com/Manuel-latorre/GifsApp' as={Link} target='_blank'> <GitHubIcon/> Repositorio</DropdownItem>
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