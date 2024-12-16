
function findLongestWord(str) {
    
    const words = str.split(' ');

    
    const longestWord = words.reduce((longest, currentWord) => {
       
        return currentWord.length > longest.length ? currentWord : longest;
    }, '');

    return longestWord;
}

// Example usage:
const sentence = "I am learning JavaScript and it's exciting!";
const longest = findLongestWord(sentence);
console.log(longest); 