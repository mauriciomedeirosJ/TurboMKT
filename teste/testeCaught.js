const caughtbitcoin = require('../caughtbicoin')

var bitcoins = new Array()

var bitcoin = {
    cd: 0,
    hash: "hash#123"

};
bitcoins[0]=bitcoin
module.exports = async it => {
 
    it( " fib 01 " , ( ) => caughtbitcoin( "a", bitcoins, null ) )
    it( " fib 01 " , ( ) => caughtbitcoin( "hash#123", bitcoins, bitcoins[0] ) )
}