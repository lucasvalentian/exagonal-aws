import { Marca } from '../entities/Marca';

export interface MarcaRepository{
    listarTodas():Promise<Marca[]>
}