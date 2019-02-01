var songs = [
    "Carpoolin’",
    "Intro (Gangin)",
    "Lane Changing",
    "Calvin Cambridge"
];

var artists = [
    "SOB X RBE",
    "SOB X RBE",
    "SOB X RBE",
    "SOB X RBE",
];

var images = [
    "https://i.ytimg.com/vi/waVIEV0Mg1Q/maxresdefault.jpg",
    "https://i.ytimg.com/vi/5k9AqrkGfPk/maxresdefault.jpg;maxHeight=145;maxWidth=222",
"https://i.ytimg.com/vi/5k9AqrkGfPk/maxresdefault.jpg;maxHeight=145;maxWidth=222",
"https://i.ytimg.com/vi/5k9AqrkGfPk/maxresdefault.jpg;maxHeight=145;maxWidth=222",
    ];

var links = [
    "https://www.youtube.com/watch?v=fBsDSpIPURU",
    "https://www.youtube.com/watch?v=5k9AqrkGfPk",
    "https://www.youtube.com/watch?v=3NsnSbKsZJI",
    "https://www.youtube.com/watch?v=U-_XJkIqWPs"
];

var lengths = [
    339,
    319,
    336,
    228,
    
];

function displaySongInfo(){
    images.forEach(function(image) {
        $("#images").append("<img src='" + image + "'>");   
    });

    songs.forEach(function(song) {
        $("#songs").append("<p>" + song + "</p>"); 
    });

    artists.forEach(function(artist) {
        $("#artists").append("<p> By: " + artist + "</p>");   
    });

    lengths.forEach(function(length) {
        $("#lengths").append("<p>" + length + "</p>"); 
    });

    links.forEach(function(link) {
        $("#links").append("<a href='" + link + "'> Listen </a>"); 
    });
}

function emptySongInfo(){
    $("#images").empty();
    $("#songs").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#links").empty();
}

$("#add").click(function() {
    var songName = $("#song").val();
    var imageUrl = $("#image").val();
    var artistName = $("#artist").val();
    var songLength = $("#length").val();
    var link = $("#links").val();

    songs.push(songName);
    artists.push(artistName);
    images.push(imageUrl);
    lengths.push(songLength);
    links.push(link);

    emptySongInfo()
    displaySongInfo();
});

displaySongInfo();
