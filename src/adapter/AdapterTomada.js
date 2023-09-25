"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdapterTomada = void 0;
var Produto_1 = require("./Produto");
var tomadaDoisPinos_1 = require("./tomadaDoisPinos");
var AdapterTomada = /** @class */ (function () {
    function AdapterTomada() {
    }
    AdapterTomada.prototype.ligar = function (energiaJSON) {
        var doisPinos = new tomadaDoisPinos_1.TomadaDoisPinos();
        var obj = new Produto_1.Produto(JSON.parse(energiaJSON));
        doisPinos.ligar(this.converterProdutoXml(obj));
        console.log('ligou tomada dois pinos');
    };
    AdapterTomada.prototype.converterProdutoXml = function (obj) {
        var xml = '';
        xml += "<idProduto>";
        xml += obj.idProduto;
        xml += "</idProduto>";
        xml += "<NomeProduto>";
        xml += obj.nomeProduto;
        xml += "</NomeProduto>";
        return xml;
    };
    return AdapterTomada;
}());
exports.AdapterTomada = AdapterTomada;
