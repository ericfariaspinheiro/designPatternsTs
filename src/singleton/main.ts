import { Produto } from "./Produto";

let prd: Produto = Produto.getInstance();
prd.idProduto = 1;
prd.nomeProduto = "novo produto 1";


let prd2: Produto = Produto.getInstance();
console.log(prd);
console.log(prd2);


prd2.nomeProduto = "mudou nome 1"


console.log(prd);
console.log(prd2);

prd2.nomeProduto = "mudou nome 2"
console.log(prd);

