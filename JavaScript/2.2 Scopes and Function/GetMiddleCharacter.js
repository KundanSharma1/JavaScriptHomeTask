function getMiddle(s)
{
  let l = s.length;
  if(l%2==0){
    let m = l/2;
    return s.substring(m-1,m+1);
  }
  else{
    let m = (l-1)/2;
    return s.substring(m,m+1);
  }
}