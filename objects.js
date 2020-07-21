var playlist= {"Billy Mayes":"Special TV Offer"}
function updatePlaylist(p,a,s){
  p=Object.assign({},p,{[a]:s})
  return p
}
function removeFromPlaylist(p,a){
  delete p[a]
  return p
}
