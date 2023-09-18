
export const DATA_CLIENTE={

    ID_CLIENTE:{
        esValido: (valor: string) => /^[A-Z0-9]{1,30}$/.test(valor),
        mensajeValidacion: 'El ID del cliente tiene que ser valido'
    }
}