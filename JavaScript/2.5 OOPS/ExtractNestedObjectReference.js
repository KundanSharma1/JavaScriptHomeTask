// return the nested property value if it exists,
// otherwise return undefined
Object.prototype.hash = function(string) {
  try{
    return eval(`this.${string}`)
  }
  catch(e){
    return undefined
  }
}