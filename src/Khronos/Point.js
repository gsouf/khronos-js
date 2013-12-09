/**
 * Copyright (c) 2013 Soufiane Ghzal
 * Code under MIT LICENSE
 * https://github.com/SneakyBobito/khronos-js
 */


/**
 * @class Point
 * Group of base informations for drawing temporal data
 */
Khronos.Point = function(config,date,yValue){
    // PARENT CONSTRUCTOR
    Khronos.TimeDrawable.apply(this,[config]);
    this.date = date;
    this.yValue = yValue;
    
    
    this.r = 3;
    this.x = this.config.diffXPixel(this.date);
    this.y = this.config.yVal(this.yValue);

    this._snap.circle(this.x , this.y  , this.r);
};

Khronos.Point.prototype=Object.create(Khronos.TimeDrawable.prototype);
