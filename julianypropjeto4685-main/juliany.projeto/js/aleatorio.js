const nomes = ["Otávio", "Nathan", "Maria Eloísa", "Gabriel", "Ana", "Sinclair", "Demian"];
export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)