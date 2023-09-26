import { iBD } from "./iBD";

export class BD implements iBD {
    getTodasVendas(): string {
        console.log("Chamou getTodasVendas() na classe BD");
        return "Todas as vendas classe BD";
    }
}