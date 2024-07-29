const sizeOf = require('image-size');

const dimensions = sizeOf('./assets/about-pic.png');
console.log(`Width: ${dimensions.width}, Height: ${dimensions.height}`);