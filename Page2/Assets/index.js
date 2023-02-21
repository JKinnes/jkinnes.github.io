// JavaScript Document

function getTime(){
	let dayPart = new String("");
	var date = new Date();
	var time = date.getHours();
	
	if (0 <= time && time < 12){
		dayPart = "Morning.";
	} else if (12<= time && time < 17){
		dayPart = "Afternoon.";
	} else if (17 <= time){
		dayPart = "Evening.";
	}
		
	return ("Good " + dayPart);
}
