function numRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const choice = process.argv[2];
const num = Number(process.argv[3])
const numR = numRandom(0, 10)
const soma = (num + numR)

if (choice === "par" && (soma % 2 === 0)) {
    console.log(`você escholheu par e o computador escolheu impar. O resulado foi ${soma}. Você ganhou!`)
} else if (choice === "par" && (soma % 2 !== 0)) {
    console.log(`você escholheu par e o computador escolheu impar. O resulado foi ${soma}. Você perdeu!`)
} else if (choice === "impar" && (soma % 2 !== 0)) {
    console.log(`você escolheu impar e computador escolheu par. O resulado foi ${soma}. Você ganhou`)
}else{
    console.log(`você escolheu impar e computador escolheu par. O resulado foi ${soma}. Você perdeu`)
}

