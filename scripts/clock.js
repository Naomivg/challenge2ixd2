
/* V1;
window.onload = function clock(){
	var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    document.getElementById("clock").innerHTML = 
    (hours + ":" + minutes + ":" + seconds);
}
*/

window.onload = function() {
	function clock(){
		var time = new Date();
	    var hours = time.getHours();
	    var minutes = time.getMinutes();
	    var seconds = time.getSeconds();
	    document.getElementById("clock").innerHTML = 
	    (hours + ":" + minutes + ":" + seconds);

	    switch(hours){
		case 0:
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
		case 7:
		case 19:
		case 20:
		case 21:
		case 22:
		case 23:
		console.log("het is nu tussen 0 en 2 uur")
		//Als hij hier is wil ik dat de achtergrond van wit naar zwart gaat
		//backgroundColor
		//met to of insert;
		darkness();
		break;
		case 8:
		case 9:
		case 10:
		case 11:
		case 12:
		console.log("het is nu tssen 8 en 12 uur")
		sunshine();
		break;
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		console.log("het is nu tssen 8 en 12 uur")
		afternoon();
		break;


		default:
	}
	}
	clock();
	setInterval(function(){
		clock();
	}, 1000);

	function darkness(){
		TweenLite.to('body', 1, {backgroundColor:"#000000", ease:Power3.easeOut})
		TweenLite.to('#clock', 1, {color:"#ffffff", ease:Power3.easeOut})
	}

	function sunshine(){
		TweenLite.to('body', 1, {backgroundColor:"#f49c3d", ease:Power3.easeOut})
		TweenLite.to('#clock', 1, {color:"#000000", ease:Power3.easeOut})
	}

	function afternoon(){
		TweenLite.to('body', 1, {backgroundColor:"#8bd8f9", ease:Power3.easeOut})
		TweenLite.to('#clock', 1, {color:"#000000", ease:Power3.easeOut})
	}
}

