import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { DynamoDBMarcaRepository } from '../controller/MarcaController';
import { ListarMarcasUseCase } from './../../application/service/ListarMarcasUseCase';


const marcaRepository = new DynamoDBMarcaRepository();
const listarMarcasUseCase = new ListarMarcasUseCase(marcaRepository);

export async function listarMarcasHandler(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {

     try {

        console.log('GetMarcas INIT');

        const listarMarcasUseCasex = await listarMarcasUseCase.execute(); 

        console.log('listarMarcasUseCase ', listarMarcasUseCasex);

    

        console.log('execute ', listarMarcasUseCasex);
        const marcas={
            id:1
        }

        console.log('Lista de Marcas ', marcas);
    
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Datos Cargados Correctamente',
                data: listarMarcasUseCasex
              })
          };
    
        
     } catch (error) {

          
          console.error('Error al ejecutar listarMarcasUseCase:', error);

            return {
            statusCode: 400,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: 'Error al cargar los datos de la Marca',
                error: error
            })
            };
        
     }

}