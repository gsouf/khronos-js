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
        unit : "day",
        ppuX : 20,
        ppuY : 20
    });


};

Khronos.TimeConfig.prototype={

    _parseUnit : function(unit){
        var availableList = {
            day : 3600 * 24
        };

        console.log("Khronos Error : unit '" + + "' is not a valid unit. More informations at : TODO ");

    }

}