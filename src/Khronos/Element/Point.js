/**
 * Copyright (c) 2013 Soufiane Ghzal
 * Code under MIT LICENSE
 * https://github.com/SneakyBobito/khronos-js
 */


/**
 * @class Point
 * Group of base informations for drawing temporal data
 */
Khronos.Element.Point = function(config,options){
    // PARENT CONSTRUCTOR
    Khronos.TimeDrawable.apply(this,[config,"circle"]);

    Khronos.applyParams(this,options,{
        x : 1,
        y : 1,
        radius : 3,
        fill   : "#FF0000"
    });

    this.attr({
        cx:this.x,
        cy:this.y,
        r :this.radius,
        fill: "#FF0000"
    });


};

Khronos.Element.Point.prototype = Object.create(Khronos.TimeDrawable.prototype);

