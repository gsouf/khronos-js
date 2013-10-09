/**
 * Copyright (c) 2013 Soufiane Ghzal
 * Code under MIT LICENSE
 * https://github.com/SneakyBobito/khronos-js
 */

KhronosJs.valuePannel = function(config, params ){
    
    if(params === undefined)
        params={};
    
    Kinetic.Group.apply(this,[params]);
    
    this.config=config;
    this.font=params.font===undefined?"Arial":params.font;

    this.refresh();
};

KhronosJs.valuePannel.prototype = {
 
    refresh: function(){
        
        this.removeChildren();
        
        for(var i=this.config.minY;i<this.config.maxY+1;i++){
            
            var yVal=this.config.yVal(i);
            
            var txt = new Kinetic.Text({
                x: 0,
                y: yVal,
                text: i,
                fontSize: 10,
                fontFamily: this.font,
                fill: '#CCC'
            });
            
            this.add(txt);
            
        }
        

        
    }
};


Kinetic.Global.extend(KhronosJs.valuePannel,Kinetic.Group);


