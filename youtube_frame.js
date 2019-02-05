var player;
var apiKey = "AIzaSyDAFF9bKlG4-wuSybQ5zBvNO913gZDIHaM"
function onYouTubeIframeAPIReady(videoID) {
  player = new YT.Player('player', {
    height: '200',
    width: '200',
    playerVars: {
      listType: 'playlist',
      list: "RDQG8bUKBT9FI"
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
  console.log(player);
}

function onPlayerReady(event) {
  setButton("pause");
  event.target.playVideo();
  nextSong()
}

var skip = false
function onPlayerStateChange(event) {
  console.log(event.data);
  console.log(event);
  if (event.data === YT.PlayerState.PLAYING) {
    setButton("play")
  } else if (event.data === YT.PlayerState.PAUSED) {
    setButton("pause")
  } else if (event.data === YT.PlayerState.ENDED) {
    setButton("pause")
    next.click()

  } else if (event.data === YT.Playerstate.UNSTARTED) {
    setTimeout(function() {
      setButton("pause")
      if (player.getPlayerState() == YT.PlayerState.UNSTARTED) {
        nextSong()
      }
    }, 5000)
  }
}
