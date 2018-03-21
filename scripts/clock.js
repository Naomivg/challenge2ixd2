/* V1;
window.onload = function clock(){
var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    document.getElementById("clock").innerHTML = (hours + ":" + minutes + ":" + seconds);
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
  minutes = ("0" + time.getMinutes()).slice(-2);
  seconds = ("0" + time.getSeconds()).slice(-2);
  document.getElementById("clock").innerHTML = (hours + ":" + minutes + ":" + seconds);
   switch(15){
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
	animatedStars();
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
	}
}
	/*retrieving clock*/
	clock();
	setInterval(function(){
		clock();
	}, 1000);
/*morning*/
	function morning(){
		var clockColor = document.getElementById("clock");
		var textColorClock = new TimelineMax();
		textColorClock.to(clockColor, 1, {color:"#000000", ease:Power3.easeOut});
		//TweenLite.to('#clock', 1, {color:"#000000", ease:Power3.easeOut});
		TweenLite.to("body", 3, {backgroundImage:"linear-gradient(to right, #FB903F, #FBD63F, #FB903F)"});

		var animatedBird = document.getElementsByClassName("bird");
		var birdy = new TimelineMax({repeat:-1});
		birdy.to(animatedBird, 5, {left:window.innerWidth, yoyo:false, ease:Linear.easeNone});
		birdy.restart();
	}

	/*afternoon*/
	function afternoon(){		
		TweenMax.to("body", 3, {backgroundImage:"linear-gradient(to right, #6ABBFF, #99DBFF, #6ABBFF)"});

		var colorText = document.getElementById("clock");
		var textColorAfternoon = new TimelineMax({repeat:0});
		textColorAfternoon.to(colorText, 1, {color:"#000000", ease:Power3.easeOut});
	}

	/*night*/
	function darkness(){
		TweenMax.to("body", 3, {backgroundImage:"linear-gradient(to right, #000000, #0A006A, #000000)"});
		TweenMax.to("#clock", 1, {color:"#ffffff", ease:Power3.easeOut});
	}

	function animatedSun(){
	//TweenMax.to("#sun", 5, {rotation: -90 , transformOrigin:"10px -250px", ease:Linear.easeNone});
		var risingSun = document.getElementsByClassName("sun");
		var sunny = new TimelineMax({ yoyo:true});
		//sunny.to(risingSun, 1, {bezier:[{x:0, y:0}, {x:250, y:-90}, {x:0, y:0}], ease:Power3.easeInOut});
		sunny.to(risingSun, 1, {bezier:{type:"soft", 
			values:[{x:0, y:0} , 
			{x:50, y:-50} , 
			{x:100, y:-100} , 
			{x:150, y:-150} , 
			{x:200, y:-200} ,
			{x:250, y:-250} ,
			{x:300, y:-200} ,
			{x:350, y:-200} ,
			{x:400, y:-150} ,
			{x:450, y:-100} ,
			{x:500, y:-50}  ,
			{x:550, y:0} ]}, ease:Power3.easeInOut});
	}

	function removeSun(){
		if(document.querySelector(".sun") !== null) {
			var shine = document.getElementsByClassName("sun")[0];
			shine.remove();
		} else {
		}
	}

	function removeBird(){
		if(document.querySelector(".bird") !== null) {
			var bird = document.getElementsByClassName("bird")[0];
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
		TweenLite.to(".text", 1, {color:"#ffffff", ease:Power3.easeOut});
	}

	function animatedStars(){
	var total = 5;
	var container = document.getElementById("container");
	var w = container.offsetWidth; 
	var h = container.offsetHeight;
	 
	 for (var i=0 , div ; i<total; i++){ 
	  div = document.createElement("div");   
	  div.className="dot";
	  container.appendChild(div);
	  TweenMax.set(div,{x:execute(0,w),y:execute(-100,100),opacity:1,scale:execute(0,0.5)+0.5,});
	  animateDots(div);
	 }
	 
	 function animateDots(star){   
	 TweenMax.to(star,execute(0,5)+3,{y:h,ease:Linear.easeNone,repeat:-1, delay:-5});
	 TweenMax.to(star,execute(0,5)+1,{x:"+=70", repeat:-1,yoyo:true,ease:Power3.easeInOut});
	 TweenMax.to(star,execute(0,1)+0.5,{opacity:0, repeat:-1,yoyo:true,ease:Power3.easeInOut});
	 }

	function execute(min, max){ 
    return min + ( Math.random() * (max - min)); 
  }
	}
};