var playlist = {Hanson:"MmmBop"};

function updatePlaylist(playlist, Hanson, MmmBop) {
  playlist[Hanson] = MmmBop;
  return playlist
}

function removeFromPlaylist(obj, key) {
  delete playlist.key
  return playlist
}