/**
 * Copyright (c) 2013 Soufiane Ghzal
 * Code under MIT LICENSE
 * https://github.com/SneakyBobito/khronos-js
 */


/**
 * @class TimeGraph
 * Group of base informations for drawing temporal data
 */
Khronos.TimeGraph = function(config){
    // PARENT CONSTRUCTOR
    Khronos.TimeDrawable.apply(this,[config]);

    this.points = new Array();

};

Khronos.TimeGraph.prototype=Object.create(Khronos.TimeDrawable.prototype);

Khronos.TimeGraph.prototype.addPoint = function(date,yValue){
    var p = new Khronos.Point(this.config,date,yValue);
    this.points.push(p);
};

Khronos.TimeGraph.prototype.redraw = function(){
    this.clear();
    
    var sorter = function (point1, point2) {
        if (point1.date.valueOf() > point2.date.valueOf()) return 1;
        if (point1.date.valueOf() < point2.date.valueOf()) return -1;
        return 0;
    };
    
    this.points.sort(sorter);
    
    this.add(this.points[0]);
    
    for(var i=1;i<this.points.length;i++){
        this.add(this.points[i]);
        var line = new Khronos.TimeDrawable(null,"line");
        line.attr({
            x1:this.points[i-1].x,
            y1:this.points[i-1].y,
            x2:this.points[i].x,
            y2:this.points[i].y
        });
        this.add(line);
    }
    
    this.attr({
        fill: "#F00",
        stroke: "#F00"
    });
    
};

