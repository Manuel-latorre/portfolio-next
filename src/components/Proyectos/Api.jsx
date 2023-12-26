'use client'



import React, {useState, useEffect} from 'react';
import {Modal, ModalContent, ScrollShadow, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Link, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";

import Image from 'next/image';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import js from './assets/js.png'
import mongodb from './assets/mongo.png'
import express from './assets/ex.png'
import style from './Proyectos.module.css'
import axios from 'axios';







export default function Api() {

    const {isOpen, onOpen, onClose} = useDisclosure();
    const [backdrop, setBackdrop] = React.useState('opaque')
    const [products, setProducts] = useState([{}]);

    const backdrops = ["blur"];

    const handleOpen = (backdrop) => { 
        setBackdrop(backdrop) 
        onOpen(); }

        const ftechData = async () => {
            const res = await axios('https://api-ecommerce-kappa.vercel.app/products')
            setProducts(res.data.products);
            console.log(products);
        }

        useEffect(() => {
            ftechData()
        }, [])
        
        
        

    return (
        <div className={style.gt_container}>
      <p className={style.title}>API Infinity</p>
      <div className={style.scrollContainer}>
    <ScrollShadow size={100} >
        <pre className={style.pre}>
            <code style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{display:'flex'}}><p style={{color:'#ff00ff'}}>products:</p><p style={{color:'yellow'}}>[</p></div>
                    {products.map((product, index) => (
                        <div key={index}>
                            <p style={{color:'#f252a7', marginLeft:10}}>{"{"}</p>
                            <div style={{display:'flex', marginLeft:20}}><p style={{color:'limegreen'}}>name:</p><p style={{color:'#6eeda8'}}>{product.name},</p></div>
                            <div style={{display:'flex', marginLeft:20}}><p style={{color:'limegreen'}}>price:</p><p style={{color:'#6eeda8'}}>{product.price},</p></div>
                            <div style={{display:'flex', marginLeft:20}}><p style={{color:'limegreen'}}>stock:</p><p style={{color:'#6eeda8'}}>{product.stock},</p></div>
                            <div style={{display:'flex', marginLeft:20}}><p style={{color:'limegreen'}}>imageCard:</p><p style={{color:'#6eeda8'}}>{product.imageCard},</p></div>
                            <div style={{display:'flex', marginLeft:20}}><p style={{color:'limegreen'}}>imageDetail:</p><p style={{color:'#6eeda8'}}>{product.imageDetail},</p></div>
                            <div style={{display:'flex', marginLeft:20}}><p style={{color:'limegreen'}}>imageDetail1:</p><p style={{color:'#6eeda8'}}>{product.imageDetail1},</p></div>
                            <div style={{display:'flex', marginLeft:20}}><p style={{color:'limegreen'}}>imageDetail2:</p><p style={{color:'#6eeda8'}}>{product.imageDetail2},</p></div>
                            <div style={{display:'flex', marginLeft:20}}><p style={{color:'limegreen'}}>brand:</p><p style={{color:'#6eeda8'}}>{product.brand},</p></div>
                            <div style={{display:'flex', marginLeft:20}}><p style={{color:'limegreen'}}>brandLogo:</p><p style={{color:'#6eeda8'}}>{product.brandLogo},</p></div>
                            <div style={{display:'flex', marginLeft:20}}><p style={{color:'limegreen'}}>color:</p><p style={{color:'#6eeda8'}}>{product.color},</p></div>
                            <div style={{display:'flex', marginLeft:20}}><p style={{color:'limegreen'}}>description:</p><p style={{color:'#6eeda8'}}>{product.description},</p></div>
                            <div style={{display:'flex', marginLeft:20}}><p style={{color:'limegreen'}}>category:</p><p style={{color:'#6eeda8'}}>{product.category},</p></div>
                            <p style={{color:'#f252a7', marginLeft:10}}>{"},"}</p>
                        </div>
                    ))}
                <p style={{color:'yellow'}}>]</p>
            </code>
        </pre>
    </ScrollShadow>
</div>
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
        <DropdownItem className={style.dropItem} href='https://api-ecommerce-kappa.vercel.app/products' as={Link} target='_blank'> <LanguageIcon/> Sitio</DropdownItem>
        <DropdownItem className={style.dropItem} href='https://github.com/Manuel-latorre/api-ecommerce' as={Link} target='_blank'> <GitHubIcon/> Repositorio</DropdownItem>
      </DropdownMenu>
    </Dropdown> 
        </div>
      
      <Modal size='full' backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
        <ModalContent style={{zIndex:9999}}>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">API Infinity</ModalHeader>
              <ModalBody>
                <p> 
                    Esta API contiene mas de 100 productos relacionados al gaming como teclados, auriculares, mouses, mousepads, consolas y joysticks. Cada producto tiene su marca, categoria, color, stock y mas detalles que hacen que sea una api completa para consumir sus datos y hacer grandes proyectos. Cuenta con distintos endpoints para realizar distintas peticiones.
                    
                </p>
                <p style={{fontWeight:'bold', display:'flex', gap:5, fontSize:18}}>
                  Endpoints de tipo  <p style={{color:'#08f26e'}}> GET </p>
                </p>
                <ul>
                  <li style={{display:'flex', flexDirection:'column'}}>
                    <div style={{display:'flex', gap:10, padding:3, marginTop:10, border: 'solid 1px gray', borderRadius:10, alignItems:'center'}}>
                      <p style={{fontSize:14}}>Obtener todos los productos: </p>
                      <a style={{color:'#08f26e', fontSize:14}} href="https://api-ecommerce-kappa.vercel.app/products" target='_blank'>/products</a>
                    </div>
                    <div style={{display:'flex', gap:10, padding:3, marginTop:10, border: 'solid 1px gray', borderRadius:10, alignItems:'center'}}>
                    <p style={{fontSize:14}}>Obtener productos del carrito: </p>
                    <a style={{color:'#08f26e', fontSize:14}} href="https://api-ecommerce-kappa.vercel.app/products-cart" target='_blank'>/products-cart</a>
                    </div>
                    <div style={{display:'flex', gap:10, padding:3, marginTop:10, border: 'solid 1px gray', borderRadius:10, alignItems:'center'}}>
                      <p style={{fontSize:14}}>Buscar productos por nombre: </p>
                      <a style={{color:'#08f26e', fontSize:14}} href="https://api-ecommerce-kappa.vercel.app/products/search" target='_blank'>/products/search</a>
                    </div>
                    <div style={{display:'flex', gap:10, padding:3, marginTop:10, border: 'solid 1px gray', borderRadius:10, alignItems:'center'}}>
                      <p style={{fontSize:14}}>Buscar producto por ID: </p>
                      <a style={{color:'#08f26e', fontSize:14}} href="https://api-ecommerce-kappa.vercel.app/products/:id" target='_blank'>/products/:id</a>
                    </div>
                  
                  </li>
                </ul>
                <p style={{fontWeight:'bold', display:'flex', gap:5, fontSize:18}}>
                  Endpoints de tipo  <p style={{color:'#2196f3'}}> POST </p>
                </p>
                <ul>
                  <li style={{display:'flex', flexDirection:'column'}}>
                    <div style={{display:'flex', gap:10, padding:3, marginTop:10, border: 'solid 1px gray', borderRadius:10, alignItems:'center'}}>
                      <p style={{fontSize:14}}>Registrarse: </p>
                      <a style={{color:'#2196f3', fontSize:14}} href="https://api-ecommerce-kappa.vercel.app/register" target='_blank'>/register</a>
                    </div>
                    <div style={{display:'flex', gap:10, padding:3, marginTop:10, border: 'solid 1px gray', borderRadius:10, alignItems:'center'}}>
                    <p style={{fontSize:14}}>Agregar productos al carrito: </p>
                    <a style={{color:'#2196f3', fontSize:14}} href="https://api-ecommerce-kappa.vercel.app/products-cart" target='_blank'>/products-cart</a>
                    </div>
                    <div style={{display:'flex', gap:10, padding:3, marginTop:10, border: 'solid 1px gray', borderRadius:10, alignItems:'center'}}>
                      <p style={{fontSize:14}}>Añadir producto a la base de datos: </p>
                      <a style={{color:'#2196f3', fontSize:14}} href="https://api-ecommerce-kappa.vercel.app/products/search" target='_blank'>/products</a>
                    </div>           
                  </li>
                </ul>
                <p style={{fontWeight:'bold', display:'flex', gap:5, fontSize:18}}>
                  Endpoints de tipo  <p style={{color:'#c2ff05'}}> PUT </p>
                </p>
                <ul>
                  <li style={{display:'flex', flexDirection:'column'}}>
                    <div style={{display:'flex', gap:10, padding:3, marginTop:10, border: 'solid 1px gray', borderRadius:10, alignItems:'center'}}>
                      <p style={{fontSize:14}}>Actualizar cantidad del producto: </p>
                      <a style={{color:'#c2ff05', fontSize:14}} href="https://api-ecommerce-kappa.vercel.app/products-cart/:productId" target='_blank'>/products-cart/:productId</a>
                    </div>          
                  </li>
                </ul>

                <p style={{fontWeight:'bold', display:'flex', gap:5, fontSize:18}}>
                  Endpoints de tipo  <p style={{color:'#ff2226'}}> DELETE </p>
                </p>
                <ul>
                  <li style={{display:'flex', flexDirection:'column'}}>
                    <div style={{display:'flex', gap:10, padding:3, marginTop:10, border: 'solid 1px gray', borderRadius:10, alignItems:'center'}}>
                      <p style={{fontSize:14}}>Eliminar producto del carrito: </p>
                      <a style={{color:'#ff2226', fontSize:14}} href="https://api-ecommerce-kappa.vercel.app/products-cart/:productId" target='_blank'>/products-cart/:productId</a>
                    </div>          
                  </li>
                </ul>
                <p style={{fontWeight:'bold', fontSize:18}}>Tecnologias aplicadas</p>
                <ul>
                    <div style={{display:'flex', alignItems:'center', gap:10, margin:5}}>
                        <Image style={{width:40}} src={mongodb} alt="inmg" />
                        <li>Mongo DB</li>
                    </div>
                    <div style={{display:'flex', alignItems:'center', gap:10, margin:5}}>
                        <Image style={{width:40}} src={express} alt="gdd" />
                        <li>Express</li>
                    </div>
                    <div style={{display:'flex', alignItems:'center', gap:10, margin:5}}>
                        <Image style={{width:40}} src={js} alt="gdd" />
                        <li>Javascript</li>
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
        <DropdownItem className={style.dropItem} href='https://api-ecommerce-kappa.vercel.app/products' as={Link} target='_blank'> <LanguageIcon/> Sitio</DropdownItem>
        <DropdownItem className={style.dropItem} href='https://github.com/Manuel-latorre/api-ecommerce' as={Link} target='_blank'> <GitHubIcon/> Repositorio</DropdownItem>
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