import useLocalStorage from "./UseLocalStorage"
import Message from "@/model/Message"
import { useState } from "react"
import { Id } from "../../../core/src"
import conversar from "@/functions/chat"

export default function useChat() {
	const [chatId] = useLocalStorage<string>("chatId", Id.gerar())
	const [mensagens, setMensagens] = useLocalStorage<Message[]>("mensagens", [])
	const [pensando, setPensando] = useState(false)

	async function adicionarMensagem(texto: string) {
		try {
			setPensando(true)
			const novaMensagem: Message = {
				id: Id.gerar(),
				texto,
				autor: "Visitante",
				lado: "direito",
			}

			setMensagens((msgs) => [...msgs, novaMensagem])

			const resposta = await conversar(chatId, novaMensagem)

			if (!resposta) return

			const mensagemResposta: Message = {
				id: Id.gerar(),
				texto: resposta,
				autor: "Assistente",
				lado: "esquerdo",
			}

			setMensagens((msgs) => [...msgs, mensagemResposta])
		} finally {
			setPensando(false)
		}
	}

	function limparMensagens() {
		setMensagens([])
	}

	return {
		chatId,
		mensagens,
		pensando,
		adicionarMensagem,
		limparMensagens,
	}
}