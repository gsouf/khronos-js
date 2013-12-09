/**
 * Copyright (c) 2013 Soufiane Ghzal
 * Code under MIT LICENSE
 * https://github.com/SneakyBobito/khronos-js
 */


/**
 * @class TimeContainer
 * Base container with unit in time
 */
Khronos.TimeContainer = function(params){
    Khronos.applyParams(this,params,{
        config : {
            instance : Khronos.TimeConfig
        }
    });


};