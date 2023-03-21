
const sketch = (p5) => {

    const canvas_width = 600;

    // player locations
    let playerX, playerY;
    let playerTile;

    // control variables for animating movement
    let waypoints = []
    let waypointPath = [];
    let animating = false
    let movingTo = null

    // player methods
    const drawPlayer = () => {
        p5.strokeWeight(0)
        p5.fill('#FA5F66')
        p5.circle(playerX, playerY, 10)
    }

    // move the player to the movingTo destination
    // if we are there already, get the next tile from the queue (waypointPath)
    // if the queue is empty, we have arrived at the final destination
    const movePlayer = () => {
        if (movingTo == null) {
            animating = false
            return
        }
        animating = true
        const dX = movingTo.px - playerX
        const dY = movingTo.py - playerY
        if (Math.sqrt(dX * dX + dY * dY) < 1) {
            movingTo = waypointPath.shift()
            //stop movement
            if (movingTo == undefined) {
                animating = false
                waypointPath = [];
                waypoints = []
                return
            }
        } else {
            playerX += dX / 10
            playerY += dY / 10
            let playerCoord = Tile.pxToCoord({ x: playerX, y: playerY })
            playerTile = Map.getTile(playerCoord)
            if (playerTile.event) {
                //display event stuff
                document.getElementById("event").classList.add('show');
                document.getElementById("e-title").innerHTML = playerTile.event.title;
                document.getElementById("e-text").innerHTML = playerTile.event.text;
                document.getElementById("e-result").innerHTML = playerTile.event.effect;

                //stop movement
                animating = false
                waypointPath = [];
                waypoints = []
            } else {
                document.getElementById("event").classList.remove('show')
            }

            playerTile.path = null
            playerTile.waypoint = null
        }
    }

    p5.setup = () => {
        Map.generateTiles()
        //aspect ratio
        p5.createCanvas(canvas_width, canvas_width * 9 / 16);
        playerTile = Map.tiles[7]
        playerX = playerTile.px
        playerY = playerTile.py
    }

    p5.draw = () => {
        p5.background('white')
        Map.draw(p5)
        movePlayer()
        drawPlayer()
    }

    // click tiles to set them as waypoints
    p5.mouseClicked = () => {
        if (animating)
            return
        const clickedTile = Map.tiles.find((t) => t.selected)
        if (clickedTile) {
            if (clickedTile.waypoint) {
                waypoints = waypoints.splice(waypoints.indexOf(clickedTile), 1)
                clickedTile.waypoint = false
            } else {
                waypoints.push(clickedTile)
                clickedTile.waypoint = true
            }
            waypointPath = Map.markWaypointPath(p5, playerTile, waypoints)
        }
    }

    // press a key to move
    p5.keyPressed = () => {
        if (animating) {
            return
        }
        movingTo = waypointPath.shift()
    }

}

new p5(sketch);

/// Map


const Map = {
    width: 6,
    height: 6,
    tiles: [],
}

Map.getTile = (coord) => {
    return Map.tiles[coord.y * Map.width + coord.x]
}

Map.generateTiles = () => {
    for (let j = 0; j < Map.height; j++) {
        for (let i = 0; i < Map.width; i++) {
            Map.tiles.push(new Tile(i, j))
        }
    }

    //select a handfull of random tiles, give them events
    Map.tiles[0].event = events.asteroids;
    Map.tiles[5].event = events.signal;
    Map.tiles[15].event = events.pirates;
}

Map.draw = (p5) => {
    for (const tile of Map.tiles) {
        tile.checkMouse(p5)
        tile.draw(p5)
    }
}


Map.getTilePath = (p5, start, end) => {
    const steps = axialDist(start, end) + 1
    console.log(start, end, steps - 1)
    const dQ = end.q - start.q
    const dR = end.r - start.r
    const dS = end.s - start.s
    const dQStep = dQ / steps
    const dRStep = dR / steps
    const dSStep = dS / steps

    const pt = { q: start.q, r: start.r, s: start.s }
    const path = [start]

    for (let i = 0; i < steps; i++) {
        const tileCoord = axialToCoord(cube_round(pt))
        const currentTile = Map.getTile(tileCoord)
        const lastTileInPath = path.slice(-1)[0]
        if (currentTile != lastTileInPath) {
            path.push(currentTile)
        }
        pt.q += dQStep
        pt.r += dRStep
        pt.s += dSStep
    }

    return path
}

Map.getWaypointPath = (p5, start, waypoints) => {
    let node = start
    const path = []
    for (const dest of waypoints) {
        path.push(...Map.getTilePath(p5, node, dest))
        node = dest
    }
    // remove elements that got duplicated
    if (path.length > 0) {
        path.push(waypoints.slice(-1)[0])
        const dedup_path = [start]
        for (const node of path) {
            if (node != dedup_path.slice(-1)[0]) {
                dedup_path.push(node)
            }
        }
        return dedup_path
    }
    return path
}

Map.markWaypointPath = (p5, start, waypoints) => {
    const path = Map.getWaypointPath(p5, start, waypoints)
    for (const t of Map.tiles) {
        t.path = null
    }
    for (const i in path) {
        path[i].path = i
    }
    return path
}

