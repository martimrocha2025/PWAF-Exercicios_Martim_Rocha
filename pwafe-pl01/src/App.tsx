export default function App() {
  const nome = 'Rita';

  return (
    <>
      <h1 className="titulo">Olá, {nome}!</h1>
      <img src="/favicon.svg" alt="Logo" />
      <p>Bem-vinda ao PWAFE</p>
    </>
  );


  //Erros 

  //1º -> h1 class ="" está errado, o correto é className =""

  //2º -> "Olá, nome!" iria mostrar literalmente "Olá, nome!", o correto é usar "Olá, {nome}!" para dizer que é uma variável

  //3º -> É necessário colocar o h1, img e o p dentro de <> </>, se não dá erro

  //4º -> No <img> é necessário encerrar com /> e não com apenas >, se não dá erro
}