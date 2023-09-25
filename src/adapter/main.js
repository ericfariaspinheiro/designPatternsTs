"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AdapterTomada_1 = require("./AdapterTomada");
var Cliente_1 = require("./Cliente");
var adapter = new AdapterTomada_1.AdapterTomada();
var cli = new Cliente_1.Cliente(adapter);
cli.ligarTomada();
