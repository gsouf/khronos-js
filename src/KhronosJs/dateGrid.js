KhronosJs.dateGrid = function(config, params ){
    
    if(params === undefined)
    params={};
    
    Kinetic.Group.apply(this,[params]);
    
    this.config=config;
    this.gridsColor=params.gridsColor!==undefined?params.gridsColor:"#DDDDDD0";

    this.refresh();
};

KhronosJs.dateGrid.prototype = {
 
    refresh: function(){
        this.removeChildren();
        
        var intervals = this.config.diffX(this.config.max,false);
        
        var maxY=this.config.yVal(this.config.maxY);
        var minY=0;
        
        for(var i=0;i<intervals+1;i++){
            
            var xVal=i*this.config.ppuX;
            
            var line = new Kinetic.Line({
                points: [ xVal , minY , xVal , maxY ],
                stroke: this.gridsColor,
                strokeWidth: 1
            });
            
            this.add(line);
            
        }
        
        var maxX=(intervals)*this.config.ppuX;
        
        for(var i=this.config.minY;i<this.config.maxY+1;i++){
            
            var yVal=this.config.yVal(i);
            
            var line = new Kinetic.Line({
                points: [ 0 , yVal , maxX , yVal ],
                stroke: this.gridsColor,
                strokeWidth: 1
            });
            
            this.add(line);
            
        }
        
        
        
    }
};


Kinetic.Global.extend(KhronosJs.dateGrid,Kinetic.Group);


