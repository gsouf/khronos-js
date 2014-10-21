/**
 * @license Copyright (c) 2013 Soufiane Ghzal
 * Code under MIT LICENSE
 * https://github.com/SneakyBobito/khronos-js
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var Khronos         = {};
Khronos.Drawer      = {};
Khronos.Drawer.Chart = {};
Khronos.Drawer.Element = {};
Khronos.Element     = {};


/**
 * Allows to bind params to an object instance according to the given definition.
 * A definition is the list of the properties of the instance and what should be default values
 * @param instance
 * @param params
 * @param definition
 */
Khronos.applyParams = function(instance,params,definition){
    params = params || {};
    for( var item in definition ){
        if(definition[item] && definition[item]["kCallback"] !== undefined )
            instance[item] = definition[item]["kCallback"](params[item]) ;
        else
            instance[item] = params[item] || definition[item] ;
    }

};

Khronos.error = function(message , url){
    var errorMessage = "Khronos Error : " + message ;
    if( url !== undefined )
        errorMessage += " More informations at : " + url;
};