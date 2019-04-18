//Iportações
const express = require("express");
const app = express();
const readline = require('readline')
const acao = require('./acao')
var  md5  = require ( 'md5' ) ; 

//Mensagem de boas vindas
console.log("Seja Bem vindo ao Checkout de Bitcoin da TurboMKT");

//Função de leitura
var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Lista de usuarios
var usuarios = new Array();
//Primeiro usuário
var usuario = {
    cd: usuarios.length,
    login: "mauricio",
    cdAcesso: md5("mauricio"+"a2345"),
    saldo: 2500,
    bitcoin_cd: 0,
    bitcoin2_cd: 1

};
usuarios[usuarios.length] = usuario;

var usuario2 = {
    cd: usuarios.length,
    login: "roberto",
    cdAcesso: md5("mauricio"+"5432a"),
    saldo: 5000,
    bitcoin_cd: null
};
usuarios[usuarios.length] = usuario2;

//Lista de bitcoins
var bitcoins = new Array()

//primeiro bitcoin
var bitcoin = {
    cd: bitcoins.length,
    usuario_cd: 0,
    preco: 500,
    hash: "hash#123"

};
bitcoins[0] = bitcoin;

//segundo bitcoin
var bitcoin2 = {
    cd: bitcoins.length,
    usuario_cd: 0,
    preco: 500,
    hash: "hash#124"

};
bitcoins[1] = bitcoin2;

leitor.question("Possui cadastro?S/N\n", function (resp) {
    if (resp.toUpperCase() == "N") {
        leitor.question("Digite o login desejado:\n", function (login) {
            //Digite seu código de acesso
            leitor.question("Digite seu codigo de acesso:\n", function (cdAcesso) {     
                //Criando o novo usuario
                var usuario3 = {
                    cd: usuarios.length,
                    login: login,
                    cdAcesso: md5("mauricio"+cdAcesso),
                    saldo: 0,
                    bitcoin_cd: null
                };
                usuarios[usuarios.length] = usuario3;

                //Não consegui resolver esse problema.
                //Queria criar um looping no qual o usuario conseguisse fazer varias ações na mesma seção

                //var flagSaida = false
                //do{

                console.log("\nSaldo atual: R$" + usuarios[usuarios.length - 1].saldo)
                leitor.question("Digite uma ação\n1-buy bitcoins \n2-create prod\n3-desc bitcoins\n", function (comando) {
                    acao(comando, bitcoins, usuarios, usuarios.length - 1,usuarios[usuarios.length- 1])
                    });
                    //leitor.question("deseja continuar", function (answer2) {
                    //    switch (answer2.toUpperCase().trim()) {
                    //       case "S":
                    //            flagSaida = true;
                    //            break;
                    //        case "N":
                    //            break;
                    //        default:
                    //            console.log("Comando invalido\n");
                    //           break;
                    //  }

                    //});
                    //}while(!flagSaida)
            });
        });
    }

    else {
        if (resp.toUpperCase().trim() == "S") {
            leitor.question("Digite seu Login:\n", function (login) {
                //Digite seu código de acesso
                leitor.question("Digite seu codigo de acesso:\n", function (cdAcesso) {
                    var i = 0
                    while ((login != usuarios[i].login) && (md5("mauricio"+cdAcesso) != usuarios[i].cdAcesso) && (i<usuarios.length-1)) {
                        i++
                    }
                            if((login == usuarios[i].login) && (md5("mauricio"+cdAcesso) == usuarios[i].cdAcesso)){
                            console.log("\nLogin efetuado com sucesso")
                            //Não consegui resolver esse problema.
                            //Queria criar um looping no qual o usuario conseguisse fazer varias ações na mesma seção

                            //var flagSaida = false
                            //do{
                            console.log("\nSaldo atual: R$" + usuarios[i].saldo)
                            leitor.question("Digite uma ação\n1-buy bitcoins \n2-create prod\n3-desc bitcoins\n", function (comando) {
                                acao(comando, bitcoins, usuarios,i,usuarios[i])
                            });
                            //leitor.question("deseja continuar", function (answer2) {
                            //    switch (answer2.toUpperCase().trim()) {
                            //        case "S":
                            //            flagSaida = true;
                            //            break;
                            //        case "N":
                            //            break;
                            //        default:
                            //            console.log("Comando invalido\n");
                            //           break;
                            //   }

                            //});
                            //}while(!flagSaida)
                        }else{
                            //Login ou código de acesso incorretos
                            console.log("Login ou codigo de acesso incorretos")
                        }
                    
                });
            });
        } else {
            console.log(resp + " comando não identificado\n");
        }
    }
});

app.listen(8081)