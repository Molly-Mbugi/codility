function solution(S) {
    // Split the text into sentences based on ., ?, !
    const sentences = S.split(/[.?!]/);
    
    let maxWords = 0;

    // Iterate over each sentence
    for (let sentence of sentences) {
        // Split sentence into words by spaces
        const words = sentence.trim().split(/\s+/);

        // Filter out any non-word entries (e.g., empty strings)
        const validWords = words.filter(word => /[a-zA-Z]/.test(word));

        // Update the maximum number of words if the current sentence has more words
        if (validWords.length > maxWords) {
            maxWords = validWords.length;
        }
    }

    return maxWords;
}

// Test cases
console.log(solution("We test coders. Give us a try?")); // Expected output: 4
console.log(solution("Forget CVs..Save time . x x")); // Expected output: 2
console.log(solution("Hello! How are you?")); // Expected output: 3
console.log(solution("...!!!")); // Expected output: 0
console.log(solution("I am fine. How about you? All good!")); // Expected output: 3
