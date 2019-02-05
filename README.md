__Not intended to infringe naver or youtube iframe usage policy.__


Will remove on request.


Chrome extension to manipulate the naver music web player and play youtube videos instead of music.


uses youtube iframe api and youtube data api to search for and play a youtube video in the naver music web player.


method:

extension blocks music stream data so the web player doesn't play music directly.

the extension scrapes the web player for title and artist.

places a search for title and artist and "lyrics" on the youtube data api.

top search result is then played in a youtube iframe in the web player.




features:

the extension listens to play, back, next buttons and switches the youtube video accordingly.

extension listens to the youtube video play state and automatically advances to the next song.

if video is unplayable in iframe, the player advances to the next song

extension listens to the current play time and load percentages and adjusts the web player progress bar.

defaults to hardcoded playlist when daily quota is reached




todo:

add feature to youtube fallback when youtube data api quota reached.

add feature to cache youtube video ids to limit api calls for repeated plays: use chrome extension storage api. 
