chrome.runtime.onInstalled.addListener(function() {
  // Replace all rules ...
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    // With a new rule ...
    chrome.declarativeContent.onPageChanged.addRules([
      {
        // That fires when a page's URL contains a 'g' ...
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlContains: 'naver' },
          })
        ],
        // And shows the extension's page action.
        actions: [ new chrome.declarativeContent.ShowPageAction() ]
      }
    ]);
  });
});


chrome.webRequest.onBeforeRequest.addListener(
  function(req) {
    console.log("blocking")
    return {cancel: true};
  },
  {urls: ["https://hls-music.pstatic.net/*"]},
  ["blocking"]
)

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   $.get("https://www.youtube.com/iframe_api", (result) => {
//     chrome.tabs.executeScript(sender.tab.id, {code: result}, (e) => {
//       // chrome.tabs.executeScript(sender.tab.id, {code:
//         // "onYouTubeIframeAPIReady()"
//       // })
//     })
//   })
// })
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    chrome.identity.getAuthToken({ 'interactive': true }, function(token) {
      // Use the token.
      console.log(token);
      $.ajax({
        dataType: "json",
        url: "https://www.googleapis.com/youtube/v3/search",
        data: {
          part: "id",
          q: request["title"] + " " + request["artist"] + "가사",
          access_token: token
        },
        success: function(result) {
          sendResponse(result);
        },
        error: function(a,b,c) {console.log(a);console.log(b);console.log(c);}
      })

    });
  }
)
