import Certificados from "@/components/Certificados/Certificados";
import CertificadosMobile from "@/components/Certificados/Mobile/CertificadosMobile";
import Mobile from "@/components/Proyectos/Mobile/Mobile";
import Proyectos from "@/components/Proyectos/Proyectos";
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
    </main>
  )
}
