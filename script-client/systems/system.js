'use strict';

module.exports = System;

function System(components) {
    this.components = components;
}

System.prototype.init = function(entities, componentData) {
    this.entities = entities;
    this.componentData = componentData;
};

System.prototype.update = function() {
    var e, c, entity, dataArgs, r;
    for(e = 0; e < this.entities.length; e++) {
        entity = this.entities[e];
        dataArgs = [entity];
        for(c = 0; c < this.components.length; c++) {
            dataArgs.push(this.componentData[c][entity]);
        }
        this.updateEntity(...dataArgs);
    }
};

System.prototype.updateEntity = function(entity) { }; // Virtual

System.prototype.onEntityAdded = function(entity) { }; // Virtual

System.prototype.onEntityRemoved = function() { }; // Virtual