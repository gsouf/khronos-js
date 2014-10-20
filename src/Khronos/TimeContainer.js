/**
 * Copyright (c) 2013 Soufiane Ghzal
 * Code under MIT LICENSE
 * https://github.com/SneakyBobito/khronos-js
 */


/**
 * @class TimeContainer
 * Base container with unit in time
 */
Khronos.TimeContainer = function(config,options){
    Khronos.TimeDrawable.apply(this,[config]);


};

Khronos.TimeContainer.prototype=Object.create(Khronos.TimeDrawable.prototype);