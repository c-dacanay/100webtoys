// const emoji = ["✂", "🪨", "📜"];
const emoji = ["🌻", "⛈", "☀️"];
const items = [];
const countPerEmoji = 75;
const setBoardWidth= "100vw";
const setBoardHeight= "100vh";
const itemWidth = 50;
const board = document.getElementById("board");
const speedBoost = 1.5;
const margin = 10;

for (let i = 0; i < countPerEmoji; i++) {
  for (let o = 0; o < emoji.length; o++) {
    const item = document.createElement("div");
    item.classList.add("item");
    item.textContent = emoji[o]; 
    items.push(item);
  }
}

board.style.width = setBoardWidth;
board.style.height = setBoardHeight;

const boardWidth = board.clientWidth;
const boardHeight = board.clientHeight;

for (let i = 0; i < items.length; i++) {
  const item = items[i];
  const randomX = Math.floor(Math.random() * (boardWidth - itemWidth)); 
  const randomY = Math.floor(Math.random() * (boardHeight - itemWidth));
  item.style.left = randomX + "px";
  item.style.top = randomY + "px";
  board.appendChild(item);
}


setInterval(function () {
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const currentX = parseInt(item.style.left);
    const currentY = parseInt(item.style.top);
    const randomX =
      currentX +
      Math.floor(Math.random() * (itemWidth / 5 + 1)) * speedBoost -
      itemWidth / 10;
    const randomY =
      currentY +
      Math.floor(Math.random() * (itemWidth / 5 + 1)) * speedBoost -
      itemWidth / 10;

    if (randomX < -margin) {
        console.log('whoop')
      item.style.left = randomX - boardWidth + "px";
    } else if (randomX > boardWidth - itemWidth + margin) {
      item.style.left = boardWidth + randomX + "px";
    } else {
      item.style.left = randomX + "px";
    }

    if (randomY < -margin) {
      item.style.top = randomY - boardHeight + "px";
    } else if (randomY > boardHeight - itemWidth + margin) {
      item.style.top =  boardHeight + randomY + "px";
    } else {
      item.style.top = randomY + "px";
    }

    


    for (let j = 0; j < items.length; j++) {
      if (i !== j) {
        const otherItem = items[j];
        const otherX = parseInt(otherItem.style.left);
        const otherY = parseInt(otherItem.style.top);
        const distance = Math.sqrt(
          Math.pow(currentX - otherX, 2) + Math.pow(currentY - otherY, 2)
        );
        if (distance < itemWidth) {
          compareEmoji(item, otherItem);
        }
      }
    }
  }
}, 100);

function compareEmoji(emoji1content, emoji2content) {
  var emoji1 = emoji1content.textContent,
    emoji2 = emoji2content.textContent;
  if (emoji1 === emoji2) {
    //console.log("Gelijkspel!");
  } else if (emoji1 === emoji[0] && emoji2 === emoji[1]) {
    //["✂", "🪨", "📜"] //emoji1 verliest steen wint
    emoji1content.textContent = emoji[1];
  } else if (emoji1 === emoji[1] && emoji2 === emoji[0]) {
    //["✂", "🪨", "📜"] //emoji2 verliest steen wint
    emoji2content.textContent = emoji[1];
  } else if (emoji1 === emoji[1] && emoji2 === emoji[2]) {
    //["✂", "🪨", "📜"] //emoji1 verliest papier wint
    emoji1content.textContent = emoji[2];
  } else if (emoji1 === emoji[2] && emoji2 === emoji[1]) {
    //["✂", "🪨", "📜"] //emoji2 verliest papier wint
    emoji2content.textContent = emoji[2];
  } else if (emoji1 === emoji[0] && emoji2 === emoji[2]) {
    //["✂", "🪨", "📜"] //emoji2 verliest schaar wint
    emoji2content.textContent = emoji[0];
  } else if (emoji1 === emoji[2] && emoji2 === emoji[0]) {
    //["✂", "🪨", "📜"] //emoji1 verliest schaar wint
    emoji1content.textContent = emoji[0];
  } else {
    // console.log("error");
  }
}
