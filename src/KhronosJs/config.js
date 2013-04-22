
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
    this.ppu  = params.ppu;
    
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
                console.log("unknow type : '"+unitchar+"' for unit. d (day) used instead","color: #FF0000");
                this._unittype = "d";
                break;
        }
        
        this._unitvalue = this.unit.slice(0,-1);        
    },
            
    
    
    
    
};