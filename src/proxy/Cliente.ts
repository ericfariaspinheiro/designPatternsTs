import { iBD } from "./iBD";

export class Cliente {
    constructor(private bd: iBD){}

    getTotalVendas(): string{
        return this.bd.getTodasVendas();
    }
}