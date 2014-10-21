/**
 * Copyright (c) 2013 Soufiane Ghzal
 * Code under MIT LICENSE
 * https://github.com/SneakyBobito/khronos-js
 */


/**
 * @class TimeContainer
 * Scatterplot chart
 */
Khronos.GraphDrawer.Line = function(config,options){
    Khronos.TimeContainer.apply(this,[config]);

    Khronos.applyParams(this,options,{
        color : "#DDDDDD",

        data  : []        
    });

};

Khronos.GraphDrawer.Line.prototype=Object.create(Khronos.TimeContainer.prototype);

Khronos.GraphDrawer.Line.prototype.redraw = function(data,dataPrecalc){
    this.clear();
    
    for(var i=1;i<dataPrecalc.length;i++){
        
  
        var line = new Khronos.TimeDrawable(null,"line");
        line.attr({
            x1:dataPrecalc[i-1][0],
            y1:dataPrecalc[i-1][1],
            x2:dataPrecalc[i][0],
            y2:dataPrecalc[i][1]
        });
        this.add(line);
    }
    
};
