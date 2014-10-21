/**
 * Copyright (c) 2013 Soufiane Ghzal
 * Code under MIT LICENSE
 * https://github.com/SneakyBobito/khronos-js
 */


/**
 * @class TimeContainer
 * Scatterplot chart
 */
Khronos.GraphDrawer.Scatterplot = function(config,options){
    Khronos.TimeContainer.apply(this,[config]);

    Khronos.applyParams(this,options,{
        color : "#DDDDDD",
        radius: 3,
        
        data  : []
        
    });

};

Khronos.GraphDrawer.Scatterplot.prototype=Object.create(Khronos.TimeContainer.prototype);

Khronos.GraphDrawer.Scatterplot.prototype.redraw = function(data,dataPrecalc){
    this.clear();
    
    for(var i=0;i<dataPrecalc.length;i++){
        var p = new Khronos.Element.Point(this.config,{
            
            x : dataPrecalc[i][0],
            y : dataPrecalc[i][1]
            
        });
        this.add(p);
    }
    
};
