import { AdapterTomada } from "./AdapterTomada";
import { Cliente } from "./Cliente";

let adapter: AdapterTomada = new AdapterTomada();
let cli: Cliente = new Cliente(adapter);
cli.ligarTomada();