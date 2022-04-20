function partitionOn(pred, items) {
    var c = 0;
    for(var i=0;i<items.length;i++){
      if(!pred(items[i])){
        var t = items[i];
        items.splice(i,1);
        items.splice(c,0,t);
        c++;
      }
    }
    return c;
  }