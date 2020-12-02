function init_signaturepad(){
	
	var wrapper = document.getElementById("signature-pad");
	var canvas = wrapper.querySelector("canvas");
	var context = canvas.getContext('2d');
    var imageObj = new Image();

     imageObj.onload = function() {
       context.drawImage(imageObj, 69, 50);
     };
     imageObj.src = './signee';
    
	var clearSignature = wrapper.querySelector("[data-action=clear-signature]");
	var changeColorButton = wrapper.querySelector("[data-action=change-colorBlack]");
	var changeColorButtonBlue = wrapper.querySelector("[data-action=change-colorBlue]");
	var changeColorButtonRed = wrapper.querySelector("[data-action=change-colorRed]");
	var saveSignature = wrapper.querySelector("[data-action=save-signature]");

	var signaturePad = new SignaturePad(canvas);
	
	var xmlHttp = new XMLHttpRequest();
	    xmlHttp.open( "GET", imageObj.src, false); // false for synchronous request
	    xmlHttp.send( null );
	
	if(xmlHttp.responseText.length > 0){
		
			  clearSignature.addEventListener("click", function (event) {
				  if (signaturePad.on()) {
					  var wrapper = document.getElementById("signature-pad");
				  } else {
					  signaturePad.clear();
				  }
				});

				changeColorButton.addEventListener("click", function (event) {
					
					var blackButton = "#000000";
					signaturePad.penColor = blackButton;
				}); 
				
				changeColorButtonBlue.addEventListener("click", function (event) {
					
						var buttonBlue = "#077AFF";
						signaturePad.penColor = buttonBlue;
				});

				changeColorButtonRed.addEventListener("click", function (event) {
					  
						var buttonRed = "#FD0000";
						signaturePad.penColor = buttonRed;
				});
				
				signaturePad.off();
				
				return true;
				
	}else {
			
			clearSignature.addEventListener("click", function (event) {
			  signaturePad.clear();
			});
			
			changeColorButton.addEventListener("click", function (event) {
				
				var blackButton = "#000000";
				signaturePad.penColor = blackButton;
			});
			
			changeColorButtonBlue.addEventListener("click", function (event) {
				
					var buttonBlue = "#077AFF";
					signaturePad.penColor = buttonBlue;
			});

			changeColorButtonRed.addEventListener("click", function (event) {
				  
					var buttonRed = "#FD0000";
					signaturePad.penColor = buttonRed;
			});
			
			return false;
	}
	
	
}






