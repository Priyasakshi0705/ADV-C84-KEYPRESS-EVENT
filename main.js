Canvas= document.getElementById("myCanvas");
ctx = Canvas.getContext("2d");

var img_forall

img_forall_width = Canvas.width;
img_forall_height = Canvas.height;


img_x = 0;
img_y = 0;

function add() {
		img_uploaded = new Image(); 
		img_uploaded.onload = upload_img; 
		img_uploaded.src = img_forall;  
	}
	

function upload_img(){
	ctx.drawImage(img_uploaded, img_x, img_y,img_forall_width,img_forall_height );
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){

keyPressed = e.keyCode;
console.log(keyPressed);

if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90)){
	aplhabetkey();
	document.getElementById("myCanvas").innerHTML= "You Pressed the alphabet Key";
	console.log("Alphabet Key"); }

	else if (keyPressed >=48 && keyPressed<=57){
		numberkey();
		document.getElementById("myCanvas").innerHTML= "You Pressed the number Key";
	console.log("Number Key");
}

else if (keyPressed >=37 && keyPressed<=40){
	arrowkey();
	document.getElementById("myCanvas").innerHTML= "You Pressed the arrow Key";
console.log("Arrow Key");
}

else if((keyPressed == 17) || (keyPressed == 18) || (keyPressed== 27)){

	document.getElementById("myCanvas").innerHTML= "You Pressed the Special Key";
specialkey();
	console.log("Special Key");
}


	else {
		document.getElementById("myCanvas").innerHTML="You pressed symbol or other key";
	otherkey();	
}
}




 function aplhabetkey()
 {
	 img_forall="Alpkey.png";
	 add();
 }

 function numberkey()
 {
	 img_forall="numkey.png";
	 add();
 }

 function arrowkey()
 {
	if(keyPressed >=48 && keyPressed<=57);
	 img_forall="Arrkey.png";
    up();
    down();
    right();
    left();
	 add();
 }

 function specialkey(){

	img_forall="spkey.png";

	if(keyPressed == 17){
console.log("ctrl key is pressed");
	}
	if(keyPressed == 18){
		console.log("alt key is pressed");
			}

    if(keyPressed == 27){
	console.log("Esc key is pressed");
		}
		add();
}

function otherkey(){
	// if(e.shiftKey == true &&  (keyPressed >=48 && keyPressed<=57)){
	img_forall="otherkey.png";
	add();
}


function up(){
	if(keyPressed == 38){
	console.log("up arrow key is pressed")}
}
function down(){
	if(keyPressed == 40){
	console.log(" down arrow key is pressed")}
}
function right(){
	if(keyPressed == 39){
	console.log("up arrow right key is pressed")}
}
function left(){
	if(keyPressed == 37){
	console.log("up arrow left key is pressed")}
}