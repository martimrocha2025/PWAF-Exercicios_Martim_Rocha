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
    
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-2xl rounded-lg bg-white p-8 shadow-2xl font-sans font-semibold">
        <p className="mb-6 text-center text-sm text-gray-600 md:text-left">
          {saudacao(horaAtual)}
        </p>

        <section className="flex flex-col items-center gap-5 text-center md:flex-row md:gap-8 md:text-left">
          <div className="flex size-16 shrink-0 items-center justify-center rounded-full bg-blue-100 text-2xl font-semibold text-blue-700">
            {perfil.nome[0]}
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{perfil.nome}</h1>
            <p className="mt-1 text-sm text-gray-500">
              {perfil.curso} · {perfil.ano}º ano · {perfil.cidade}
            </p>
          </div>
        </section>

        <div className="mt-6 flex flex-wrap justify-center gap-2 md:justify-start">
          {perfil.interesses.map((interesse) => (
            <span className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700">
              {interesse}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}
