export interface Cliente {
    user?: string;
    pass?: string;
}
export class miCliente implements Cliente {
    constructor(public user?: string, public pass?: string){
    }
}