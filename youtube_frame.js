var player;
var apiKey = "AIzaSyDAFF9bKlG4-wuSybQ5zBvNO913gZDIHaM"
function onYouTubeIframeAPIReady(videoID) {
  player = new YT.Player('player', {
    height: '200',
    width: '200',
    videoId: 'M7lc1UVf-VE',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
  console.log(player);
}

function onPlayerReady(event) {
  setButton("play");
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

  }
  // else if (event.data === YT.PlayerState.UNSTARTED) {
  //   setTimeout(function() {
  //     setButton("pause")
  //     if (player.getPlayerState() == YT.PlayerState.UNSTARTED) {
  //       nextSong("next")
  //       setTimeout(() => {
  //         if (player.getPlayerState() == YT.PlayerState.UNSTARTED) {next.click()}
  //       }, 5000)
  //     }
  //   }, 5000)
  // }
}
