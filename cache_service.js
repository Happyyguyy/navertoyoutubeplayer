function cacheId(key, value, callback) {
  console.log("caching: {", key, ":", value, "}" );
  chrome.storage.sync.set({[key]: value}, function(){
    callback(value)
  })
}

function getId(artist, title, callback) {
  console.log("getting id for: ", artist, ", ", title);
  chrome.storage.sync.get(artist+title, function(result) {
    if (result[artist+title] === undefined) {
      console.log("no cached id");
      searchSong(artist, title, function(id) {
        if (typeof(id) === 'string') {
          cacheId(artist+title, id, function(id) {
            callback(id)
          })
        } else {
          callback(id)
        }
      })
    } else {
      console.log("cached id found: ", result[artist+title]);
      callback(result[artist+title])
    }
  })
}

function searchSong(artist, title, callback) {
  console.log("searching for: ", title, ", ", artist);
  $.ajax({
    dataType: "json",
    url: "https://www.googleapis.com/youtube/v3/search",
    data: {
      part: "id",
      q: title + " " + artist + " 가사",
      key: APIKEY,
    },
    success: function(result) {
      console.log(result);
      console.log("id found: ", result["items"][0]["id"]["videoId"]);
      callback(result["items"][0]["id"]["videoId"])
    },
    error: function(a,b,c) {
      alert("Quota for the day reached. Playing default playlist");
      callback({list: "RDQG8bUKBT9FI"})
    }
  })

}
