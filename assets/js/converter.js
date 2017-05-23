document.getElementById("converter-button").onclick = function () {
  var link = document.getElementById("link-url").value;
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

document.getElementById("copy-button").onclick = function() {
  var resultlink = document.getElementById("result-link");
  resultlink.select();
  try {
    var successful = document.execCommand('copy');
    // var msg = successful ? 'successful' : 'unsuccessful';
    // console.log('Copying text command was ' + msg);
  } catch (err) {
    // console.log('Oops, unable to copy');
  }
}

// var copyTextareaBtn = document.querySelector('.js-textareacopybtn');
//
// copyTextareaBtn.addEventListener('click', function(event) {
//   var copyTextarea = document.querySelector('.js-copytextarea');
//   copyTextarea.select();

// });

// https://open.spotify.com/track/13sXuI5RjMHm7dz7O3spYs
// spotify:track:13sXuI5RjMHm7dz7O3spYs
//
// https://open.spotify.com/user/spotify/playlist/37i9dQZF1DX3EQWTTNVPtu
// spotify:user:spotify:playlist:37i9dQZF1DX3EQWTTNVPtu
