/**
 * Copyright (c) 2013 Soufiane Ghzal
 * Code under MIT LICENSE
 * https://github.com/SneakyBobito/khronos-js
 */


/**
 * @class ViewportX.DateRange
 */
Khronos.ViewportX.DateRange = function(options){

    Khronos.applyParams(this,options,{
         from : {kCallback:function(value){ return moment(value);}},
         to   : {kCallback:function(value){ return moment(value);}},
         ppu  : null,
         width: null,

         unit : "1 day",

    });

};

Khronos.ViewportX.DateRange.prototype = Object.create(Khronos.ViewportX.prototype);

Khronos.ViewportX.DateRange.prototype.init = function(){

    this.secondsUnit = this._parseUnit(this.unit);
    
    if(this.ppu){

        var diffMs = this.from.valueOf() - this.to.valueOf();
        var diffS  = diffMs / this._getScaleMs();
        var diffU  = diffS / this.secondsUnit;

        this.width = diffU * this.ppu;

    }else if(this.width){

        var diffMs = this.from.valueOf() - this.to.valueOf();
        var diffS  = diffMs / this._getScaleMs();
        var diffU  = diffS / this.secondsUnit;

        this.ppu   = this.width / diffU;

    }else{
        throw new Khronos.Excetpion("Neither ppu nor width specified.");
    }
    
};
