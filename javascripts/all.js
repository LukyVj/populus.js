// This is where it all goes :)

var pop = function(args) {
	var speed, pump, target;
	speed  = args.speed;
	pump   = args.pump;
	target = args.target;


	var targetChildren = document.querySelectorAll(`${target} span`);

	for ( var i = 0; i < targetChildren.length; i++ ) {
		targetChildren[i].style.opacity = 1;
		targetChildren[i].style.webkitTransition = (i+1)*520+'ms';
		targetChildren[i].style.transition = (i+1)*520+'ms';
		targetChildren[i].classList.add('appear')
	}
}



var init = function() {

	pop({
		speed: 1,
		pump: 2,
		target: '#title'
	});
}




document.addEventListener('DOMContentLoaded', function(){
	init();
});


