/**
 * Copyright (c) 2013 Soufiane Ghzal
 * Code under MIT LICENSE
 * https://github.com/SneakyBobito/khronos-js
 */


/**
 * @class TimeGrid
 * Grid drawed from a time config
 */
Khronos.TimeGrid = function(config,options){
    
    Khronos.applyParams(this,options,{
        xColor : "#DDDDDD",
        yColor : "#888888"
        
    });
    
    // PARENT CONSTRUCTOR
    Khronos.TimeDrawable.apply(this,[config]);

    this.lines = new Array();
    
    var ivals = this.config.diffX();
    var height = this.config.yVal(20);
    
    
    for(var i = 0 ; i < ivals ; i++){
        
        var line = new Khronos.TimeDrawable(null,"line");
        console.log(this.xColor);
        
        line.attr({
            x1:i*this.config.ppuX,
            y1:0,
            x2:i*this.config.ppuX,
            y2:height,
            stroke : this.xColor
        });
        
        this.add(line);
        
    }

};


Khronos.TimeGrid.prototype=Object.create(Khronos.TimeDrawable.prototype);
