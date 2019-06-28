var playlist = {Hanson:"MmmBop"};

function updatePlaylist(obj, key, value) {
  obj[key] = value;
  return obj
}

function removeFromPlaylist(playlist, key, value) {
  delete playlist.key
  return playlist
}