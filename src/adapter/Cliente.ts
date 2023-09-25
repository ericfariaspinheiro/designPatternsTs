import { Produto } from "./Produto";
import { ITomadaTresPinos } from "./ITomadaTresPinos";

export class Cliente {
    constructor(private tmd: ITomadaTresPinos){};

    ligarTomada(): void {
        let prd: Produto = new Produto();
        prd.idProduto = 1;
        prd.nomeProduto = 'teste';
        let energiaJSON = JSON.stringify(prd);
        console.log('ligou tomada tres pinos');
        console.log(energiaJSON);
        this.tmd.ligar(energiaJSON);
    }
}