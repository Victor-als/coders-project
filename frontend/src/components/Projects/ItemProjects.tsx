import { Projeto } from "../../../../core"
import Image from "next/image"
import Link from "next/link"

export interface ItemProjectsProps {
	projeto: Projeto
}

export default function ItemProjects(props: ItemProjectsProps) {
	return (
		<Link href={`/project/${props.projeto.id}`}>
			<div
				className="
         relative rounded-2xl overflow-hidden border border-zinc-800
         min-w-64 min-h-64 
        "
			>
				<Image
					src={props.projeto.imagens[0]}
					alt={props.projeto.nome}
					fill
					objectFit="cover"
				/>
			</div>
		</Link>
	)
}