"use strict";
// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums.
function make_album(artist, album_title, numbers_of_tracks) {
    return {
        trackArtist: artist,
        albumTitle: album_title,
        trackCount: numbers_of_tracks,
    };
}
let myAlbum = make_album("David Guetta", "Trampoline");
console.log(myAlbum);
console.log(myAlbum.trackArtist);
console.log(myAlbum.albumTitle);
let completeAlbum = make_album("Taylor Swift", "Come On", 14);
console.log(completeAlbum);
console.log(completeAlbum.albumTitle);
console.log(completeAlbum.trackArtist);
console.log(completeAlbum.trackCount);
