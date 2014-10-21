/**
 * Copyright (c) 2013 Soufiane Ghzal
 * Code under MIT LICENSE
 * https://github.com/SneakyBobito/khronos-js
 */


/**
 * @class Line
 * Scatterplot chart
 */
Khronos.Drawer.Chart.Area = function(config,options){
    Khronos.Drawer.apply(this,[config]);

    Khronos.applyParams(this,options,{
        color : "#DDDDDD",
        opacity: 0.5
    });

};

Khronos.Drawer.Chart.Area.prototype=Object.create(Khronos.Drawer.prototype);

Khronos.Drawer.Chart.Area.prototype.__draw = function(data,dataPrecalc){
    this.clear();
  
    var polygonPoints = [];
    
    polygonPoints.push([dataPrecalc[0][0],this.config.yVal(this.config.minY)]);
    
    for(var i=0;i<dataPrecalc.length;i++){
        
        polygonPoints.push(dataPrecalc[i]);

    }
    
    polygonPoints.push([dataPrecalc[dataPrecalc.length-1][0],this.config.yVal(this.config.minY)]);
    
    var polygon = new Khronos.Element.Polygon(this.config,{
        opaticy : 0.5,
        points  : polygonPoints
    });
    
    this.add(polygon);
    
};
