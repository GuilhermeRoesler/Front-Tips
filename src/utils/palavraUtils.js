export async function carregarPalavras() {
    const resp = await fetch("/termo_wordlist.txt");
    const texto = await resp.text();
    return texto.split("\n").map(p => p.trim()).filter(p => p.length === 5);
}
