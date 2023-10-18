import Image from 'next/image'
import style from './Sobremi.module.css'
import avatar from './avatar.svg'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';


export default function Sobremi(){
    return (
        <main id="sobremi" className={style.sobreMi_container}>
            <div className={style.description}>
                <h1 className={style.h1}>Manuel Latorre</h1>
                <h3 className={style.h3}>Desarrollador Fullstack</h3>
                <p className={style.p}>Soy un desarrollador especializado en el diseño y desarrollo de sitios web y aplicaciones. Mi experiencia abarca tanto el Frontend como el Backend, lo que me permite ofrecer soluciones completas. En la creación de proyectos, prefiero trabajar con el stack PERN (PostgreSQL, Express, React y Node.js) como base tecnológica.</p>
                <div className={style.sectionMedia}>
                  {/* <div className='boxMedia'>
                    <span></span>
                    <a className='btnMedia' href={cv} download={'Manuel-Latorre-Fullstack'}>CV</a>
                  </div> */}
                  <div className={style.boxMedia}>
                    <span></span>
                    <a className={style.btnMedia}>CV</a>
                  </div>
                  <div className={style.boxMedia}>
                    <span></span>
                    <a className={style.btnMedia} href="https://github.com/Manuel-latorre" target='_blank'><GitHubIcon  sx={{fontSize: 40}}/></a>
                  </div>
                  <div className={style.boxMedia}>
                    <span></span>
                    <a className={style.btnMedia} href="https://www.linkedin.com/in/manuel-latorre-936b72223/" target='_blank'><LinkedInIcon sx={{fontSize: 40}}/></a>
                  </div>
                </div>

                <Link className={style.btnContactame} href="#contacto">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Contacto
                </Link>
            </div>
            <div className={style.avatar_container}>
                <Image className={style.avatar} src={avatar} alt='avatar'/>
            </div>
        </main>
    )
}