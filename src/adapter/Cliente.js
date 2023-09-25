"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
var Produto_1 = require("./Produto");
var Cliente = /** @class */ (function () {
    function Cliente(tmd) {
        this.tmd = tmd;
    }
    ;
    Cliente.prototype.ligarTomada = function () {
        var prd = new Produto_1.Produto();
        prd.idProduto = 1;
        prd.nomeProduto = 'teste';
        var energiaJSON = JSON.stringify(prd);
        console.log('ligou tomada tres pinos');
        console.log(energiaJSON);
        this.tmd.ligar(energiaJSON);
    };
    return Cliente;
}());
exports.Cliente = Cliente;
