//Create an array to store your song names
//Create a loop to display your song names
//Repeat these steps for song artist, song length, image, and link
//Wrap
let songList = ['Memories','Superhero','Happier','ImGood']
let songArtist = ['Maroon 5','The Script','Marshmello',"Abstract"]
let songLength = ['3:09','3:22','3:34','3:33']
let songImage = ['https://upload.wikimedia.org/wikipedia/en/c/c3/Maroon_5_-_Memories.png','https://upload.wikimedia.org/wikipedia/commons/5/53/Nobel_Peace_Prize_Concert_2008_The_Script7.jpg','https://upload.wikimedia.org/wikipedia/en/e/e5/Marshmello_and_Bastille_Happier.png','http://t1.gstatic.com/images?q=tbn:ANd9GcQzwyYQ6vY48DszZ_PAjJhwJIHLlSxrnsnZp8VKn5qXuKWJ5_BB']
let songLink = []


$('.addButton').click(function() {
    var inputOne = $("#inputOne").val();
    songList.push(inputOne);
  songList.forEach(function(song){
    $("#musicName").append(song);

  });

  songArtist.forEach(function(artist){
    $("#musicArtist").append(artist);
  });
  songLength.forEach(function(length){
    $("#musicLength").append(length);
  });






});