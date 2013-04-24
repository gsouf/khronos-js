KhronosJs.dateGrid = function(config, params ){
    
    Kinetic.Group.apply(this,[params]);
    
    this.config=config;

    this.refresh();
};

KhronosJs.dateGrid.prototype = {
 
    refresh: function(){
        this.removeChildren();
        
        var intervals = this.config.diffX(this.config.max,false);
        
        var maxY=this.config.maxY*this.config.ppuY;
        var minY=this.config.minY*this.config.ppuY;
        
        for(var i=0;i<intervals+1;i++){
            
            var xVal=i*this.config.ppuX;
            
            var line = new Kinetic.Line({
                points: [ xVal , minY , xVal , maxY ],
                stroke: "#DDDDDD",
                strokeWidth: 1
            });
            
            this.add(line);
            
        }
        
        var maxX=(intervals)*this.config.ppuX;
        
        for(var i=this.config.minY;i<this.config.maxY+1;i++){
            
            var yVal=i*this.config.ppuY;
            
            var line = new Kinetic.Line({
                points: [ 0 , yVal , maxX , yVal ],
                stroke: "#DDDDDD",
                strokeWidth: 1
            });
            
            this.add(line);
            
        }
        
    }
};


Kinetic.Global.extend(KhronosJs.dateGrid,Kinetic.Group);


