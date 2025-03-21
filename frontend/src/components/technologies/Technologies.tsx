import { Tecnologia } from "../../../../core/src"
import Image from "next/image"

export interface TechnologiesProps {
	list: Tecnologia[]
	tamanhoMenor?: boolean
}

export default function Technologies(props: TechnologiesProps) {
	return props.list ? (
		<div className="flex justify-center gap-4 flex-wrap w-4/5">
			{props.list.map((tecnologia) => (
				<div key={tecnologia.id} className="flex flex-col items-center gap-1">
					<span
						className={`
							relative h-11 w-11 rounded-xl overflow-hidden
							${!props.tamanhoMenor && "sm:h-16 sm:w-16"}
						`}
					>
						<Image
							src={tecnologia.imagem}
							alt={tecnologia.nome}
							fill
							className="object-contain"
						/>
					</span>
					<span className="text-[10px] text-zinc-400">{tecnologia.nome}</span>
				</div>
			))}
		</div>
	) : null
}
