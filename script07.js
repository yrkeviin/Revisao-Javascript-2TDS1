let metaLivros = 9;

let livroLidos = ["Eu e esse meu coração", "Jogos de herança", "O verão que mudou minha vida", "A seleção"];

console.log("Seus livros lidos 👇🏾");
for (let i = 0; i < livroLidos.length; i++) {
    console.log(`- ${livroLidos[i]}`);
}

if (livroLidos.length >= metaLivros) {
    console.log("Parabéns! Você atingiu sua meta de leitura!");
} else {
    console.log(`Você está progredindo! Faltam ${metaLivros - livroLidos.length} livros para atingir sua meta.`);
}