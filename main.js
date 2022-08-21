//Create a reference for canvas
canvas=document.getElementById("can")
ctx=canvas.getContext("2d")

//Give specific height and width to the car image
var width_car=100
var height_car=150

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
var top_bottom=225
var left_right=5

function add() {
	//upload car, and background images on the canvas.
	background_imgTag=new Image()
	background_imgTag.onload=uploadBackground
	background_imgTag.src=background_image
	
	car_imgTag=new Image()
	car_imgTag.onload=uploadgreencar
	car_imgTag.src=greencar_image
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(background_imgTag,0,0,800,500)

}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(car_imgTag,left_right,top_bottom,width_car,height_car)

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	if(top_bottom>0){
        top_bottom=top_bottom-5
		uploadBackground()
		uploadgreencar()
    }
	

	}
     


function down()
{
	//Define function to move the car downward
	if(top_bottom<450){
        top_bottom=top_bottom+5
		uploadBackground()
		uploadgreencar()
    }
}

function left()
{
	//Define function to move the car left side
	if(left_right>0){
        left_right=left_right-5
		uploadBackground()
		uploadgreencar()
    }
}

function right()
{
	//Define function to move the car right side
	if(left_right<750){
        left_right=left_right+5
		uploadBackground()
		uploadgreencar()
}
}
