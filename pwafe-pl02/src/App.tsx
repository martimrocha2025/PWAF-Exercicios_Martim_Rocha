

import Etiqueta from './components/Etiqueta';
import Preco from './components/Preco';

export default function App() {
  return (
    <main className="flex flex-col items-center gap-4 p-8">
      <h1 className="text-3xl font-bold">Ementa de hoje</h1>
      <Preco valor={5.5} />
      <div className="flex gap-2">
        <Etiqueta texto="Normal" variante="Normal" />
        <Etiqueta texto="Aviso" variante="Aviso" />
      </div>
    </main>
  );
}