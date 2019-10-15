export interface Usuario {
    id?: string;
    apellido?: string;
    dni?: bigint;
    nombre?: string;
    email?: string;
    imagen?: string;
    password?: string;
}
export class miUsuario implements Usuario {
    constructor(public nombre?:string  , public apellido?:string, public dni?: bigint ,
        public email?: string, public imagen?: string, public password?: string){

    }
}