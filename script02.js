let ingressos = 23;

let batatas = 0;

let nome = "Kevin";

for(let i = 1; i <= ingressos; i++){
    if (i % 3 === 0){
        batatas++
    }
}

if (batatas === 1){
    console.log(`Olá ${nome}! Você ganhou ${batatas} porção de batata frita!`)
} else {
    console.log(`Olá ${nome}! Você ganhou ${batatas} porções de batata frita!`);
}