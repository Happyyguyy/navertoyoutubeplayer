document.addEventListener("keydown", inputHandler)

function inputHandler(e) {
  if (e.key == " ") {
    if (player.getPlayerState() === 1) {
      setButton("play")
      player.pauseVideo()
    } else if (player.getPlayerState() === 2) {
      setButton("pause")
      player.playVideo()
    }
  }
  if (e.key == "o") {
    getSearchResult("artist", "title")
  }
}

function playButton(e) {
  if (player.getPlayerState() === 1) {
    setButton("play")
    player.pauseVideo()
  } else if (player.getPlayerState() === 2) {
    setButton("pause")
    player.playVideo()
  }
}

setInterval(playbar, 1000)
setInterval(loadbar, 10000)
var current_time;

function loadbar() {
  bar_load = document.querySelector(".bar_load")
  bar_play = document.querySelector(".bar_play")


  bar_load.setAttribute("style", "width: " + Math.round(player.getVideoLoadedFraction()*100) + "%")
}

function playbar() {
  current_time = player.getCurrentTime()

  bar_play.setAttribute("style", "width: " + Math.round(current_time/player.getDuration()*100) + "%")
  progress_played.innerHTML = formatTime(current_time)
}



function getSearchResult(artist, title) {
  $.ajax({
    dataType: "text",
    url: "https://www.youtube.com/results",
    data: {
      search_query: artist + " " + title + " 가사"
    },
    success: function(result) {
      console.log(result);
    }
  })
}
