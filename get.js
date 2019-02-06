var title = getTitle()
var artist = getArtist()
var play;
var next;
var previous;
var bar_load;
var bar_play;
var progress_played;
var progress_total;

// observer to reassign if nodes die
var updateObserver = new MutationObserver(reassign)
// observer when track changes
var changeObserver = new MutationObserver(nextSong)


function getTitle() {
  return document.querySelector(".info_song .song_marquee p span")
}

function getArtist() {
  return document.querySelector(".info_artist a .name")
}

function waiting() {
  console.log("waiting for content load")
  var checkLoop = setInterval(check, 200)

  function check() {
    if (title = getTitle()) {
      clearInterval(checkLoop)
      // Set buttons
      play = document.querySelector(".play")
      prev = document.querySelector(".prev")
      next = document.querySelector(".next")
      bar_play = document.querySelector(".bar_play")
      progress_total = document.querySelector(".progress_duration .total")
      progress_played = document.querySelector(".progress_duration .played")

      updateObserver.observe(document.querySelector("div.player_info"), {childList: true})
      console.log(updateObserver);
      changeObserver.observe(title.childNodes[0], {characterData: true})
      // insert youtube placeholder
      var placeholder1 = document.createElement("div")
      placeholder1.setAttribute("id", "player")
      document.body.appendChild(placeholder1)
      onYouTubeIframeAPIReady()
      nextSong()
      play.addEventListener("click", playButton)

    }
  }
}

waiting()

function nextSong(mutationsList, observer) {
  setButton("play")
  console.log("nextSong");
  if (mutationsList === "next") {
    var i = 1
  }
  var i = 0
  console.log(i);
  title = getTitle().innerHTML
  artist = getArtist().innerHTML
  getId(artist, title, playVideo)
  // chrome.runtime.sendMessage({title: title, artist: artist}, function(result) {
  //   player.loadVideoById(result["items"][i]["id"]["videoId"])
  // })

}

function reassign(a, b) {
  var checkLoop = setInterval(check, 200)

  function check() {
    if (title = getTitle()) {
      clearInterval(checkLoop)
      artist = getArtist()
      changeObserver.observe(title.childNodes[0], {characterData: true})
      nextSong()
    }
  }

}
function setButton(state) {
  if (state == "play") {
    play.className = "play is_paused"
  } else if (state == "pause") {
    play.className = "play"
  }
}

// TODO: implement proper total time
function formatTime(seconds) {
  return Math.floor(seconds/60) + ":" + Math.round(seconds % 60)
}


function playVideo(id) {
  console.log("playing: ", id);
  if (typeof(id) == "object") {
    player.loadPlaylist(id)
  } else if (typeof(id) == "string") {
    player.loadVideoById(id)
  }
}
