/**
 * Copyright (c) 2013 Soufiane Ghzal
 * Code under MIT LICENSE
 * https://github.com/SneakyBobito/khronos-js
 */


/**
 * @class TimeDrawable
 * Group of base informations for drawing temporal data
 */
Khronos.TimeDrawable = function(configObject){
    this.config = configObject;
    this._snap = Snap();
};

Khronos.TimeDrawable.prototype={
    
    addTo : function(element){
        element.add(this._snap);
    }
    
};