import { Module } from "@nestjs/common"
import { TecnologiaController } from "./tecnologia.controller"
import { DbModule } from "src/db/db.module"
import { TecnologiaPrisma } from "./tecnologia.prisma"

@Module({
	controllers: [TecnologiaController],
	providers: [TecnologiaPrisma],
	imports: [DbModule],
})
export class TecnologiaModule {}
