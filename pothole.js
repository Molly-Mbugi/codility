function solution(S) {
    let patches = 0; // Counter for the number of patches used
    let i = 0; // Pointer to iterate through the string
    
    while (i < S.length) {
        if (S[i] === 'X') {
            patches++; // Increment the patch counter
            i += 3; // Skip the next two segments since they are covered by this patch
        } else {
            i++; // Move to the next segment
        }
    }
    
    return patches; // Return the total number of patches needed
}

// Test cases
console.log(solution(".X..X")); // Expected output: 2
console.log(solution("X.XXXXX.X.")); // Expected output: 3
console.log(solution("XX.XXX..")); // Expected output: 2
console.log(solution("XXXX")); // Expected output: 2
console.log(solution("XX")); // Expected output: 2
