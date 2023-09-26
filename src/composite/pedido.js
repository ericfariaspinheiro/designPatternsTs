"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedido = void 0;
var Pedido = /** @class */ (function () {
    function Pedido() {
        this.listItem = [];
        this.nome = '';
    }
    Pedido.prototype.valorTotal = function () {
        var vValor = 0;
        this.listItem.forEach(function (item) {
            vValor += item.valorTotal();
        });
        return vValor;
    };
    Pedido.prototype.addItem = function (item) {
        this.listItem.push(item);
    };
    Pedido.prototype.imprimir = function () {
        var vImprimir = this.nome + ": " + this.valorTotal() + "\n";
        this.listItem.forEach(function (item) {
            vImprimir += item.imprimir() + "\n";
        });
        return vImprimir;
    };
    return Pedido;
}());
exports.Pedido = Pedido;
