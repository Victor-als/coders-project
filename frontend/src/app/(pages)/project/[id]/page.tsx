
import Container from "@/components/shared/Container"
import CarouselImages from "@/components/shared/CarouselImages"
import Readme from "@/components/Projects/Readme"
import { obterReadme } from "@/functions/github"
import { obterProjeto } from "@/functions/projects"
import Header from "@/components/shared/Header"
import Technologies from "@/components/technologies/Technologies"


// export const revalidate = 3600

export default async function PaginaProjeto(props: { params: Promise<{ id: string }> }) {
	const { id } = await props.params
	const projeto = await obterProjeto(id)

	if (!projeto) return null

	const readme = await obterReadme(projeto.repositorio)

	return (
		<div className="bg-black">
			<Header />
			<Container className="py-7 flex flex-col items-center gap-10">
				<h1 className="text-3xl font-bold self-start">{projeto.nome}</h1>
				<CarouselImages imagens={projeto.imagens.slice(1)} />
				<Technologies list={projeto.tecnologias} tamanhoMenor />
				<Readme markdown={readme} />
			</Container>
		</div>
	)
}