// var matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
function rotateMatrix90(matrix) {
    const n = matrix.length;

   
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

   
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }

    return matrix;
}


function printMatrix(matrix) {
    for (let row of matrix) {
        console.log(row.join(' '));
    }
}

// Example usage
const inputMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("Original Matrix:");
printMatrix(inputMatrix);

rotateMatrix90(inputMatrix);

console.log("Matrix after 90-degree rotation:");
printMatrix(inputMatrix);