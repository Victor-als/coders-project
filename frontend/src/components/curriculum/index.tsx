import { Tecnologia } from "../../../../core/src"
import Experience from "./Experience"
import MiniCV from "./MiniCV"
import TechnologiesWorked from "./technologiesWorked"

export interface CurriculumProps{
	tecnologias: Tecnologia[]
}

export default function Curriculum (props: CurriculumProps) {
	return (
		<div  className="flex flex-col lg:flex-row gap-4 min-h-72 w-full">
			  <MiniCV />
				<Experience />
				<TechnologiesWorked list={props.tecnologias} />
   </div>
	)
}