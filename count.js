function solution(S) {
    const charCount = {};

    // Count the occurrences of each character
    for (let char of S) {
        if (charCount[char]) {
            charCount[char] += 1;
        } else {
            charCount[char] = 1;
        }
    }

    let deletions = 0;

    // Determine the number of deletions needed
    for (let char in charCount) {
        if (charCount[char] % 2 !== 0) {
            deletions += 1;
        }
    }

    return deletions;
}

// Test cases
console.log(solution("acbcbba")); // Expected output: 1
console.log(solution("axxaxa"));  // Expected output: 2
console.log(solution("aaaa"));    // Expected output: 0
console.log(solution(""));        // Expected output: 0
