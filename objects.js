var playlist = {Hanson:"MmmBop"};

function updatePlaylist(playlist, Hanson, MmmBop) {
  playlist[Hanson] = MmmBop;
  return playlist
}

function removeFromPlaylist(playlist, Hanson) {
  delete playlist.Hanson;
  return playlist
}