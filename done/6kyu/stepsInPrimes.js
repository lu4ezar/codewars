// https://www.codewars.com/kata/5613d06cee1e7da6d5000055

/*

The prime numbers are not regularly spaced. For example from 2 to 3 the step is 1.
From 3 to 5 the step is 2. From 7 to 11 it is 4. Between 2 and 50 we have the following pairs of 2-steps primes:

3, 5 - 5, 7, - 11, 13, - 17, 19, - 29, 31, - 41, 43

We will write a function step with parameters:

g (integer >= 2) which indicates the step we are looking for,
m (integer >= 2) which gives the start of the search (m inclusive),
n (integer >= m) which gives the end of the search (n inclusive)

In the example above step(2, 2, 50) will return [3, 5] which is the first pair between 2 and 50 with a 2-steps.

So this function should return the first pair of the two prime numbers spaced with a step of g between the limits m,
n if these g-steps prime numbers exist otherwise null.

*/

const isPrime = n => {
	for (let i = Math.floor(Math.sqrt(n)); i > 1; i--) {
		if (n % i === 0) return false;
	}
	return true;
}

function step(g, m, n) {
  const ch = new Set();
	for (let i = m; i <= n; i++) {
		if (!isPrime(i) || ch.has(i)) {
    	continue;
    }
		if ((i + g) > n) break;
		if (isPrime(i) && isPrime(i + g)) {
			return [i, i + g];
		} else {
			ch.add(i + g);
		}
	}
	return null;
}

step(2,100,110) // [101, 103]
step(4,100,110) // [103, 107])
step(6,100,110) // [101, 107])
step(8,300,400) // [359, 367])
step(10,300,400) // [307, 317])
