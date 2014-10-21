/**
 * Copyright (c) 2013 Soufiane Ghzal
 * Code under MIT LICENSE
 * https://github.com/SneakyBobito/khronos-js
 */


/**
 * @class Drawer
 * Drawer interface
 */
Khronos.Drawer = function(config,options){
    Khronos.TimeContainer.apply(this,[config]);
};

Khronos.Drawer.prototype=Object.create(Khronos.TimeContainer.prototype);
Khronos.Bindable.extends(Khronos.Drawer);


Khronos.Drawer.prototype.redraw = function(data,calcData){
    
    if(!this.fire("beforeDraw",[data,calcData],true)){
        return false;
    }
    
    this.__draw(data,calcData);
    
    this.fire("afterDraw",[data,calcData]);
    
};

Khronos.Drawer.prototype.__draw = function(data,calcData){

    Khronos.Exception("__draw method must be overiden");
};


Khronos.Drawer.Element = {};
Khronos.Drawer.Chart = {};