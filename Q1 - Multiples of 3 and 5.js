// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// alt: multiples of x or y, under z.

// Find the sum of all the multiples of 3 or 5 below 1000.

function sumOfMultiples() {
	alert('This program finds the sum of every multiple of x or y under z.');
	var x = prompt('Please enter a value for x', x);
	var y = prompt('Please enter a value for y', y);
	var z = prompt('Please enter a value for z', z);

	if (isNaN(x) || isNaN(y) || isNaN(z) || x <= 0 || y <=0 || z <= 0) {
		return 'Please enter valid positive numbers for x, y, and z';
	} else if (z <= x * y) {
    return 'The value of z is too small! Try again.';
	} else {

  	console.log('x = ' + x);
  	console.log('y = ' + y);
  	console.log('z = ' + z);

  	var xy = x * y;

  	console.log(
  		'This program finds the sum of every multiple of ' +
  			x +
  			' or ' +
  			y +
  			' under ' +
  			z +
  			'.\n'
  	);

  	largestX = Math.floor((z - 1) / x);
  	largestY = Math.floor((z - 1) / y);
  	largestXY = Math.floor((z - 1) / xy);

  	sumX = x * (largestX * (largestX + 1)) / 2;
  	sumY = y * (largestY * (largestY + 1)) / 2;
  	sumXY = xy * (largestXY * (largestXY + 1)) / 2;
  
  	return (
  		'The sum of every multiple of ' +
  		x +
  		' or ' +
  		y +
  		' under ' +
  		z +
  		' is: ' +
  		(sumX + sumY - sumXY)
  	);
  }
}

sumOfMultiples();
