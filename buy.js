var Buy = function(usuario, bitcoin, usuarios){
  if(usuario==usuarios[bitcoin.usuario_cd]){
      return 4
    }else{
      if(usuario.saldo>=bitcoin.preco){
        usuario.saldo=usuario.saldo - bitcoin.preco
        usuarios[bitcoin.usuario_cd].saldo = usuarios[bitcoin.usuario_cd].saldo + bitcoin.preco
        usuarios[bitcoin.usuario_cd].bitcoin = null
        bitcoin.usuario_cd=usuario.cd
        return 0
      }else{
        return 2
      }
    }
}
module.exports = Buy

