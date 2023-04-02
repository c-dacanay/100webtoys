
// shout out to https://thesoundof.love/
// and Chia Amisola for some inspo!

let playlist = [
    {
        "t": "Thousand Knives",
        "id": "8Gf_oXcL2bA",
    },
    {
        "t": "Merry Christmas Mr. Lawrence",
        "id": "L49FRjnhrWI",
    },
    {
        "t": "Blu",
        "id": "pWI5aVKvkCg",
    },
    {
        "t": "Andata",
        "id": "6-735-egGWs",
    }
]

let list = document.querySelectorAll("img")
let title = document.getElementById("title")

let selected = 0;

window.addEventListener("load", (e) => {
    for (let i = 0; i < list.length; i++) {
        list[i].addEventListener("click", playSong);
    }
    list[selected].className += "active";
})


var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: '8Gf_oXcL2bA',
    events: {
    'onReady': onPlayerReady,
    'onStateChange': onPlayerStateChange
    }
});

player.videoId = playlist[selected].id;
}

function onPlayerReady(event) {
event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
if (event.data == YT.PlayerState.PLAYING && !done) {
    // setTimeout(stopVideo, 6000);
    done = true;
}
}

function stopVideo() {
player.stopVideo();
}

function playSong(e) {
    stopVideo();
    list.forEach(li => {
    li.classList.remove("active")
    })
    this.className += "active";
    selected = this.id;
    title.innerHTML = playlist[selected].t;
    player.videoId = playlist[selected].id;
    console.log(playlist[selected].id)
    player.loadVideoById(playlist[selected].id)
}