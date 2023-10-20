'use client'

import React, { useRef } from 'react';
import {Input, Textarea, Button} from "@nextui-org/react";
import Swal from 'sweetalert2'
import emailjs from '@emailjs/browser';
import style from './Contacto.module.css'


export default function Contacto () {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

    emailjs.sendForm('service_8ojao0l', 'template_rkyyq9u', form.current, '_CdUnxT0WVgK2pTat')
      .then((result) => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Mensaje enviado exitosamente',
            showConfirmButton: false,
            timer: 1500,
          })
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
        <div id='contacto' style={{marginTop:200, marginBottom:100}}>
            <h2 className={style.titleSec}>Contacto</h2>
            <form ref={form} onSubmit={sendEmail} className={style.form}>
                
                <Input className={style.inputForm} type="text" name="user_name" label="Nombre" placeholder="Ingrese su nombre" isRequired />
                
                <Input className={style.inputForm} type="email" name="user_email" label="Email" placeholder="Ingrese su email" isRequired/>

                <Textarea className={style.inputForm} name="message" isRequired label="Mensaje" placeholder="Escriba su mensaje" required/>

                
                <Button type="submit" value="Send" color="success" variant="shadow">
                    Enviar
                </Button>  
            </form>
        </div>
    )
}