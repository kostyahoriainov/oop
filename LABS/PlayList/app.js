var song1 = new Song('Song1', 'Denys', '01:23');
var song2 = new Song('Song2', 'Dima', '01:24');
var movie1 = new Movie('movie1', 'url1', '01:24');
var movie2 = new Movie('movie2', 'url2', '01:24');

var playlist = new PlayList();

playlist.add(song1);
playlist.add(song2);
playlist.add(movie1);
playlist.add(movie2);

var list = document.querySelector('#list');
var btnNext = document.querySelector('#btn-next');
var btnPlay = document.querySelector('#btn-play');
var btnStop = document.querySelector('#btn-stop');



function renderPlaylist() {
    list.innerHTML = playlist.renderIn();
}

renderPlaylist();

btnPlay.addEventListener('click', function(){
    playlist.play();
    renderPlaylist();
})

btnNext.addEventListener('click', function () {
    playlist.next();
    renderPlaylist();
})

btnStop.addEventListener('click', function () {
    playlist.stop();
    renderPlaylist();
})





