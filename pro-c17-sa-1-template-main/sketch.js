var box;


function setup() 
{
  createCanvas(400, 400);
  box = new Box(10,30,10,10,0.5,0.4);
}

function draw() 
{
  background(220);

   box.show();

   box.moveup();
}

