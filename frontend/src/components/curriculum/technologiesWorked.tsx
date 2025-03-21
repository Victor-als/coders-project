import { Tecnologia } from "../../../../core/src"

export interface TechnologiesWorkedProps {
	list: Tecnologia[]
}

export default function TechnologiesWorked(props: TechnologiesWorkedProps) {
	return props.list ? (
		<div className="flex justify-center items-center p-6 w-full lg:w-72 bg-black border border-zinc-800 rounded-2xl">
			<div className="flex justify-center gap-x-3 flex-wrap">
				{props.list.map((tecnologia) => (
					<div key={tecnologia.id}>
						<span className="text-red-500 font-bold">#</span>
						<span>{tecnologia.nome}</span>
					</div>
				))}
			</div>
		</div>
	) : null
}