/**
 * Copyright (c) 2013 Soufiane Ghzal
 * Code under MIT LICENSE
 * https://github.com/SneakyBobito/khronos-js
 */


/**
 * @class TimeDrawable
 * Group of base informations for drawing temporal data
 */
Khronos.TimeDrawable = function(configObject,markup,attr){
    this.config = configObject;
    markup = markup || "g";
    attr = attr || {};
    this._$element = $(document.createElementNS('http://www.w3.org/2000/svg',markup),attr);
};

Khronos.TimeDrawable.prototype={
    add : function (element){
        this._$element.append(element._$element);
    },

    clear : function (){
        this._$element.empty();
    },

    attr : function(attr){
        this._$element.attr(attr);
    },
            
    css : function(p){
        this._$element.css(p);
    }
};