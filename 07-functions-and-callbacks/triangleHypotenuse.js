// c^2 = a^2 + b^2
function triangleHypotenuse(base, height) {
    function square(side) {
        return side * side;
    }

    return Math.sqrt(square(base) + square(height));
    // ReferenceError in Shelly JS
    // function square(side) {
    //     return side * side;
    // }
}

console.log(triangleHypotenuse(20, 10));

// ReferenceError
// square(10, 20);