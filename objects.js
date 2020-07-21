var playlist= new Object({"My Bloody Valentine":"Special TV Offer"})
function updatePlaylist(p,a,s){
  p=Object.assign({},p,{[a]:s})
  console.log(p)
  return p
}
function removeFromPlaylist(p,a){
  delete p[a]
  return p
}
