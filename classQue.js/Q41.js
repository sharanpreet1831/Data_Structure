function calculateDistance(x1, y1, x2, y2) {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;
    return Math.sqrt(deltaX ** 2 + deltaY ** 2);
}


const point1 = { x: 3, y: 4 };
const point2 = { x: 7, y: 1 };

const distance = calculateDistance(point1.x, point1.y, point2.x, point2.y);
console.log(`The distance between the points is: ${distance}`); 