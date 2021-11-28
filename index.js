var even = 0;
var odd = 0;
var evenSum;
var oddSum;

var count = function() {
	console.log('test');
	for (i = 1; i < 101; i++) {
		if (i % 2 === 0) {
      console.log(i);
      even += i;
    } else {
      odd += i;
    }
	}
  console.log('The sum of all even numbers is ' + even + '.');
  console.log('The sum of all odd numbers is ' + odd + '.');
}

count();
