/**
 * Copyright (c) 2013 Soufiane Ghzal
 * Code under MIT LICENSE
 * https://github.com/SneakyBobito/khronos-js
 */


/**
 * @class Point
 * Group of base informations for drawing temporal data
 */
Khronos.Element.Square = function(config,options){
    
    // PARENT CONSTRUCTOR
    Khronos.TimeDrawable.apply(this,[config,"rect"]);
    
    Khronos.applyParams(this,options,{
        x    : 0,
        y    : 0,
        size : 5,
        fill : "#FF0000",
        originCenter : true
    });

    if(this.originCenter){
        var x = this.x-this.size/2;
        var y = this.y-this.size/2;
    }else{
        var x = this.x;
        var y = this.y;
    }
    

    this.attr({
        x     : x,
        y     : y,
        width : this.size,
        height: this.size,
        fill  : this.fill
    });


};

Khronos.Element.Square.prototype = Object.create(Khronos.TimeDrawable.prototype);

