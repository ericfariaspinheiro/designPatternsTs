import { BaseDecorator } from "./BaseDecorator";

export class MangaLonga extends BaseDecorator {
    constructor(private base: BaseDecorator) {
        super();
    }

    precoFinal(): number {
        console.log("Manga longa + 10");
        return this.base.precoFinal() + 10;
    }    
}