function solution(S) {
    // Split the string into sentences using regex
    const sentences = S.split(/[.?!]/);
    
    // Function to count valid words in a sentence
    function countWords(sentence) {
        // Split the sentence into words by spaces
        const words = sentence.split(' ');
        // Filter out valid words (words that contain at least one letter)
        const validWords = words.filter(word => /[a-zA-Z]/.test(word));
        // Return the count of valid words
        return validWords.length;
    }
    
    // Initialize the maximum word count
    let maxWords = 0;
    
    // Iterate over each sentence and update the maximum word count
    for (const sentence of sentences) {
        const wordCount = countWords(sentence);
        if (wordCount > maxWords) {
            maxWords = wordCount;
        }
    }
    
    // Return the maximum word count found
    return maxWords;
}

// Test cases
console.log(solution("We test coders. Give us a try?")); // Expected output: 4
console.log(solution("Forget CVs..Save time . x x"));    // Expected output: 2






const S = 'We test coders. Give us a try?';

function solution(S) {
	const regExp = /[.!?]/;
	const wordRegExp = /[a-zA-Z]/;
	const count = [];

	// check to see if the string contains special characters
	if (regExp.test(S)) {
		const splitStr = S.split(regExp);

		for (let sentence of splitStr) {
			const words = sentence.split(' ');

			// check for only alphabetical characters
			const filterWhiteSpace = words.filter((word) =>
				wordRegExp.test(word)
			);
			console.log(filterWhiteSpace);
			count.push(filterWhiteSpace.length);
		}
	} else {
		// for strings without special characters
		const words = S.split(' ');

		const filterWhiteSpace = words.filter((word) => wordRegExp.test(word));
		console.log(filterWhiteSpace);
		count.push(filterWhiteSpace.length);
	}

	return Math.max(...count);
}

console.log(solution(S));
console.log(solution(''));