import { DynamoDBClient, ScanCommand, ScanCommandInput } from "@aws-sdk/client-dynamodb";
import { marshall, unmarshall } from "@aws-sdk/util-dynamodb";
import { Marca } from '../../domain/entities/Marca';

const getAllMarcas = async (): Promise<Marca[]> => {
  const client = new DynamoDBClient({ region: 'us-east-1' }); // Reemplaza 'tu-region' con la región de tu tabla

  const params: ScanCommandInput = {
    TableName: 'MarcaTable',
  };

  try {
    const data = await client.send(new ScanCommand(params));
    const marcas = data.Items?.map((item) => unmarshall(item)) as Marca[]; // Convierte los datos de DynamoDB a objetos de TypeScript
    return marcas;
  } catch (error) {
    console.error("Error al obtener las marcas:", error);
    throw error;
  }
};

export { getAllMarcas };