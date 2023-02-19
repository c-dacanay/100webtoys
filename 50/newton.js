let cphysics = document.getElementById("c-physics")

//NEWTON'S CRADLE
var Engine = Matter.Engine,
  Render = Matter.Render,
  Composites = Matter.Composites,
  Composite = Matter.Composite,
  MouseConstraint = Matter.MouseConstraint,
  Events = Matter.Events,
  Mouse = Matter.Mouse,
  World = Matter.World,
  Constraint = Matter.Constraint,
  Bodies = Matter.Bodies,
  Body = Matter.Body;

// create engine
var engine = Engine.create(), world = engine.world;

// create renderer
var render = Render.create({
  element: cphysics,
  engine: engine,
  options: {
    width: cphysics.clientWidth,
    height: cphysics.clientHeight,
    wireframes: false,
    background: 'transparent'
  }
});

console.log(cphysics.clientHeight)

Engine.run(engine);

Render.run(render);

// newtonsCradle(xx, yy, number, size, length)
var cradleA = Composites.newtonsCradle((cphysics.clientWidth * .2), 0, 4, 45, (cphysics.clientHeight * .65));
var colors = ['#FBFF7B','#E298E4', '#2e94b0', '#7B67F3', '#B6FF8E','#FA5F66', '#FFFFFA'];
var color = 0;

//this starts the movement
Body.translate(cradleA.bodies[0], { x: -100, y: -100 });

//sense collision on all bodies
Events.on(engine, 'collisionStart', function(event) {
 if (color < colors.length -1) {
    color++
 } else {
    color = 0;
 }

    cradleA.bodies.forEach(element => {
        element.render.fillStyle = colors[color];
    });
});

// add mouse control
var mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
            // stiffness: 0.2,
            render: {
                visible: false
            }
        }
    });

Composite.add(world, mouseConstraint);

// keep the mouse in sync with rendering
render.mouse = mouse;

World.add(world, [
  cradleA,
]);
