document.getElementById("converter-button").onclick = function () {
  var link = document.getElementById("link-url").value;
  if (link.includes("spotify")) {
    if (link.includes("/")) {
      if (link.includes("track")) {
        var spl = link.split("/");
        var result = "spotify:track:"+spl[4];
        document.getElementById("result-link").value = result;
      }
      else {
        var spl = link.split("/");
        var result = "spotify:user:"+spl[4]+":playlist:"+spl[6];
        document.getElementById("result-link").value = result;
      }
    }
    else {
      if (link.includes("track")) {
        var spl = link.split(":");
        var result = "https://open.spotify.com/track/"+spl[2];
        document.getElementById("result-link").value = result;
      }
      else {
        var spl = link.split(":");
        var result = "https://open.spotify.com/user/"+spl[2]+"/playlist/"+spl[4];
        document.getElementById("result-link").value = result;
      }
    }
  }
  else {
    alert("Not a Spotify link")
  }
}

document.getElementById("copy-button").onclick = function() {
  var resultlink = document.getElementById("result-link");
  resultlink.select();
  document.execCommand('copy');
}
