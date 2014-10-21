/**
 * Copyright (c) 2013 Soufiane Ghzal
 * Code under MIT LICENSE
 * https://github.com/SneakyBobito/khronos-js
 */


/**
 * @class Scatterplot
 * Scatterplot chart
 */
Khronos.Drawer.Chart.Scatterplot = function(config,options){
    Khronos.Drawer.apply(this,[config]);

    Khronos.applyParams(this,options,{
        color : "#DDDDDD",
        data  : []
    });

};

Khronos.Drawer.Chart.Scatterplot.prototype=Object.create(Khronos.Drawer.prototype);

Khronos.Drawer.Chart.Scatterplot.prototype.__draw = function(data,dataPrecalc){
    this.clear();
    
    for(var i=0;i<dataPrecalc.length;i++){
        var p = new Khronos.Element.Point(this.config,{
            
            x : dataPrecalc[i][0],
            y : dataPrecalc[i][1]
            
        });
        this.add(p);
    }
    
};
