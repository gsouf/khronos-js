/**
 * Copyright (c) 2013 Soufiane Ghzal
 * Code under MIT LICENSE
 * https://github.com/SneakyBobito/khronos-js
 */


/**
 * @class TimeGraph
 * Group of base informations for drawing temporal data
 */
Khronos.TimeGraph = function(config,options){
    // PARENT CONSTRUCTOR
    Khronos.TimeDrawable.apply(this,[config]);

    Khronos.applyParams(this,options,{
        points : [],
        drawers : []
    });

};

Khronos.TimeGraph.prototype=Object.create(Khronos.TimeDrawable.prototype);

Khronos.TimeGraph.prototype.addPoint = function(date,yValue){
    this.points.push([date,yValue]);
};

Khronos.TimeGraph.prototype.redraw = function(){
    this.clear();
    
    
    ////////////////
    // SORT BY DATE
    
    var sorter = function (point1, point2) {
        if (point1.valueOf() > point2.valueOf()) return 1;
        if (point1.valueOf() < point2.valueOf()) return -1;
        return 0;
    };
    
    this.points.sort(sorter);
    
    
    ///////////////////////////
    // PRE CALCULATE X/YVALUES
    
    var precalc = [];
    
    for( var i = 0; i < this.points.length; i++ ){
        
        precalc.push([
            this.config.diffXPixel(this.points[i][0]),
            this.config.yVal(this.points[i][1])
        ]);
        
    }
    
    
    //////////////////////
    // REDRAW EACH DRAWER
    
    for( var i = 0; i < this.drawers.length; i++ ){
        this.drawers[i].redraw(this.points,precalc);
        this.add(this.drawers[i]);
    }
    
    
    /////////////////////
    // APPLY BASE STYLES
    
    this.attr({
        fill: "#F00",
        stroke: "#F00"
    });
    
};

