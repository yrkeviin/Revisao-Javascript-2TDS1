let quantidadePalmas = 23;

let total = "";

for (let i = 1; i <= quantidadePalmas; i++) {
    total += "👏🏾";
    if (i % 5 === 0) {
        total += "🎉";
    }
}

console.log(total);