/**
 * Copyright (c) 2013 Soufiane Ghzal
 * Code under MIT LICENSE
 * https://github.com/SneakyBobito/khronos-js
 */


/**
 * @class TimeConfig
 * Group of base informations for drawing temporal data
 */
Khronos.TimeConfig = function(params){
    Khronos.applyParams(this,params,{
        unit : "1 day",
        ppuX : 20,
        ppuY : 20,
        minDate : {kCallback:function(value){ return moment(value);}},
        maxDate : null
    });
    
    this.secondsUnit = this._parseUnit(this.unit);


};

Khronos.TimeConfig.prototype={

    _parseUnit : function(unit){
        var availableTypes = {
            day : 86400,
            minute : 60
        };
        
        var items = unit.split(" ");
        var factor = items[0];
        var type = items[1];
        
        var intRegex = /^\d+$/;
        
        if( ! (type in availableTypes) ){
            throw Khronos.error("unit '" + + "' is not a valid unit.");
        }else if( ! intRegex.test(factor) ){
            throw Khronos.error("unit '" + + "' is not an Integer.");
        }else{
            return parseInt(factor) * availableTypes[type];
        }


    },
            
    _getScaleMs : function(){
        return this.secondsUnit * 1000;
    },
    
    diffX : function(date){
        date = moment(date);        
        var diffMs = date.valueOf() - this.minDate.valueOf();
        return diffMs / this._getScaleMs();
    },
    
    diffXPixel : function(date){
        return this.diffX(date) * this.ppuX;
    },
    
    diffXToDate : function(diffX){
        return moment( diffX*this._getScaleMs() + this.minDate.valueOf() );
    },
    
    diffXPixelToDate : function(diffX){
        return moment( (diffX/this.ppuX)*this._getScaleMs() + this.minDate.valueOf() );
    },
            
    yVal: function(number){
      return (number)*this.ppuY;  
    },

}