// Tile

const tile_size_px = 60;
const HEXAGON_CONSTANT = Math.sqrt(3) / 2
const SELECTED_COLOR = '#2e94b0';
const WAYPOINT_COLOR = '#B6FF8E';
const DEFAULT_COLOR = '#292B2C'

// draw a hexagon to the p5 context at x, y, with size s and given color
const draw_hexagon = (p5, transX, transY, s, color) => {
  p5.push();
  p5.stroke(color);
  p5.strokeWeight(1);
  p5.fill(color);
  p5.translate(transX, transY);
  p5.scale(s);
  p5.beginShape();
  p5.vertex(-0.5, -HEXAGON_CONSTANT / 4)
  p5.vertex(-0.5, HEXAGON_CONSTANT / 4)
  p5.vertex(0, HEXAGON_CONSTANT / 2)
  p5.vertex(0.5, HEXAGON_CONSTANT / 4)
  p5.vertex(0.5, -HEXAGON_CONSTANT / 4)
  p5.vertex(0, -HEXAGON_CONSTANT / 2)

  p5.endShape(p5.CLOSE);
  p5.pop();
}

// class to manage tiles
class Tile {
  constructor(x, y) {
    //grid position
    this.x = x
    this.y = y
    //pixel position
    const px = Tile.coordToPx({ x: this.x, y: this.y })
    this.px = px.x
    this.py = px.y
    //fukin axial position / cubic
    const axial = coordToAxial({ x: this.x, y: this.y })
    this.q = axial.q
    this.r = axial.r
    this.s = -this.q - this.r
    this.explored = false
    this.selected = false
  }

  static coordToPx(coord) {
    const offset = coord.y % 2 == 0 ? 0 : tile_size_px / 2
    const xpx = (coord.x + 0.5) * tile_size_px + offset
    const ypx = (coord.y + 0.66) * tile_size_px * HEXAGON_CONSTANT * HEXAGON_CONSTANT
    return { x: xpx, y: ypx }
  }

  static pxToCoord(coord) {
    const y = Math.round(coord.y / HEXAGON_CONSTANT / HEXAGON_CONSTANT / tile_size_px - 0.66)
    const offset = y % 2 == 0 ? 0 : tile_size_px / 2
    const x = Math.round((coord.x - offset) / tile_size_px - 0.5)
    return { x: x, y: y }
  }

  draw(p5) {
    let color = DEFAULT_COLOR
    if (this.waypoint) {
      color = WAYPOINT_COLOR
    }
    if (this.selected) {
      color = SELECTED_COLOR
    }
    if (this.event) {
      color = '#7B67F3';
    }

    draw_hexagon(p5, this.px, this.py, tile_size_px / 2.1, color)

    if (this.path) {
      p5.push()
      p5.translate(this.px, this.py)
      p5.text(this.path, 0, 0)
      p5.pop()
    }

    //if this has an event then you can change color or w/e
  }

  checkMouse(p5) {
    const dX = p5.mouseX - this.px
    const dY = p5.mouseY - this.py
    const dist = Math.sqrt(dX * dX + dY * dY)
    this.selected = (dist < tile_size_px / 2.2)
  }

}



// Hex
// hex coordinates helper functions
// mostly stolen from https://www.redblobgames.com/grids/hexagons
const axialToCoord = (ax) => {
    const x = ax.q + (ax.r - (ax.r & 1)) / 2
    const y = ax.r
    return { x, y }
}

const coordToAxial = (coord) => {
    const q = coord.x - (coord.y - (coord.y & 1)) / 2
    const r = coord.y
    return { q, r }
}

const axialDist = (a, b) => {
    return (Math.abs(a.q - b.q)
        + Math.abs(a.q + a.r - b.q - b.r)
        + Math.abs(a.r - b.r)) / 2
}

const cube_round = (pt) => {
    let q = Math.round(pt.q)
    let r = Math.round(pt.r)
    let s = Math.round(pt.s)

    const q_diff = Math.abs(q - pt.q)
    const r_diff = Math.abs(r - pt.r)
    const s_diff = Math.abs(s - pt.s)

    if (q_diff > r_diff && q_diff > s_diff) {
        q = -r - s
    } else if (r_diff > s_diff) {
        r = -q - s
    } else {
        s = -q - r

    }
    return { q, r, s }
}

// Events
const events = {
    asteroids: {
         "title": "The Tabrini Asteroids",
         "text": "Your Capsule does its best to navigate through the dense field of obliterated rocks and metals, but you are no pilot. You brush against an asteroid and the entire cabin flickers.",
         "effect": "-1 Energy"
     },
     signal: {
         "title": "An Errant Signal",
         "text": "Your Capsule picks up a radio message as you glide through empty space. 'Rendezvous at Sierra 21-3.' The message repeats over and over.",
         "effect": "+1 Area of Interest"
     },
     pirates: {
         "title": "Amytis of Babylon",
         "text": "A ship appears on your radar, but it's a fearsome thing made of guns and steel. You send a plea for rescue and recieve a message. 'Can't pick up strangers, but dropped this for you. Godspeed.' ",
         "effect": "+1 Energy -1 Morale"
     }
 }