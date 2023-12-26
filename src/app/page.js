import Certificados from "@/components/Certificados/Certificados";
import CertificadosMobile from "@/components/Certificados/Mobile/CertificadosMobile";
import Contacto from "@/components/Contacto/Contacto";
import Footer from "@/components/Footer/Footer";
import Api from "@/components/Proyectos/Api";
import Mobile from "@/components/Proyectos/Mobile/Mobile";
import Proyectos from "@/components/Proyectos/Proyectos";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import Sobremi from "@/components/Sobremi/Sobremi";
import Tecnologias from "@/components/Tecnologias/Tecnologias";


export default function Home() {



  return (
    <main>
      <Sobremi/>
      <Proyectos/>
      <Mobile/>
      <Tecnologias/>
      <Certificados/>
      <CertificadosMobile/>
      <Contacto/>
      <ScrollToTop/>
      <Footer/>
    </main>
  )
}
