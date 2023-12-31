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
exports.EstampaCostas = void 0;
var BaseDecorator_1 = require("./BaseDecorator");
var EstampaCostas = /** @class */ (function (_super) {
    __extends(EstampaCostas, _super);
    function EstampaCostas(base) {
        var _this = _super.call(this) || this;
        _this.base = base;
        return _this;
    }
    EstampaCostas.prototype.precoFinal = function () {
        console.log("Estampa costas + 10");
        return this.base.precoFinal() + 10;
    };
    return EstampaCostas;
}(BaseDecorator_1.BaseDecorator));
exports.EstampaCostas = EstampaCostas;
