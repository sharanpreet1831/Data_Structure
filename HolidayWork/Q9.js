function countDistinctSubsequences(str) {
    const n = str.length;
    const dp = new Array(n + 1).fill(0); // Dynamic programming array
    dp[0] = 1; // Base case: empty string has one subsequence (the empty subsequence)

    const lastOccurrence = {}; // Object to store the last occurrence of each character

    for (let i = 1; i <= n; i++) {
        dp[i] = 2 * dp[i - 1]; // Count subsequences including and excluding the current character
        const ch = str[i - 1];

        if (lastOccurrence.hasOwnProperty(ch)) {
            const j = lastOccurrence[ch];
            dp[i] -= dp[j - 1]; // Remove duplicate subsequences
        }

        // Update the last occurrence of the character
        lastOccurrence[ch] = i;
    }

    // Total distinct subsequences = dp[n] - 1 (exclude the empty subsequence)
    return dp[n] -1 ;
}

// Input
const input = "ab";
const result = countDistinctSubsequences(input);

// Output
console.log("Number of distinct subsequences:", result);
//function countDistinctSubsequences(str) {
//     const n = str.length;
//     const dp = new Array(n + 1).fill(0);
//     dp[0] = 1; // Base case: one subsequence for an empty string

//     const lastOccurrence = new Map();

//     for (let i = 1; i <= n; i++) {
//         dp[i] = 2 * dp[i - 1]; // Include subsequences with and without current character

//         const char = str[i - 1];
//         if (lastOccurrence.has(char)) {
//             const j = lastOccurrence.get(char);
//             dp[i] -= dp[j - 1]; // Remove duplicates
//         }

//         lastOccurrence.set(char, i);
//     }

//     return dp[n] - 1; // Subtract 1 to exclude the empty subsequence
// }

// const str = "ab";
// const result = countDistinctSubsequences(str);
// console.log("Number of Distinct Subsequences:", result);