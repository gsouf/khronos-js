/**
 * Copyright (c) 2013 Soufiane Ghzal
 * Code under MIT LICENSE
 * https://github.com/SneakyBobito/khronos-js
 */


/**
 * @class Polyline
 * Polyline
 */
Khronos.Element.Polyline = function(config,options){
    // PARENT CONSTRUCTOR
    Khronos.TimeDrawable.apply(this,[config,"polyline"]);

    Khronos.applyParams(this,options,{
        x : 0,
        y : 0,
        points : [],
        stroke  : "#FF0000"
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
        points : pointsString,
        stroke         : this.stroke
    });

    this.css({
        fill:"none"
    });

};

Khronos.Element.Polyline.prototype = Object.create(Khronos.TimeDrawable.prototype);

