"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bola = exports.Produto = void 0;
var Produto = /** @class */ (function () {
    function Produto(json) {
        this.idProduto = 0;
        this.nomeProduto = '';
        if (json) {
            this.idProduto = json.idProduto;
            this.nomeProduto = json.nomeProduto;
        }
    }
    return Produto;
}());
exports.Produto = Produto;
var Bola = /** @class */ (function (_super) {
    __extends(Bola, _super);
    function Bola() {
        var _this = _super.call(this) || this;
        _this.idProduto = 1;
        _this.nomeProduto = 'Bola';
        return _this;
    }
    return Bola;
}(Produto));
exports.Bola = Bola;
