/**
 * Copyright (c) 2013 Soufiane Ghzal
 * Code under MIT LICENSE
 * https://github.com/SneakyBobito/khronos-js
 */


/**
 * @class ViewportX.Range
 */
Khronos.ViewportY.Range = function(options){

    Khronos.applyParams(this,options,{
         from  : null,
         to    : null,
         ppu   : null,
         height: null,
    });

};

Khronos.ViewportY.Range.prototype = Object.create(Khronos.ViewportY.prototype);

Khronos.ViewportY.Range.prototype.init = function(){
    
    if(this.ppu){
        var diffU  = this.from - this.to;

        this.height = diffU * this.ppu;

    }else if(this.height){

        var diffU  = this.from - this.to;

        this.ppu   = this.height / diffU;

    }else{
        throw new Khronos.Excetpion("Neither ppu nor height specified.");
    }
    
};
