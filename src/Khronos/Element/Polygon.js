/**
 * Copyright (c) 2013 Soufiane Ghzal
 * Code under MIT LICENSE
 * https://github.com/SneakyBobito/khronos-js
 */


/**
 * @class Polygon
 * Polygon
 */
Khronos.Element.Polygon = function(config,options){
    // PARENT CONSTRUCTOR
    Khronos.TimeDrawable.apply(this,[config,"polygon"]);

    Khronos.applyParams(this,options,{
        x : 1,
        y : 1,
        points : [],
        opacity : 0.5,
        stroke  : "none"
    });

    var pointsString = "";
    
    for(var i = 0;i < this.points.length;i++){
        
        if(pointsString.length !== 0){
            pointsString += " ";
        }
        
        pointsString += this.points[i][0] + "," + this.points[i][1];
        
    }

    this.attr({
        x:this.x,
        y:this.y,
        fill: "#FF0000",
        points : pointsString,
        "fill-opacity" : this.opacity,
        stroke         : this.stroke
    });


};

Khronos.Element.Polygon.prototype = Object.create(Khronos.TimeDrawable.prototype);

