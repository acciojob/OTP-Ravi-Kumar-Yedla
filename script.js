//your JS code here. If required.
function handleInput(input,event){
	// automatically move to the next input on typing a number
	if(/^\d$/.test(input.value) && input.nextElementSibling){
		input.nextElementSibling.focus();
	}
}

function handleKeyDown(input,event){
	 // Move to the previous input on backspace key press
	if(event.key ==="Backspace" && input.previousElementSibling){
		input.previousElementSibling.focus();
	}
}