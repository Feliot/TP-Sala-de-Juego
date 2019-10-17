export interface Puntaje {
    horario?: any;
    juego?: string;
    nameuser?: string;
    puntaje?: string;
    detalle?: string;
    uid?:string;
}
export class miPuntaje implements Puntaje {
    constructor(public horario?:any  , public juego?:string, public nameuser?: string ,
        public puntaje?: string, public detalle?: string, public uid?:string){
    }
}