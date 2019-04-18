const acao = require('../acao')

var bitcoins = new Array()

var bitcoin = {
    cd: 0,
    hash: "hash#123"

};

bitcoins[0]=bitcoin

var usuarios = new Array();

var usuario = {
    cd: usuarios.length,
    login: "mauricio",
    senha: "senha",
    saldo: 2500,
    bitcoin_cd: 0,
};
usuarios[usuarios.length] = usuario;

module.exports = async it => {
 
    it( " fib 02 " , ( ) => acao( "a", bitcoins,usuarios, "Comando invalido") )
    it( " fib 02 " , ( ) => acao( "create prod", bitcoins,usuarios, "Operação concluida") )
    it( " fib 02 " , ( ) => acao( "desc bitcoins", bitcoins,usuarios, "Operação concluida") )
    it( " fib 02 " , ( ) => acao( "buy bitcoins", bitcoins,usuarios, "Operação concluida") )
}