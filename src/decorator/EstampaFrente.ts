import { BaseDecorator } from "./BaseDecorator";

export class EstampaFrente extends BaseDecorator {
    constructor(private base: BaseDecorator){
        super();
    }

    precoFinal(): number {
        console.log("Estampa frente + 20");
        return this.base.precoFinal() + 20;
    }
}