import { ITomadaTresPinos } from "./ITomadaTresPinos";
import { Produto } from "./Produto";
import { TomadaDoisPinos } from "./TomadaDoisPinos";

export class AdapterTomada implements ITomadaTresPinos{
    ligar(energiaJSON: string){
        let doisPinos: TomadaDoisPinos = new TomadaDoisPinos();
        let obj = new Produto(JSON.parse(energiaJSON));
        doisPinos.ligar(this.converterProdutoXml(obj));
        console.log('ligou tomada dois pinos');
    }

    converterProdutoXml(obj: Produto): string{
        let xml = '';
        xml += "<idProduto>";
        xml += obj.idProduto;
        xml += "</idProduto>";
        xml += "<NomeProduto>";
        xml += obj.nomeProduto;
        xml += "</NomeProduto>";   
        return xml;
    }
}