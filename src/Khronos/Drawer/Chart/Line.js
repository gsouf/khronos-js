/**
 * Copyright (c) 2013 Soufiane Ghzal
 * Code under MIT LICENSE
 * https://github.com/SneakyBobito/khronos-js
 */


/**
 * @class Line
 * Scatterplot chart
 */
Khronos.Drawer.Chart.Line = function(config,options){
    Khronos.Drawer.apply(this,[config]);

    Khronos.applyParams(this,options,{
        color : "#DDDDDD",

        data  : []        
    });

};

Khronos.Drawer.Chart.Line.prototype=Object.create(Khronos.Drawer.prototype);

Khronos.Drawer.Chart.Line.prototype.__draw = function(data,dataPrecalc){
    this.clear();
    
    var polylinePoints = [];
    
    
    for(var i=0;i<dataPrecalc.length;i++){
        
        polylinePoints.push(dataPrecalc[i]);

    }
    
    var polyline = new Khronos.Element.Polyline(this.config,{
        points  : polylinePoints
    });
    
    this.add(polyline);
    
};
