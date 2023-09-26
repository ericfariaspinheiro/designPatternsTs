import { BaseDecorator } from "./BaseDecorator";

export class EstampaCostas extends BaseDecorator {
    constructor(private base: BaseDecorator){
        super();
    }

    precoFinal(): number {
        console.log("Estampa costas + 10");
        return this.base.precoFinal() + 10;
    }
}