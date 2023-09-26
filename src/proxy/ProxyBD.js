"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProxyBD = void 0;
var BD_1 = require("./BD");
var ProxyBD = /** @class */ (function () {
    function ProxyBD() {
        this.todasAsVendas = '';
    }
    ProxyBD.prototype.getTodasVendas = function () {
        if (this.todasAsVendas == '') {
            console.log("Chamou proxy");
            var bd = new BD_1.BD();
            this.todasAsVendas = bd.getTodasVendas();
        }
        return this.todasAsVendas;
    };
    return ProxyBD;
}());
exports.ProxyBD = ProxyBD;
