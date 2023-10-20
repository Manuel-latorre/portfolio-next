import Image from "next/image";
import logo from '../Navbar/logo.svg'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import style from './Footer.module.css'

export default function Footer () {
    return (
        <footer className={style.footer}>
            <div className={style.sectionNav}>
                <a className={style.btnFooter} href="/">Inicio</a>
                <a className={style.btnFooter} href="/#sobremi">Sobre mi</a>
                <a className={style.btnFooter} href="/#proyectos">Proyectos</a>
                <a className={style.btnFooter} href="/#tecnologias">Tecnologias</a>
                <a className={style.btnFooter} href="/#certificados">Certificados</a>
                <a className={style.btnFooter} href="/contacto">Contacto</a>
            </div>
            <hr className={style.hr}/>
            <div className={style.sectionMedia}>
                <div className={style.btnMedia_container}>
                    <div className={style.boxMedia}>
                        <span></span>
                        <a className={style.btnMedia} href="https://github.com/Manuel-latorre" target='_blank'><GitHubIcon  sx={{fontSize: 40}}/></a>
                    </div>
                    <div className={style.boxMedia}>
                        <span></span>
                        <a className={style.btnMedia} href="https://www.linkedin.com/in/manuel-latorre-936b72223/" target='_blank'><LinkedInIcon sx={{fontSize: 40}}/></a>
                    </div>
                </div>
                <div className={style.logo_container} style={{margin:20}}>
                    <Image className={style.logo} src={logo} alt="logo"/>
                </div>

                <div style={{display:'flex', alignItems:'center', margin:20}}>
                    <MailIcon sx={{fontSize:40}}/>
                    <p style={{margin:5, fontSize:18}}>manuel.latorre@gmail.com</p>
                </div>
            </div>

        </footer>
    )
}