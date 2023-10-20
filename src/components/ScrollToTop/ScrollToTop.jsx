'use client'

import React, { useState, useEffect } from "react";
import './ScrollToTop.css'
import Image from "next/image";
import arrow from './arrow.png'


export default function ScrollToTop(){

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };

    return(
        <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1000, // Asegura que el botón esté sobre otros elementos.
      }}
    >
      <Image src={arrow} className="arrow" alt="arrow" onClick={scrollToTop}/>
    </div>
    )
}