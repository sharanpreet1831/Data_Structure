function extractColumn(matrix, columnIndex) {
    return matrix.map(row => row[columnIndex]);
}


const biDimensionalArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const columnIndex = 1;
const extractedColumn = extractColumn(biDimensionalArray, columnIndex);
console.log(extractedColumn); 