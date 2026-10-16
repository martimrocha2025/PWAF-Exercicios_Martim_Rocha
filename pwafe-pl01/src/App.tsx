export default function App() {
  type Perfil = {
  nome: string;
  curso: string;
  ano: number;
  cidade: string;
  interesses: string[];
  procuraEstagio: boolean;
  }

  const perfil: Perfil = {
    nome: 'Martim',
    curso: 'DS',
    ano: 2,
    cidade: 'Porto',
    interesses: ['Programação', 'Jogos', 'Música'],
    procuraEstagio: true,
  }

  const horaAtual = new Date().getHours();

  function saudacao(hora: number): string {
    if (hora < 12) {
      return 'Bom dia!'
    }
    else if (hora < 20) {
      return 'Boa tarde!'
    }
    else {
      return 'Boa noite!'
    }
  }

  return (
    
    <main>
      
      <h1>{saudacao(horaAtual)}</h1>
      <h1>Olá, sou o {perfil.nome}!</h1>

      <p>Estou no curso de {perfil.curso}</p>
      <p>Estou no {perfil.ano}º ano. Para o próximo ano estou no {perfil.ano + 1}º ano.</p>
      <p>Sou da cidade do {perfil.cidade}</p>
      <p>Os meus interesses são: {perfil.interesses.join(', ')}</p>
      
    </main>
  

    
  );
   
  }

  //Erros 

  //1º -> h1 class ="" está errado, o correto é className =""

  //2º -> "Olá, nome!" iria mostrar literalmente "Olá, nome!", o correto é usar "Olá, {nome}!" para dizer que é uma variável

  //3º -> É necessário colocar o h1, img e o p dentro de <> </>, se não dá erro

  //4º -> No <img> é necessário encerrar com /> e não com apenas >, se não dá erro





