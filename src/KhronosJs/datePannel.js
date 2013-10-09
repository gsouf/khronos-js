/**
 * Copyright (c) 2013 Soufiane Ghzal
 * Code under MIT LICENSE
 * https://github.com/SneakyBobito/khronos-js
 */

KhronosJs.datePannel = function(config, params ){
    
    if(params === undefined)
        params={};
    
    Kinetic.Group.apply(this,[params]);
    
    this.config=config;
    this.font=params.font===undefined?"Arial":params.font;

    this.refresh();
};

KhronosJs.datePannel.prototype = {
 
    refresh: function(){
        
        this.removeChildren();
        
        var intervals = this.config.diffX(this.config.max,false);
        
        var date=this.config.getFirstDate();
        
        for(var i=0;i<intervals+1;i++){
            
            
            if(this.config.ppuX<30){
                if(i%5!==2){
                    this.config.moveToNext(date);
                    continue;
                }
            }else if(this.config.ppuX<60){
                if(i%3!==1){
                    this.config.moveToNext(date);
                    continue;
                }
            }
            
            var xVal=i*this.config.ppuX;
            
            var text = new Kinetic.Text({
                x: xVal-15,
                y: 15,
                text: date.getDate()+"-"+date.getMonth()+"-"+(date.getFullYear()+"").slice(-2),
                fontSize: 10,
                fontFamily: this.font,
                fill: '#666666'
            });
            
            var miniLine = new Kinetic.Line({
                points: [ xVal , 0 , xVal , 7 ],
                stroke: "#BBB",
                strokeWidth: 1
            });
            
            this.add(miniLine);
            this.add(text);
            
            this.config.moveToNext(date);
            
        }
        

        
    }
};


Kinetic.Global.extend(KhronosJs.datePannel,Kinetic.Group);


