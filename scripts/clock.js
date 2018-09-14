//Getting time
window.onload = function() {
 function clock(){
  var time = new Date();
  var hours = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();
  seconds = ("0" + time.getSeconds()).slice(-2);
  document.getElementById("clock").innerHTML = (hours + ":" + minutes + ":" + seconds);
   switch(hours){
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
	animationBird();
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
//retrieving clock
clock();
setInterval(function(){
	clock();
}, 1000);

//morning colors background and text
function morning(){
	TweenMax.to('#clock', 1, {color:"#000000", ease:Power3.easeOut});
	TweenMax.to("body", 3, {backgroundImage:"linear-gradient(to top, #FBD63F, #FB903F)"});
}

//afternoon
function afternoon(){		
	TweenMax.to("body", 3, {backgroundImage:"linear-gradient(to top, #99DBFF, #6ABBFF"});
	TweenMax.to("#clock", 1, {color:"#000000", ease:Power3.easeOut});
}

//night
function darkness(){
	TweenMax.to("body", 3, {backgroundImage:"linear-gradient(to top, #0A006A, #000000)"});
	TweenMax.to("#clock", 1, {color:"#ffffff", ease:Power3.easeOut});
}

function animatedSun(){
	var risingSun = document.getElementsByClassName("sun");
	var sunny = new TimelineMax({ yoyo:true});
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

function animatedTextMorning(){
	TweenMax.to(".text", 1, {text:"good morning"});
	TweenMax.to(".degrees", 1, {text:"It is now 10 degrees"});
}

function animatedTextAfternoon(){
	TweenMax.to(".text", 1, {text:"good afternoon"});
	TweenMax.to(".degrees", 1, {text:"It is now 19 degrees"});
}

function animatedTextEvening(){
	TweenMax.to(".text", 1, {text:"good night"});
	TweenMax.to(".text", 1, {color:"#ffffff", ease:Power3.easeOut});
	TweenMax.to(".degrees", 1, {text:"It is now 5 degrees"});
	TweenMax.to(".degrees", 1, {color:"#ffffff", ease:Power3.easeOut});
}

function animationBird(){
	var animatedBird = document.getElementsByClassName("bird");
	var birdy = new TimelineMax({repeat:-1});
	birdy.to(animatedBird, 10, {left:window.innerWidth, yoyo:false, ease:Linear.easeNone});
	birdy.restart();

	//birdy.to('.bird', 1, {left:"2000px", yoyo:true,timeScale:15, ease:Linear.easeNone});
}




function animatedStars(){
	var numberStars = 20;
	var container = document.getElementById("container");
	var w = window.innerWidth;
	var h = window.innerWidth;
	var starry = new TimelineMax({repeat:-1});
	 
	for (var i=1 , div ; i<numberStars; i++){ 
	  div = document.createElement("div");   
	  div.className="dot";
	  container.appendChild(div);
	  starry.set(div,{x:execute(0,w),y:execute(-600,600),opacity:1,scale:execute(0,0.5)+0.5,});
	  animateDots(div);
 	}
	 
	function animateDots(star){   
	 TweenMax.to(star,execute(0,1)+0.5,{opacity:0,yoyo:true,ease:Power3.easeInOut});
	}

	function execute(min, max){ 
		return min + ( Math.random() * (max - min)); 
  	}
}
};

