var CaughtBitcoin = function(hash,bitcoins){
    i=0
    while(hash!=bitcoins[i].hash && i<bitcoins.length-1){
        i++
    }
    if(bitcoins[i].hash==hash){
      return bitcoins[i]
    }else{
      return null
    }
    
  }
  module.exports = CaughtBitcoin