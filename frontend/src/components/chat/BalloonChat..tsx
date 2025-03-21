import Message from "@/model/Message"
import ContentMD from "../shared/ContentMD"
import Image from "next/image"

export interface MessageBalloonProps {
	mensagem: Message
	omitirAutor?: boolean
}

export default function MessageBalloon(props: MessageBalloonProps) {
	return props.mensagem.lado === "esquerdo" ? (
		<BalaoEsquerdo {...props} />
	) : (
		<BalaoDireito {...props} />
	)
}

function BalaoEsquerdo(props: MessageBalloonProps) {
	return (
		<div className="flex gap-4">
			{!props.omitirAutor && (
				<Image src="/chat.svg" alt="Assistente" width={40} height={40} />
			)}
			<div className={`flex flex-col ${props.omitirAutor && "pl-16"}`}>
				{!props.omitirAutor && (
					<span className="text-xs text-zinc-600">{props.mensagem.autor}</span>
				)}
				<div className="bg-black text-white px-7 py-4 sm:w-80 rounded-r-3xl rounded-bl-3xl">
					<ContentMD markdown={props.mensagem.texto} />
				</div>
			</div>
		</div>
	)
}

function BalaoDireito(props: MessageBalloonProps) {
	return (
		<div className={`flex flex-col items-end ${props.omitirAutor && "pr-2"}`}>
			{!props.omitirAutor && (
				<span className="text-xs text-zinc-600">{props.mensagem.autor}</span>
			)}
			<div className="bg-red-700 text-white px-7 py-4 sm:w-80 rounded-l-3xl rounded-br-3xl">
				<ContentMD markdown={props.mensagem.texto} />
			</div>
		</div>
	)
}