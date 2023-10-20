'use client'

import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import style from './Certificados.module.css'
import Image from "next/image";
import jsCoder from './assets/jsCoder.png'
import dwCoder from './assets/dwCoder.png'
import fs from './assets/fsHenry.png'
import open from './assets/open.png'

export default function Certificados () {


    const { isOpen: isOpen1, onOpen: onOpen1, onOpenChange: onOpenChange1 } = useDisclosure();
    const { isOpen: isOpen2, onOpen: onOpen2, onOpenChange: onOpenChange2 } = useDisclosure();
    const { isOpen: isOpen3, onOpen: onOpen3, onOpenChange: onOpenChange3 } = useDisclosure();
    const { isOpen: isOpen4, onOpen: onOpen4, onOpenChange: onOpenChange4 } = useDisclosure();


    return (
        <div id="certificados">
            <h2 className={style.titleCer}>Certificados</h2>
            <div className={style.cards_container}>
                <div className={style.card}>
                    <Image src={jsCoder} className={style.imageCard}/>
                    <div className={style.btn_container}>
                        <Button color="success" variant="flat" onPress={onOpen1}>Info</Button>
                        <Modal 
                            backdrop="opaque" 
                            isOpen={isOpen1} 
                            onOpenChange={onOpenChange1}
                            motionProps={{
                              variants: {
                                enter: {
                                  y: 0,
                                  opacity: 1,
                                  transition: {
                                    duration: 0.3,
                                    ease: "easeOut",
                                  },
                                },
                                exit: {
                                  y: -20,
                                  opacity: 0,
                                  transition: {
                                    duration: 0.2,
                                    ease: "easeIn",
                                  },
                                },
                              }
                            }}
                          >
                            <ModalContent>
                                {(onClose) => (
                                    <>
                                        <ModalHeader className="flex flex-col gap-1">Curso de Javascript</ModalHeader>
                                        <ModalBody>
                                            <p>
                                                Completé con éxito este curso de JavaScript que me proporcionó una sólida comprensión de la programación en el lado del cliente y me permitió crear aplicaciones web interactivas y dinámicas.
                                            </p>
                                            <p>
                                                Este curso me brindó una base sólida en JavaScript y me permitió aplicar mis conocimientos en proyectos reales. Estoy emocionado por seguir explorando y expandiendo mis habilidades en el desarrollo web utilizando JavaScript.
                                            </p>
                                            <p style={{fontWeight:'bold', fontSize:18}}>Contenido aprendido</p>
                                            <ul>
                                                <li>- Introducción a JavaScript y conceptos fundamentales.</li>
                                                <li>- Manipulación del DOM para interactuar con páginas web.</li>
                                                <li>- Uso de estructuras de control y bucles.</li>
                                                <li>- Trabajo con funciones y eventos.</li>
                                                <li>- Gestión de formularios y validación de datos.</li>
                                                <li>- Introducción a jQuery para simplificar la manipulación del DOM.</li>
                                                <li>- Comunicación con servidores utilizando XMLHttpRequest y Fetch.</li>
                                                <li>- Programación orientada a objetos en JavaScript.</li>
                                                <li>- Manejo de errores y depuración de código.</li>
                                            </ul>
                                            
                                        </ModalBody>
                                        <ModalFooter>
                                            <Button color="danger" variant="flat" onPress={onClose}> Cerrar </Button>
                                        </ModalFooter>
                                    </>
                                )}
                            </ModalContent>
                        </Modal>
                    </div>
                </div>

                <div className={style.card}>
                    <Image src={dwCoder} className={style.imageCard} />
                    <div className={style.btn_container}>
                        <Button color="success" variant="flat" onPress={onOpen2}>Info</Button>
                        <Modal 
                            backdrop="opaque" 
                            isOpen={isOpen2} 
                            onOpenChange={onOpenChange2}
                            motionProps={{
                              variants: {
                                enter: {
                                  y: 0,
                                  opacity: 1,
                                  transition: {
                                    duration: 0.3,
                                    ease: "easeOut",
                                  },
                                },
                                exit: {
                                  y: -20,
                                  opacity: 0,
                                  transition: {
                                    duration: 0.2,
                                    ease: "easeIn",
                                  },
                                },
                              }
                            }}
                          >
                            <ModalContent>
                                {(onClose) => (
                                    <>
                                        <ModalHeader className="flex flex-col gap-1">Curso de Desarrollo Web</ModalHeader>
                                        <ModalBody>
                                            <p>
                                                Completé este de desarrollo web que me proporcionó una base sólida en la creación de sitios web modernos y aplicaciones web interactivas.
                                            </p>
                                            <p>
                                                Aprendí a diseñar y construír varios sitios web y aplicaciones web desde cero, tambien comprendí los principios esenciales de diseño web, usabilidad y accesibilidad.
                                                Gané experiencia en el despliegue de sitios web en servidores en la nube.
                                            </p>
                                            <p style={{fontWeight:'bold', fontSize:18}}>Contenido aprendido</p>
                                            <ul>
                                                <li>- Aprendizaje de HTML, CSS y JavaScript para la construcción de páginas web.</li>
                                                <li>- Utilización de frameworks como Bootstrap y CSS para mejorar el diseño y la responsividad.</li>
                                                <li>- Introducción a herramientas de desarrollo web como Visual Studio Code y Git.</li>
                                                <li>- Creación de sitios web dinámicos con el uso de tecnologías de lado del cliente y lado del servidor.</li>
                                            </ul>
                                        </ModalBody>
                                        <ModalFooter>
                                            <Button color="danger" variant="flat" onPress={onClose}> Cerrar </Button>
                                        </ModalFooter>
                                    </>
                                )}
                            </ModalContent>
                        </Modal>
                    </div>
                        
                </div>

                <div className={style.card}>
                    <Image src={fs} className={style.imageCard} />
                    <div className={style.btn_container}>
                        <Button color="success" variant="flat" onPress={onOpen3}>Info</Button>
                        <Modal 
                            backdrop="opaque" 
                            isOpen={isOpen3} 
                            onOpenChange={onOpenChange3}
                            motionProps={{
                              variants: {
                                enter: {
                                  y: 0,
                                  opacity: 1,
                                  transition: {
                                    duration: 0.3,
                                    ease: "easeOut",
                                  },
                                },
                                exit: {
                                  y: -20,
                                  opacity: 0,
                                  transition: {
                                    duration: 0.2,
                                    ease: "easeIn",
                                  },
                                },
                              }
                            }}
                          >
                            <ModalContent>
                                {(onClose) => (
                                    <>
                                        <ModalHeader className="flex flex-col gap-1">Desarrollo Web Fullstack</ModalHeader>
                                        <ModalBody>
                                            <p>
                                                Completé con éxito este Bootcamp intensivo de Desarrollo Web Fullstack, que me proporcionó las habilidades necesarias para diseñar, desarrollar y desplegar aplicaciones web completas, abarcando tanto el lado del cliente como el lado del servidor.
                                            </p>
                                            <p style={{fontWeight:'bold', fontSize:18}}>Contenido aprendido</p>
                                            <ul>
                                                <li>- Adquisición de conocimientos sólidos en HTML, CSS y JavaScript para la creación de interfaces web atractivas.</li>
                                                <li>- Exploración de frameworks y bibliotecas front-end</li>
                                                <li>- Implementación de lógica de negocios en el lado del servidor con Node.js y Express.</li>
                                                <li>- Integración de bases de datos utilizando tecnologías como PostgreSQL.</li>
                                                <li>- Uso de herramientas de control de versiones, como Git, para la colaboración en equipo.</li>
                                                <li>- Aplicación de prácticas de seguridad y autenticación en aplicaciones web.</li>
                                            </ul>
                                
                                        </ModalBody>
                                        <ModalFooter>
                                            <Button color="danger" variant="flat" onPress={onClose}> Cerrar </Button>
                                        </ModalFooter>
                                    </>
                                )}
                            </ModalContent>
                        </Modal>
                    </div>
                </div>

                <div className={style.card}>
                    <Image src={open} className={style.imageCard} />
                    <div className={style.btn_container}>
                        <Button color="success" variant="flat" onPress={onOpen4}>Info</Button>
                        <Modal 
                            backdrop="opaque" 
                            isOpen={isOpen4} 
                            onOpenChange={onOpenChange4}
                            motionProps={{
                              variants: {
                                enter: {
                                  y: 0,
                                  opacity: 1,
                                  transition: {
                                    duration: 0.3,
                                    ease: "easeOut",
                                  },
                                },
                                exit: {
                                  y: -20,
                                  opacity: 0,
                                  transition: {
                                    duration: 0.2,
                                    ease: "easeIn",
                                  },
                                },
                              }
                            }}
                          >
                            <ModalContent>
                                {(onClose) => (
                                    <>
                                        <ModalHeader className="flex flex-col gap-1">Curso de Inglés</ModalHeader>
                                        <ModalBody>
                                            <p>
                                                Actualmente estoy transitando el nivel 1 de Open English, un curso de aprendizaje del idioma inglés diseñado para adquirir habilidades fundamentales en lectura, escritura, conversación y comprensión auditiva.
                                            </p>
                                            <p style={{fontWeight:'bold', fontSize:18}}>Contenido aprendido</p>
                                            <ul>
                                                <li>- Lecciones introductorias para desarrollar una base sólida en inglés.</li>
                                                <li>- Práctica en gramática, vocabulario y pronunciación.</li>
                                                <li>- Conversaciones y diálogos para mejorar la fluidez verbal.</li>
                                                <li>- Lecturas y comprensión de textos en inglés.</li>
                                                <li>- Ejercicios de escritura para desarrollar habilidades de expresión escrita.</li>
                                                <li>- Desarrollo de habilidades de escucha a través de materiales de audio y video.</li>
                                            </ul>

                                        </ModalBody>
                                        <ModalFooter>
                                            <Button color="danger" variant="flat" onPress={onClose}> Cerrar </Button>
                                        </ModalFooter>
                                    </>
                                )}
                            </ModalContent>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    )
}