var counter = 0;


var four = function() {
	$('#main').css("display", "block");
	$('#checklist').css("display", "none");
	$('#map').css("display", "none");
	$('#before1').css("display", "block");
	$('#after1').css("display", "none");
}

var one = function() {
	$('#main').css("display", "none");
	$('#checklist').css("display", "block");
	$('#map').css("display", "none");

}

var two = function() {
	$('#main').css("display", "none");
	$('#checklist').css("display", "none");
	$('#map').css("display", "block");

}

var three = function() {
	$('#main').css("display", "block");
	$('#checklist').css("display", "none");
	$('#map').css("display", "none");
	$('#before1').css("display", "none");
	$('#after1').css("display", "block");
}


function foo() {
	counter++;
	if (counter == 5)
		counter = 3;
	switch(counter) {
		case 0:
			zero();
			break;
		case 1:
			one();
			break;
		case 2:
			two();
			break;
		case 3:
			three()
			break;
		case 4:
			four()
			break;
		default:
			break;
	}
}