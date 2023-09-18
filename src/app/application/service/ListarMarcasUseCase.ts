import { Marca } from "../../domain/entities/Marca";
import { MarcaRepository } from "../../domain/repository/MarcaRepository";


export class ListarMarcasUseCase {
    constructor(private listarMarcasUseCase:MarcaRepository){}

    async execute(): Promise<Marca[]> {
        return this.listarMarcasUseCase.listarTodas();
      }
      
}