import { Tecnologia } from "../../../../core/src"
import Header from "../shared/Header"
import Technologies from "../technologies/Technologies"


export interface MainPageProps {
	technologies: Tecnologia[]

}

export default function Main(props: MainPageProps) {
	return (
		<div
			className="
       flex flex-col items-center justify-center h-[500px]
       bg-[url('/principal.jpg')] bg-cover bg-center
      "
		> 
      <Header />
			<div className="flex-1 w-full flex flex-col justify-center items-center gap-5">
				<div className="flex flex-col items-center gap-1">
					<h1 className="flex gap-3 items-center">
						<span className="w-2 h-2 rounded-full bg-red-500"></span>
						<span className="text-3xl sm:text-5xl font-bold text-center">
							Leonardo Leitão
						</span>
						<span className="w-2 h-2 rounded-full bg-red-500"></span>
					</h1>
					<h2 className="text-zinc-500 text-center">CTO da COD3R Ensino e Consultoria</h2>
				</div>
					<Technologies list={props.technologies} />
			</div>
		</div>
	)
}