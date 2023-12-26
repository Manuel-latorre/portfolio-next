'use client'

import style from './Proyectos.module.css'
import Weather from './Weather';
import Gt from './Gt';
import TicTacToe from './TicTacToe';
import Taski from './Taski';
import GifApp from './GifApp';
import Api from './Api';



export default function Proyectos() {

    return(


        <div>
            <h2 className={style.titleSec}>Mis Proyectos</h2>
            <div id='proyectos' className={style.proyectos}>
                <Gt/>
                <Api/>
                <TicTacToe/>
                <Taski/>
                <GifApp/>
                <div className={style.gt_container}>
                    <p className={style.title}>Weather App</p>
                    <Weather/>
                </div>
            </div>
        </div>

    )
}