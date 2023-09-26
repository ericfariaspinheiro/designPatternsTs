import { iBD } from "./iBD";
import { BD } from "./BD";

export class ProxyBD implements iBD {
    private todasAsVendas: string = '';

    getTodasVendas(): string {
        if(this.todasAsVendas == ''){
            console.log("Chamou proxy");
            let bd: BD = new BD()
            this.todasAsVendas = bd.getTodasVendas();
        }

        return this.todasAsVendas;
    }
}