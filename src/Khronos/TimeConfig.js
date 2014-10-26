/**
 * Copyright (c) 2013 Soufiane Ghzal
 * Code under MIT LICENSE
 * https://github.com/SneakyBobito/khronos-js
 */


/**
 * @class TimeConfig
 * Container for time configuration (unit,ppx,ppy,date range...) 
 * it also offers handy methods to calculate some time values
 */
Khronos.TimeConfig = function(params){
    Khronos.applyParams(this,params,{
        
        minDate : {kCallback:function(value){ return moment(value);}},
        maxDate : {kCallback:function(value){ return moment(value);}},
        minY    : 0,
        maxY    : 10,
        reverseYAxis : true,

        viewportX : null,
        viewportY : null
    });

    this.viewportX.init();
};

Khronos.TimeConfig.prototype={
            
    
    
    diffX : function(date){
        if( undefined === date){
            date = this.maxDate
        }else{
            date = moment(date);    
        }
        var diffMs = date.valueOf() - this.minDate.valueOf();
        return diffMs / this.viewportX._getScaleMs();
    },
    
    diffXPixel : function(date){
        return this.diffX(date) * this.viewportX.getPpu();
    },
    
    diffXToDate : function(diffX){
        return moment( diffX*this.viewportX._getScaleMs() + this.minDate.valueOf() );
    },
    
    diffXPixelToDate : function(diffX){
        return moment( (diffX/this.viewportX.getPpu()) * this.viewportX._getScaleMs() + this.minDate.valueOf() );
    },
            
    yVal: function(number){

        if(undefined == number)
            number = this.maxY;

        var realValue = (number) * this.viewportY.ppu;
        
        var rescale   = this.minY * this.viewportY.ppu;

        var rescaleValue = realValue - rescale;
        
        if(this.reverseYAxis){
            return (this.maxY * this.viewportY.ppu) - rescaleValue;
        }else{
            return rescaleValue;
        }

        
    },
            
    yIntervals : function(){
        return Math.abs(this.minY - this.maxY);
    }

};