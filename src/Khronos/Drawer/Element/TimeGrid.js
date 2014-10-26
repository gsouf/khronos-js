/**
 * Copyright (c) 2013 Soufiane Ghzal
 * Code under MIT LICENSE
 * https://github.com/SneakyBobito/khronos-js
 */


/**
 * @class TimeGrid
 * Grid drawed from a time config
 */
Khronos.Drawer.Element.TimeGrid = function(config,options){
    
    // PARENT CONSTRUCTOR
    Khronos.Drawer.apply(this,[config]);
    
    
    Khronos.applyParams(this,options,{
        color : "#DDDDDD",
        
    });

};


Khronos.Drawer.Element.TimeGrid.prototype=Object.create(Khronos.Drawer.prototype);


Khronos.Drawer.Element.TimeGrid.prototype.__draw = function(){
    
    this.clear();
    
    var ivals = this.config.diffX();
    var ystart = this.config.yVal(this.config.maxY);
    var yend = this.config.yVal(this.config.minY);
        

    
    for(var i = 0 ; i < ivals + 1 ; i++){
        
        var line = new Khronos.TimeDrawable(null,"line");
        
        line.attr({
            x1:i*this.config.viewportX.ppu,
            y1:ystart,
            x2:i*this.config.viewportX.ppu,
            y2:yend,
            stroke : this.color
        });
        
        this.add(line);
        
    }
    
};
