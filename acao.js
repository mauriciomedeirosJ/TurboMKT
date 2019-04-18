const buy = require('./buy')
const caughtbitcoin = require('./caughtbicoin')
const readline = require('readline')

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var acao = function (acao, bitcoins, usuarios, i, usuario) {
    switch (acao.toUpperCase().trim()) {
        case "BUY BITCOINS":
            leitor.question("Digite o 'hash' do bitcoin que deseja comprar\n", function (hash) {
                var bitcoin = caughtbitcoin(hash, bitcoins)
                if (bitcoin == null) {
                    console.log("Bitcoin não indentificado")
                } else {
                    var vendedor = usuarios[bitcoin.usuario_cd].login
                    var retornoBuy = buy(usuario, bitcoin, usuarios)
                    switch (retornoBuy) {
                        case 2:
                            console.log("Saldo insuficiente")
                            break
                        case 4:
                            //Impossível realizar uma compra do seu próprio bitcoin
                            console.log("Impossivel realizar uma compra do seu proprio bitcoin")
                            break
                        default:
                            //Operação concluída
                            console.log("Operação concluida")
                            console.log("\nComprado de " + vendedor)
                            console.log("\nNovo saldo " + usuario.saldo)
                            break
                    }
                }
            });
            break;
        case "DESC BITCOINS":
            for (i = 0; i < bitcoins.length; i++) {
                console.log(bitcoins[i].hash)
            }
            //Operação concluída
            console.log("Operação concluida")
            break;
        case "CREATE PROD":
            var a = (bitcoins[bitcoins.length - 1].hash).substring(5, (bitcoins[bitcoins.length - 1].hash).length)
            var b = parseInt(a)
            leitor.question("Digite o valor do bitcoin\n", function (answer) {
                var price = answer
                var newbitcoin = {
                    cd: bitcoins.length,
                    usuario_cd: i,
                    preco: price,
                    hash: "hash#" + (b + 1)
                }
                usuarios[i].bitcoin2_cd = bitcoins.length
                bitcoins[bitcoins.length] = newbitcoin
                //Operação concluída
                console.log("Operação concluida")
                console.log("Preço: " + newbitcoin.preco)
                console.log("Hash: " + newbitcoin.hash)
            });
            break;
        default:
            //Comando inválido
            console.log("Comando invalido")
            break;

    }
}
module.exports = acao