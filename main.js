const predict = require('./predict')

const readline = require("readline")

// Init readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Instatiates rl close function
rl.on("close", function() {
    console.log("\nBye bye... Thanks for ask me!")
    process.exit(0)
})


let data = [
    [2,3,4,6,7],[3,4,5,6,7],[0,2,3,4,5],[0,2,3,7,8],
    [2,3,5,6,8],[0,1,3,5,6],[0,2,3,5,6],[0,2,3,4,5],
    [0,2,4,5,6],[0,1,3,5,6],[2,3,4,5,7],[0,1,2,6,8],
    [0,1,3,5,6],[0,1,2,3,4],[0,3,6,7,8],[1,2,3,4,6],
    [0,3,4,5,8],[0,3,4,6,7],[1,3,5,6,8],[1,3,4,5,8]
]
// This data was generated with:
// let data = predict.gerar(5, 20)

let current_arr = []
function read_number() {
    rl.question("Diz um número entre 0 e 9: ", function(num) {
        if (num < 0 || num > 9) {
            console.log("Número errado!")
            read_number()
        } else {
            current_arr.push(parseInt(num))
            console.log("Você já disse: "+current_arr.join(", "))
            console.log("Acredito que vc também quer: "+predict.compare(data, current_arr))
            read_number()
        }
    })
}
read_number()