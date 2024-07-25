/* Steps to take:

1. Get the length of the array
2. loop through the array and compare the first and the next element

*/

function solution(A) {
	const arrLength = A.length;
	let max = 0;

	function btSolve(initial, word) {
		// the three keys of backtracking
		// choice - constraints -  goal
		// constraints -> has to be a unique string

		if (hasUniqueChars(word)) {
			// find the maximum length of the string in the array

			max = Math.max(max, word.length);
		} else {
			return;
		}

		// recursively call itself
		for (let i = initial; i < arrLength; i++) {
			btSolve(i + 1, word + A[i]);
		}
	}

	btSolve(0, '');

	return max;
}

function hasUniqueChars(str) {
	const split = str.split('');
	const unique = [...new Set(split)];

	if (split.length === unique.length) {
		return true;
	} else {
		return false;
	}
}

console.log(solution(['co', 'dil', 'ity']));
console.log(solution(['abc', 'yyy', 'def', 'csv']));
console.log(solution(['potato', 'kayak', 'banana', 'racecar']));
console.log(solution(['eva', 'jqw', 'tyn', 'jan']));