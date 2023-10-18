'use client'

import style from './Proyectos.module.css'
import Weather from './Weather';
import Gt from './Gt';
import TicTacToe from './TicTacToe';
import Taski from './Taski';
import GifApp from './GifApp';
import Mobile from './Mobile/Mobile';



export default function Proyectos() {

    return(


        <div>
            <h2 style={{textAlign:'center', fontSize:40, marginTop: '7%'}}>Mis Proyectos</h2>
            <div id='proyectos' className={style.proyectos}>
                <Gt/>
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