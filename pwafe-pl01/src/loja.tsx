

type Produto = {
nome: string;
preco: number;
emStock: boolean;
};

const produto: Produto = {
nome: 'Teclado',
preco: 49.90,
emStock: true,
};

function precoComIva(valor: number): number {
return valor * 1.23;
}

export default function Loja() {
return <p>{produto.nome}: {precoComIva(produto.preco)} €</p>;
}


//Erros

//1º  -> A variavel preco é do tipo number, por isso deve ficar preco: 49.90 sem aspas

//2º -> A variavel emStock é do tipo boolean, por isso deve ficar emStock: true ou emStock: false, sem aspas

//3º -> na função precoComIva, estamos à espera de um number que neste caso seria a variavel preco, 
// mas estamos a passar a variavel produto.nome que é do tipo string

