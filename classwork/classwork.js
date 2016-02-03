/*
  Classwork
*/

var cellSize = 90;

function setup(){
  createCanvas(windowWidth,windowHeight);

  var testCircle = "yellow";
  var diameter = 100;



  for(var row = 0; row <5;row++){

    for(var column =0; column <5;column++){

fill(random(255),random(255),random(255));

      rect(cellSize*column, cellSize*row, cellSize, cellSize);


      //for(var slant = 0; slant <5;slant++){
      //for(var left = 0; slant<5; slant++)


  arc(cellSize*column, cellSize*row,90,90,HALF_PI,PI)
      line(cellSize*column, cellSize*row, cellSize*column+90, cellSize*row+90);
      fill("mediumPurple")
      ellipse(cellSize*column, cellSize*row,30,30)








    }
  }
}
