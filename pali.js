function solution(S) {
    let left = 0;
    let right = S.length - 1;
    let arr = S.split('');

    while (left <= right) {
        if (arr[left] === '?' && arr[right] === '?') {
            // Both are '?', replace with 'a'
            arr[left] = 'a';
            arr[right] = 'a';
        } else if (arr[left] === '?') {
            // Left is '?', replace with right character
            arr[left] = arr[right];
        } else if (arr[right] === '?') {
            // Right is '?', replace with left character
            arr[right] = arr[left];
        } else if (arr[left] !== arr[right]) {
            // If characters are different and not '?', it's not a palindrome
            return "NO";
        }
        left++;
        right--;
    }

    return arr.join('');
}

// Test cases
console.log(solution("?ab??a")); //  "aabbaa"
console.log(solution("bab??a")); //  "NO"
console.log(solution("?a?"));    //"zaz"
