const buy = require('../buy')

var bitcoins = new Array()

var bitcoin = {
    cd: 0,
    usuario_cd: 0,
    preco: 3000,
    hash: "hash#124"

};

bitcoins[0]=bitcoin

var usuarios = new Array();

var usuario = {
    cd: usuarios.length,
    login: "mauricio",
    senha: "senha",
    saldo: 2500,
    bitcoin_cd: 0
};
usuarios[usuarios.length] = usuario;
var usuario2 = {
    cd: usuarios.length,
    login: "roberto",
    senha: "senha",
    saldo: 3000,
    bitcoin_cd: null
};
usuarios[usuarios.length] = usuario2;
var usuario3 = {
    cd: usuarios.length,
    login: "marcos",
    senha: "senha",
    saldo: 2000,
    bitcoin_cd: null
};

module.exports = async it => {
 
    it( " fib 03 " , ( ) => buy( usuario3, bitcoin, usuarios, 2) )
    it( " fib 03 " , ( ) => buy( usuario2, bitcoin, usuarios, 0) )
    it( " fib 03 " , ( ) => buy( usuario, bitcoin, usuarios, 4) )
}