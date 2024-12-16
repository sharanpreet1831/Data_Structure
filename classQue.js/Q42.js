function areCirclesIntersecting(x1, y1, r1, x2, y2, r2) {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;
    const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
    return distance <= (r1 + r2);
}


const circle1 = { x: 0, y: 0, radius: 5 };
const circle2 = { x: 7, y: 0, radius: 3 };

const result = areCirclesIntersecting(circle1.x, circle1.y, circle1.radius, circle2.x, circle2.y, circle2.radius);
console.log( result);