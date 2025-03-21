export default interface Message {
	id: string
	texto: string
	autor: string
	lado: "esquerdo" | "direito"
}