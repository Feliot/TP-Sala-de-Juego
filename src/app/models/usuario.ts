export interface Usuario {
    id?: string;
    apellido?: string;
    dni?: bigint;
    nombre?: string;
}
export class miUsuario implements Usuario {
    constructor(public nombre?:string  , public apellido?:string, public dni?: bigint ){

    }
}