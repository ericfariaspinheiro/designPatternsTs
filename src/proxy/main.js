"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cliente_1 = require("./Cliente");
var ProxyBD_1 = require("./ProxyBD");
var proxy = new ProxyBD_1.ProxyBD();
var cliente = new Cliente_1.Cliente(proxy);
console.log(cliente.getTotalVendas());
console.log(cliente.getTotalVendas());
