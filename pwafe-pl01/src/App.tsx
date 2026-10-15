export default function App() {
  const nome = 'Martim';
  const curso = 'DS';
  const ano = 2;
  const cidade = 'Porto';

  return (
    <main>
      <h1>Olá, sou o {nome}!</h1>

      <p>Estou no curso de {curso}</p>
      <p>Estou no {ano}º ano. Para o próximo ano estou no {ano + 1}º ano.</p>
      <p>Sou da cidade do {cidade}</p>
    </main>

    
  );


  //Erros 

  //1º -> h1 class ="" está errado, o correto é className =""

  //2º -> "Olá, nome!" iria mostrar literalmente "Olá, nome!", o correto é usar "Olá, {nome}!" para dizer que é uma variável

  //3º -> É necessário colocar o h1, img e o p dentro de <> </>, se não dá erro

  //4º -> No <img> é necessário encerrar com /> e não com apenas >, se não dá erro





}