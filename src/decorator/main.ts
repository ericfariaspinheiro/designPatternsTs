import { BaseDecorator } from "./BaseDecorator";
import { EstampaFrente } from "./EstampaFrente";
import { EstampaCostas } from "./EstampaCostas";
import { GolaFechada } from "./GolaFechada";
import { MangaLonga } from "./MangaLonga";

let camisa: BaseDecorator = new BaseDecorator();
console.log("Camisa basica: " + camisa.precoFinal());
let estampafrente: EstampaFrente = new EstampaFrente(camisa);
let estampacostas: EstampaCostas = new EstampaCostas(estampafrente);
let manglonga: MangaLonga = new MangaLonga(estampacostas);
let glfech: GolaFechada = new GolaFechada(manglonga);

console.log("Preco total: " + glfech.precoFinal());