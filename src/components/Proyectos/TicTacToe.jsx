'use client'



import React, {useState, useEffect} from 'react';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Link, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";
import Image from 'next/image';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import tictactoe from './assets/tictactoe.png'
import js from './assets/js.png'
import react from './assets/reactjs.png'
import css from './assets/css.png'
import html from './assets/html.png'
import style from './Proyectos.module.css'



export default function TicTacToe() {

    const {isOpen, onOpen, onClose} = useDisclosure();
    const [backdrop, setBackdrop] = React.useState('opaque')

    const backdrops = ["blur"];

    const handleOpen = (backdrop) => { 
        setBackdrop(backdrop) 
        onOpen(); }



    return (
        <div className={style.gt_container}>
      <p className={style.title}>Tic Tac Toe</p>
        <Image className={style.gt} src={tictactoe} alt='oo'/>
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
        <DropdownItem className={style.dropItem} href='https://magenta-zabaione-7b40a5.netlify.app/' as={Link} target='_blank'> <LanguageIcon/> Sitio</DropdownItem>
        <DropdownItem className={style.dropItem} href='https://github.com/Manuel-latorre/tic-tac-toe' as={Link} target='_blank'> <GitHubIcon/> Repositorio</DropdownItem>
      </DropdownMenu>
    </Dropdown> 
        </div>
      
      <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Tic Tac Toe</ModalHeader>
              <ModalBody>
                <p> 
                    Se trata de un clasico juego llamado Tic Tac Toe (Tres en Línea) desarrollado en React js y Javascript. Permite a los usuarios competir en partidas uno contra uno, con una interfaz intuitiva y atractiva.
                    Construi desde 0 este minijuego utilizando React para crear componentes reutilizables y facilitar la gestión del estado del juego. Cada movimiento del jugador se actualiza en tiempo real en el tablero, y el juego verifica automáticamente cuándo se ha alcanzado una victoria o un empate.
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
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem className={style.dropItem} href='https://magenta-zabaione-7b40a5.netlify.app/' as={Link} target='_blank'> <LanguageIcon/> Sitio</DropdownItem>
        <DropdownItem className={style.dropItem} href='https://github.com/Manuel-latorre/tic-tac-toe' as={Link} target='_blank'> <GitHubIcon/> Repositorio</DropdownItem>
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