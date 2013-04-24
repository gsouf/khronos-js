
/**
 * 
 * @param {type} params
 *  - unit : time interval between two point. See below for available values
 *  - min  : min date to show
 *  - max  : max date to show
 *  - ppu  : pixel per unit
 * @returns {undefined}
 */
KhronosJs.config = function( params ){
    
    this.unit = params.unit;
    this.min  = params.min;
    this.max  = params.max;
    this.minY = params.minY;
    this.maxY = params.maxY;
    this.ppuX  = params.ppuX;
    this.ppuY  = params.ppuY;
    
    this._unittype;    //set by parse unit
    this._unitvalue;   //set by parse unit
    
    this._parseUnit();
    
};

KhronosJs.config.prototype={
    
    _parseUnit: function(){
        var unitchar = this.unit.slice(-1);
        
        switch(unitchar){
            case "s":
            case "i":
            case "h":
            case "d": 
            case "w":
            case "m":
            case "y":
                this._unittype = unitchar;
                break;
            
            default:
                console.log("unknow type : '"+unitchar+"' for unit. 'd' (day) used instead");
                this._unittype = "d";
                break;
        }
        
        this._unitvalue = this.unit.slice(0,-1);
        
        
    },
            
    diffX: function(date,multiplyByPpu){
        if(multiplyByPpu === undefined){
            multiplyByPpu=true;
        }
        
        
        var scale;
        
        switch(this._unittype){
            case "s":
                scale = 1000;
                break;
            case "i":
                scale = 1000*60;
                break;
            case "h":
                scale = 1000*60*60;
                break;
            case "d":
                scale = 1000*60*60*24;
                break;
            case "w":
                scale = 7*1000*60*60*24;
                break;
            case "m":
                scale = 30*1000*60*60*24;
                break;
            case "y":
                scale = 365*1000*60*60*24;
                break;
            
            default:
                console.log("unknow type : '"+unitchar+"' for unit. d (day) used instead");
        }
         return ((date.getTime()-this.min.getTime())/scale)*(true===multiplyByPpu?this.ppuX:1);

    },
            
    
    yVal: function(number){
      return number*this.ppuY;  
    },
    
    
};