 'use client'

 import React, {useState, useEffect} from 'react'
 import logo from './logo.svg'
 import './Navbar.css'
 import Image from 'next/image'
 import Link from 'next/link'


 const Navbar = () => {
     const [isOpen, setIsOpen] = useState(false)
     const [isScrolled, setIsScrolled] = useState(false);

     useEffect(() => {
         const handleScroll = () => {
           if (window.scrollY > 100) {
             setIsScrolled(true);
           } else {
             setIsScrolled(false);
           }
         };
    
         window.addEventListener('scroll', handleScroll);
    
         // Limpia el escuchador de eventos al desmontar el componente
         return () => {
           window.removeEventListener('scroll', handleScroll);
         };
       }, []);


   return (
    
         <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>

             <div>
                 <a href="/">

                 <Image  className='logo' src={logo} alt="" />
                 </a>
             </div>


             <div  className={`nav_items ${isOpen && 'open'}`}>
             <a  className='btnNav' href="/">
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                     Inicio</a>
                 <Link  className='btnNav' href="/#sobremi">
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                     Sobre mi</Link>
                 <a  className='btnNav' href="/#proyectos">
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                     Proyectos</a>
                 <a  className='btnNav' href="/#tecnologias">
                 <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                     Tecnologias
                 </a>
                 <a className='btnNav' href="/#certificados">
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                     Certificados
                 </a>
                 <a className='btnNav' href="/#contacto">
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                     Contacto
                 </a>
             </div>
             <div className={`nav_toggle ${isOpen && 'open'}`} onClick={() => setIsOpen(!isOpen)} >
                 <span></span>
                 <span></span>
                 <span></span>
             </div>
       
         </nav>
    
   )
 }

 export default Navbar

