import type { Prato } from '../types';


export const pratos: Prato[] = [
{ id: 1, nome: 'Sopa de legumes', preco: 1.2, categoria: 'sopa',
vegetariano: true, alergenios: ['aipo'] },
{ id: 2, nome: 'Bacalhau com natas', preco: 5.5, categoria: 'prato',
vegetariano: false, alergenios: ['peixe', 'leite', 'glúten'] },
{ id: 3, nome: 'Caril de grão', preco: 4.8, categoria: 'prato',
vegetariano: true, alergenios: [] },
{ id: 4, nome: 'Posta de Carne', preco: 10.5, categoria: 'prato',
vegetariano: false, alergenios: ['carne'] },
{ id: 5, nome: 'Salmão grelhado', preco: 12.8, categoria: 'prato',
vegetariano: false, alergenios: ['peixe'] },
{ id: 6, nome: 'Bolo de chocolate', preco: 7.9, categoria: 'sobremesa',
vegetariano: true, alergenios: ['chocolate'] },
];