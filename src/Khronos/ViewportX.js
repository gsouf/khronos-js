/**
 * Copyright (c) 2013 Soufiane Ghzal
 * Code under MIT LICENSE
 * https://github.com/SneakyBobito/khronos-js
 */


/**
 * @class ViewportX
 * 
 */
Khronos.ViewportX = function(params){
 
    

};

Khronos.ViewportX.prototype={

    _parseUnit : function(unit){
        var availableTypes = {
               day : 86400,
              hour : 3600,
            minute : 60,
            second : 1
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
            
    getWidth : function(){
        return this.width;
    },

    getTotalWidth : function(){
        return this.totalWtidth;
    },

    getPpu : function(){
        return this.ppu;
    }


};