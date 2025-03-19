/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Controller, Get } from "@nestjs/common"
import { Tecnologia } from "@core"
import { TecnologiaPrisma } from "./tecnologia.prisma"

@Controller("tecnologias")
export class TecnologiaController {
	constructor(private readonly repo: TecnologiaPrisma) {}

	@Get()
	async obterTodas(): Promise<Tecnologia[]> {
		return await this.repo.obterTodas()
	}

	@Get("destaques")
	async obterDestaques(): Promise<Tecnologia[]> {
		return await this.repo.obterDestaques()
	}
}
