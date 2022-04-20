function createSecretHolder(secret) {
    var secret;
    return {
      setSecret : function(s){
        secret = s;
      },
      getSecret : function(){
        return secret;
      }
    }
  }