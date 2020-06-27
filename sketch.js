var form , bg , m , a , g , s , c=0
function preload(){
   bg=loadImage("bg2.jpg")
   m=loadImage("movies.jpg")
   a=loadImage("art&craft.jpg")
   g=loadImage("games.jpg")
   s=loadImage("songs.jpg")
}
function setup() {
  createCanvas(displayWidth-30,displayHeight-40);
  form = new Form()
  form.display()
}

function draw() {
  if (c===0){
    background(bg);  
  }
  if (c===1){
    background(m);  
  }
  if (c===2){
    background(s);  
  }
  if (c===3){
    background(g);  
  }
  if (c===4){
    background(a);  
  }
 
}