var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
	greeting = 'And the sun begins to set...';
} else if (hourNow > 11) {
	greeting = 'I hope the day is nice so far!';
} else if (hourNow > 7) {
	greeting = 'Good morning!';
} else if (hourNow > 0) {
	greeting = 'Its so early, feeling sleepy?';
} else {
	greeting = 'Welcome ~';
}

document.write('<h1>' + greeting + '</h1>');