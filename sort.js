function solution(A) {
    // Sort the array to process guests with smaller room size preferences first
    A.sort((a, b) => a - b);

    // Initialize variables
    let rooms = 0;
    let i = 0;
    const N = A.length;

    // Iterate through the sorted list
    while (i < N) {
        rooms += 1;
        // The maximum number of guests that can be accommodated in the current room
        let maxGuests = A[i];
        
        // Move to the next guest that cannot be accommodated in the current room
        while (i < N && maxGuests > 0) {
            maxGuests -= 1;
            i += 1;
        }
    }

    return rooms;
}

// Test cases
console.log(solution([1, 1, 1, 1, 1]));  // Expected output: 5
console.log(solution([2, 1, 4]));        // Expected output: 2
console.log(solution([2, 7, 2, 9, 8]));  // Expected output: 2
console.log(solution([7, 3, 1, 1, 4, 5, 4, 9]));  // Expected output: 4
