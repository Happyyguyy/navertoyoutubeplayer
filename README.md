__Not intended to infringe naver or youtube api use policy.__


Will remove on request.


Chrome extension to manipulate the naver music web player and play youtube videos instead of music.


uses youtube iframe api and youtube data api to search for and play a youtube video in the naver music web player.

Motivation:

  As a fan of korean music, I found Spotify very lacking. It would lack certain songs and certain artists and not have Korean charts. 
  
  Overall frustrating to use. 
  
  Naver Music on the other hand provides all the Korean music but as a streaming service, one must purchase the premium service. However, non paying free users get full access to the music site and get to play music _but_ limited to only 1min of playback. 

  This solution uses the Naver Music web player to take song data and automatically play a youtube video. 
  Now I have access to all the korean music and real-time charts I need with the convenience of


implementation:

extension blocks music stream data so the web player doesn't play music directly.

the extension scrapes the web player for title and artist.

places a search for title and artist and "lyrics" on the youtube data api.

top search result is then played in a youtube iframe in the web player.




features:

the extension listens to play, back, next buttons and switches the youtube video accordingly.

extension listens to the youtube video play state and automatically advances to the next song.

if video is unplayable in iframe, the player advances to the next song

extension listens to the current play time and load percentages and adjusts the web player progress bar.

defaults to hardcoded default playlist when daily quota is reached




todo:

add feature to youtube fallback when youtube data api quota reached. (possibly an automatic youtube search)

modify caching behavior to allow for 30day checking.
