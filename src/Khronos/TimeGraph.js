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
    this.redraw();
};

Khronos.TimeGraph.prototype.redraw = function(){
    this._snap.clear();
    
    var sorter = function (point1, point2) {
        if (point1.date.valueOf() > point2.date.valueOf()) return 1;
        if (point1.date.valueOf() < point2.date.valueOf()) return -1;
        return 0;
    };
    
    this.points.sort(sorter);
    
    this._snap.add(this.points[0]._snap);
    
    for(var i=1;i<this.points.length;i++){
        this._snap.add(this.points[i]._snap);
        var line = this._snap.line(this.points[i-1].x , this.points[i-1].y , this.points[i].x , this.points[i].y );
        line.attr({
            strokeWidth: 2
        });
    }
    
    this._snap.attr({
        fill: "#F00",
        stroke: "#F00",
    });
    
};

