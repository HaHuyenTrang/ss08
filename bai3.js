"use strict";
function calculateArea(obj) {
    if ("sideLength" in obj) {
        return obj.sideLength ** 2;
    }
    else if ("radius" in obj) {
        return Math.PI * obj.radius ** 2;
    }
    else {
        throw new Error("  ");
    }
}
let square = {
    sideLength: 3,
};
let circle = {
    radius: 5,
};
