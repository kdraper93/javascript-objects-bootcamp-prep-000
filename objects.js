var playlist = {Hanson:"MmmBop"};

function updatePlaylist(obj, key, value) {
  obj[key] = value;
  return obj
}

function removeFromPlaylist(obj, key) {
  delete playlist.key
  return playlist
}