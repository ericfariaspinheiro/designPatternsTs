import { Cliente } from "./Cliente";
import { ProxyBD } from "./ProxyBD";

let proxy: ProxyBD = new ProxyBD();
let cliente: Cliente = new Cliente(proxy);
console.log(cliente.getTotalVendas());
console.log(cliente.getTotalVendas());