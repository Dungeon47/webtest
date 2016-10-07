var state = prompt();

function add(first, second) {
	if (state > 16) {return first+second;}
	else {return first+second+second;}
}

alert(add(1,2));