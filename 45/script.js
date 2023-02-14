
// shout out to https://thesoundof.love/
// and Chia Amisola for some inspo!

let playlist = [
    {
        "t": "Avril 14th — Aphex Twin",
        "id": "MBFXJw7n-fU",
    },
    {
        "t": "This Is The Last Time — The National",
        "id": "-VVp-tKqFNY",
    },
    {
        "t": "Video — Aimee Mann",
        "id": "ACPG9_01srI",
    },
    {
        "t": "Kissing Disease — Melodium",
        "id": "RXPL4a8NEpU",
    },
    {
        "t": "Anthems for a Seventeen Year Old Girl — Broken Social Scene",
        "id": "wLaDksDOcE4",
    },
    {
        "t": "lover's carvings — Bibio",
        "id": "vRI2u1v4uCM",
    },
    {
        "t": "I Am Trying to Break Your Heart — Wilco",
        "id": "zlxH9-TYseY",
    },
    {
        "t": "Fall in Love — BADBADNOTGOOD",
        "id": "X9KktAoarmc",
    },
    {
        "t": "Challengers — The New Pornographers",
        "id": "bHWWWa8EvzI",
    },
    {
        "t": "Your Ex-Lover is Dead — Stars",
        "id": "r5Or6-HOveg",
    }
]

let list = document.querySelectorAll("li")
console.log(list)
let selected = 0;;

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
    videoId: 'MBFXJw7n-fU',
    // playerVars: {
    // 'playsinline': 1
    // },
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
    player.videoId = playlist[selected].id;
    console.log(playlist[selected].id)
    player.loadVideoById(playlist[selected].id)
}