/**
 * Copyright (c) 2013 Soufiane Ghzal
 * Code under MIT LICENSE
 * https://github.com/SneakyBobito/khronos-js
 */


/**
 * @class ValueGrid
 * Grid drawed from a time config
 */
Khronos.Drawer.Element.ValueGrid = function(config,options){
    
    // PARENT CONSTRUCTOR
    Khronos.Drawer.apply(this,[config]);
    
    Khronos.applyParams(this,options,{
        color : "#DDDDDD",
        
    });

};


Khronos.Drawer.Element.ValueGrid.prototype=Object.create(Khronos.Drawer.prototype);


Khronos.Drawer.Element.ValueGrid.prototype.__draw = function(){
    
    this.clear();
    
    var ivals  = this.config.yIntervals();
    var xstart = this.config.diffXPixel(this.config.minDate);
    var xend   = this.config.diffXPixel(this.config.maxDate);
        

    
    for(var i = 0 ; i < ivals + 1; i++){
        
        var line = new Khronos.TimeDrawable(null,"line");
        
        line.attr({
            x1: xstart,
            y1: i*this.config.ppuY,
            x2: xend,
            y2: i*this.config.ppuY,
            stroke : this.color
        });
        
        this.add(line);
        
    }
    
};
