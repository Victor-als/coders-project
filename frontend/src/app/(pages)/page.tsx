import Curriculum from "@/components/curriculum";
import MainPage from "@/components/landing/mainPage";
import Projects from "@/components/Projects/Projects";
import Container from "@/components/shared/Container";
import { obterProjetos } from "@/functions/projects";
import { obterTecnologias } from "@/functions/technologies";


export default async function Home() {
  const tecnologias = await obterTecnologias()
  const projetos = await obterProjetos()
  return (
    <div>
      <MainPage technologies={tecnologias.destaques} />
      <Container className="py-16 flex flex-col items-center gap-10">
        <Projects titulo="Destaques" lista={projetos.destaques} />
        <Projects titulo="Web" lista={projetos.web} />
        <Projects titulo="Mobile" lista={projetos.mobile} />
        <Projects titulo="Jogos" lista={projetos.jogos} />
        <Curriculum tecnologias={tecnologias.todas} />
      </Container>
    </div>
  )
}
