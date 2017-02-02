 // Example Album
 var albumPicasso = {
     title: 'The Colors',
     artist: 'Pablo Picasso',
     label: 'Cubism',
     year: '1881',
     albumArtUrl: 'assets/images/album_covers/01.png',
     songs: [
         { title: 'Blue', duration: '4:26' },
         { title: 'Green', duration: '3:14' },
         { title: 'Red', duration: '5:01' },
         { title: 'Pink', duration: '3:21'},
         { title: 'Magenta', duration: '2:15'}
     ]
 };
 
 // Another Example Album
 var albumMarconi = {
     title: 'The Telephone',
     artist: 'Guglielmo Marconi',
     label: 'EM',
     year: '1909',
     albumArtUrl: 'assets/images/album_covers/20.png',
     songs: [
         { title: 'Hello, Operator?', duration: '1:01' },
         { title: 'Ring, ring, ring', duration: '5:01' },
         { title: 'Fits in your pocket', duration: '3:21'},
         { title: 'Can you hear me now?', duration: '3:14' },
         { title: 'Wrong phone number', duration: '2:15'}
     ]
 };

 var albumTaxpayers = {
     title: 'God, Forgive These Bastards',
     artist: 'The Taxpayers',
     label: 'Punk',
     year: '2012',
     albumArtUrl: 'assets/images/album_covers/godforgive.jpg',
     songs: [
         { title: 'As the Sun Beat Down', duration: '2:59' },
         { title: "Atlanta's own", duration: '3:36' },
         { title: 'Who the Hell are You', duration: '1:43'},
         { title: 'Goddamn These Hands of Mine', duration: '2:15' },
         { title: 'Drinking With Mickey Mantle', duration: '2:49' },
         { title: 'Raised in the Shadows', duration: '1:31' },
         { title: 'Weapon of God', duration: '2:19'},
         { title: 'Jimmy Barletts Teeth', duration: '1:52' },
         { title: 'Hungry Dog in the Street', duration: '1:41' },
         { title: 'The Buisness Man', duration: '2:57' },
         { title: 'The Carriage Town Clinic', duration: '2:55'},
         { title: 'I Love You Like an Alcoholic', duration: '3:36' },
         { title: 'Some Rotten Man', duration: '4:05'},
         { title: 'Let the Seconds Do their Worst', duration: '3:02'}
     ]
 };

var createSongRow = function(songNumber, songName, songLength) {
     var template =
        '<tr class="album-view-song-item">'
      + '  <td class="song-item-number">' + songNumber + '</td>'
      + '  <td class="song-item-title">' + songName + '</td>'
      + '  <td class="song-item-duration">' + songLength + '</td>'
      + '</tr>'
      ;
 
     return template;
 };
     // #1
var albumTitle = document.getElementsByClassName('album-view-title')[0];
var albumArtist = document.getElementsByClassName('album-view-artist')[0];
var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
var albumImage = document.getElementsByClassName('album-cover-art')[0];
var albumSongList = document.getElementsByClassName('album-view-song-list')[0];
 

var setCurrentAlbum = function(album) {
     // #2
     albumTitle.firstChild.nodeValue = album.title;
     albumArtist.firstChild.nodeValue = album.artist;
     albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
     albumImage.setAttribute('src', album.albumArtUrl);
 
     // #3
     albumSongList.innerHTML = '';
 
     // #4
     for (var i = 0; i < album.songs.length; i++) {
         albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
     }
 };
 
window.onload = function() {
    setCurrentAlbum(albumPicasso);
    
    var albums = [albumPicasso, albumMarconi, albumTaxpayers];
    var index = 1;
    albumImage.addEventListener("click", function(event) {
        setCurrentAlbum(albums[index]);
        index++;
        if (index == albums.length) {
            index = 0;
        }
    });
};