import { BaseDecorator } from "./BaseDecorator";

export class GolaFechada extends BaseDecorator {
    private base: BaseDecorator;
    
    constructor(classeBase: BaseDecorator) {
        super();
        this.base = classeBase;
    }

    precoFinal(): number {
        console.log("Gola fechada + 15");
        return this.base.precoFinal() + 15;
    }    
}