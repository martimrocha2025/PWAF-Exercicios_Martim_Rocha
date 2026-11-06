type EtiquetaProps = {
  texto: string;
  variante: 'Normal' | 'Aviso';
};

export default function Etiqueta({ texto, variante }: EtiquetaProps) {
  const estilo =
    variante === 'Aviso'
      ? 'bg-yellow-100 text-yellow-800'
      : 'bg-green-100 text-green-800';

  return <span className={`rounded px-2 py-1 text-sm ${estilo}`}>{texto}</span>;
}
