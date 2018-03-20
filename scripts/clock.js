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

/*
Getting time
*/
window.onload = function() {
	function clock(){
		var time = new Date();
	    var hours = time.getHours();
	    var minutes = time.getMinutes();
	    var seconds = time.getSeconds();

	    minutes = ('0' + time.getMinutes()).slice(-2);
	    seconds = ('0' + time.getSeconds()).slice(-2);

	    document.getElementById("clock").innerHTML = 
	    (hours + ":" + minutes + ":" + seconds);

	    switch(4){
			case 0:
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
			case 20:
			case 21:
			case 22:
			case 23:
			removeSun();
			removeBird();
			animatedTextEvening();
			darkness();
			break;
			case 8:
			case 9:
			case 10:
			case 11:
			case 12:
			removeSun();
			animatedTextMorning();
			morning();
			break;
			case 13:
			case 14:
			case 15:
			case 16:
			case 17:
			case 18:
			case 19:
			animatedSun();
			removeBird();
			animatedTextAfternoon();
			afternoon();
			break;
			default:
		}
	}
	/*retrieving clock*/
	clock();
	setInterval(function(){
		clock();
	}, 1000);
/*morning*/
	function morning(){
		//TweenLite.to('body', 1, {backgroundColor:"#f49c3d", ease:Power3.easeOut})
		//TweenLite.to('#clock', 1, {color:"#000000", ease:Power3.easeOut})
		//TweenLite.to('.bird', 5, {left:window.innerWidth, repeat: -1, yoyo:false, ease:Linear.easeNone});
			     //.to('.bird', 2, {left:0, top:200, repeat:-1, yoyo:true, ease:Linear.easeNone});
		TweenMax.to("body", 3, {backgroundImage:"linear-gradient(to right, #FB903F, #FBD63F, #FB903F)"});

		var textClock = document.getElementById("clock");
		var textColorMorning = new TimelineMax({repeat:0});
		textColorMorning.to('#clock', 1, {color:"#000000", ease:Power3.easeOut});

		var animatedBird = document.getElementsByClassName('bird');
		var birdy = new TimelineMax({repeat:-1});
		birdy.to('.bird', 5, {left:window.innerWidth, yoyo:false, ease:Linear.easeNone});
		birdy.restart();
	}

	/*afternoon*/
	function afternoon(){		
		TweenMax.to("body", 3, {backgroundImage:"linear-gradient(to right, #6ABBFF, #99DBFF, #6ABBFF)"});

		var colorText = document.getElementById("clock");
		var textColorAfternoon = new TimelineMax({repeat:0});
		textColorAfternoon.to('#clock', 1, {color:"#000000", ease:Power3.easeOut});
	}

	/*night*/
	function darkness(){
		if(document.querySelector('.bird') !== null) {
			var bird = document.getElementsByClassName('bird')[0];
			bird.remove();
		} else {
		}

		TweenMax.to("body", 3, {backgroundImage:"linear-gradient(to right, #000000, #0A006A, #000000)"});
		TweenMax.to('#clock', 1, {color:"#ffffff", ease:Power3.easeOut})
	}

	function animatedSun(){
	//TweenMax.to("#sun", 5, {rotation: -90 , transformOrigin:"10px -250px", ease:Linear.easeNone});
		var risingSun = document.getElementsByClassName('sun');
		var sunny = new TimelineMax({repeat: 0 , yoyo:false});
		//sunny.to(risingSun, 1, {bezier:[{x:0, y:0}, {x:250, y:-90}, {x:0, y:0}], ease:Power3.easeInOut});
		sunny.to(risingSun, 50, {left:window.innerWidth, yoyo:false, ease:Linear.easeNone});
		sunny.restart();
	}

	function removeSun(){
		if(document.querySelector('.sun') !== null) {
			var shine = document.getElementsByClassName('sun')[0];
			shine.remove();
		} else {
		}
	}

	function removeBird(){
		if(document.querySelector('.bird') !== null) {
			var bird = document.getElementsByClassName('bird')[0];
			bird.remove();
		} else {
		}
	}

	function animatedTextAfternoon(){
		TweenLite.to(".text", 1, {text:"good afternoon"});
	}

	function animatedTextMorning(){
		TweenLite.to(".text", 1, {text:"good morning"});
	}

	function animatedTextEvening(){
		TweenLite.to(".text", 1, {text:"good night"});
		TweenLite.to('.text', 1, {color:"#ffffff", ease:Power3.easeOut});
	}

}