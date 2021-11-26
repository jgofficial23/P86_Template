//create reference to the canvas using fabric library.

 var x= document.getElementById("myAudio");

function new_image()
{
	
	fabric.Image.fromURL('BirthdayImage.jpg', function(Img) {
	block_image_object = Img;
		
	block_image_object.scaleToWidth(700);
	block_image_object.scaleToHeight(510);
    //set block_image_object top anf left to 0 each.

    
	canvas.add(block_image_object);
	});
	
}

function playSound(){
	x.play();
}
