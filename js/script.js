//Create an array to store your song names
//Create a loop to display your song names
//Repeat these steps for song artist, song length, image, and link
//Wrap
//let songList = ['Memories','Superhero','Happier','ImGood']
//let songArtist = ['Maroon 5','The Script','Marshmello',"Abstract"]
//let songLength = ['3:09','3:22','3:34','3:33']
//let songImage = ['https://upload.wikimedia.org/wikipedia/en/c/c3/Maroon_5_-_Memories.png','https://upload.wikimedia.org/wikipedia/commons/5/53/Nobel_Peace_Prize_Concert_2008_The_Script7.jpg','https://upload.wikimedia.org/wikipedia/en/e/e5/Marshmello_and_Bastille_Happier.png','http://t1.gstatic.com/images?q=tbn:ANd9GcQzwyYQ6vY48DszZ_PAjJhwJIHLlSxrnsnZp8VKn5qXuKWJ5_BB']
//let songLink = []
let songA = {
  song: "Memories",
  artist: "Maroon 5",
  songlength: "3:15",
  img: 
  ';<img src="https://upload.wikimedia.org/wikipedia/en/c/c3/Maroon_5_-_Memories.png">',
  link: 'https://www.youtube.com/watch?v=SlPhMPnQ58k',

};



let songB= {
  song: "Superhero",
  artist: "The Script",
  songlength: "4:00",
  img: 
'<img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Nobel_Peace_Prize_Concert_2008_The_Script7.jpg">',

  link: 'https://www.youtube.com/watch?v=IowZqZHJ-cA',
};


let songC = {
  song: "Happier",
  artist: "Marshmello",
  songlength: "3:38",
  img: 
'<img src="
  https://upload.wikimedia.org/wikipedia/en/e/e5/Marshmello_and_Bastille_Happier.png">',
  link: 'https://www.youtube.com/watch?v=RE87rQkXdNw',

};


let songD = {
  song: "I'm Good",
  artist: "Abstract",
  songlength: "3:32",
  img: 
'<img src="http://t1.gstatic.com/images?q=tbn:ANd9GcQzwyYQ6vY48DszZ_PAjJhwJIHLlSxrnsnZp8VKn5qXuKWJ5_BB">',

  link: 'https://www.youtube.com/watch?v=0vsnwUJjunU',

};

let allSongs = [songA,songB,songC,songD];



$('.addButton').click(function() {
    var inputOne = $("#inputOne").val();
    allSongs.push(inputOne);
  allSongs.forEach(function(song){
    $('#musicArtist').append(song.artist);
    $('#musicName').append(song.song);
    $('#musicLength').append(song.songlength);
    $('#musicImage').append(song.img);
    $('#musicLink').append(song.link);
  });





});