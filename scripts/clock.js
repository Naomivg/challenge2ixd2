window.onload = function clock(){
	var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    document.getElementById("clock").innerHTML = 
    (hours + ":" + minutes + ":" + seconds);setInterval('clock()', 1000);
}




