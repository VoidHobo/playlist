//Create an array to store your song names
//Create a loop to display your song names
//Repeat these steps for song artist, song length, image, and link
//Wrap
let songList = ['Memories', 'Superhero', 'Happier', 'ImGood']
let songArtist = []
let songLength = []
let songImage = []
let songLink = []


$('.button').click(function() {
  songList.ForEach(function(list){
    $("musicName").append(list);
  });

  songArtist.ForEach(function(artist){
    $(musicArtist).append(artist);
  });
  songLength.ForEach(function(length){
    $(musicLength).append(length);
  });






});