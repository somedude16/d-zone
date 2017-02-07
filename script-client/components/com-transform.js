'use strict';

module.exports = Transform;

function Transform() {
    this.data = {
        x: 0, // Always integers
        y: 0,
        z: 0,
        solid: true, // Other solid transforms may not intersect
        platform: true // Other transforms can "sit" on top
    };
}