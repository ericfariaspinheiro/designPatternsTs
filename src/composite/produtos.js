"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BandejaBasket = exports.Raquete = exports.Bola = void 0;
var Bola = /** @class */ (function () {
    function Bola() {
        this.valor = 0;
    }
    Bola.prototype.valorTotal = function () {
        return this.valor;
    };
    Bola.prototype.imprimir = function () {
        return "Bola: " + this.valor;
    };
    return Bola;
}());
exports.Bola = Bola;
var Raquete = /** @class */ (function () {
    function Raquete() {
        this.valor = 0;
    }
    Raquete.prototype.valorTotal = function () {
        return this.valor;
    };
    Raquete.prototype.imprimir = function () {
        return "Raquete: " + this.valor;
    };
    return Raquete;
}());
exports.Raquete = Raquete;
var BandejaBasket = /** @class */ (function () {
    function BandejaBasket() {
        this.valor = 0;
    }
    BandejaBasket.prototype.valorTotal = function () {
        return this.valor;
    };
    BandejaBasket.prototype.imprimir = function () {
        return "Bandeja de Basquete: " + this.valor;
    };
    return BandejaBasket;
}());
exports.BandejaBasket = BandejaBasket;
