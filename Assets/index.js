// JavaScript Document

function getTime(){
	let dayPart = new String("");
	var date = new Date();
	var time = date.getHours();
	if (0 <= time < 5 || 21 <= time){
		dayPart = "Night.";
	} else if (5 <= time < 12){
		dayPart = "Morning.";
	} else if (12<= time < 17){
		dayPart = "Afternoon.";
	} else if (17 <= time < 21){
		dayPart = "Evening.";
	}
	document.getElementById("indexGreeting").innerHTML = ("Good " + dayPart);
}
