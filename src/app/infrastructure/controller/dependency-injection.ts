
import { DynamoDBMarcaRepository } from './MarcaController';
import { ListarMarcasUseCase } from './../../application/service/ListarMarcasUseCase';


const marcarepository= new DynamoDBMarcaRepository();

const listarMarcasUseCase=new ListarMarcasUseCase(marcarepository);


export default listarMarcasUseCase;