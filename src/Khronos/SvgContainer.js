/**
 * Copyright (c) 2013 Soufiane Ghzal
 * Code under MIT LICENSE
 * https://github.com/SneakyBobito/khronos-js
 */


/**
 * @class SvgContainer
 * Base container class
 */
Khronos.SvgContainer = function(name){
//    Khronos.applyParams(this,params,{
//        element : null
//    });

    if(name !== null){
        this._snap = Snap(name);
        var bigCircle = this._snap.circle(150, 150, 100);
    }else{
        // TODO : natural one
    }

};