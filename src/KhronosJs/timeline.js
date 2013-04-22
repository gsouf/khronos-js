/**
 * 
 * @param {type} params 
 *  - color : hexa color e.g #000000
 *  - hoverColor : hexa color e.g #ffffff
 * @returns {undefined}
 */
KhronosJs.timeline = function( params ){
    
    this.color = params.color;
    this.hoverColor = params.hoverColor;
    
    this.points = new Array();
    
};

KhronosJs.timeline.prototype={
    
    /**
     * 
     * add a point to the timeline
     * 
     * both are available :
     * myTimeline.addPoint(date,value);  // date is a Date and value an int
     * myTimeline.addPoint(myKhronosPoint); // myKhronosPoint is a KhronosJs.point
     * 
     * @param {type} mixed Date or KhronosJs.point
     * @param {type} value if mixed is Date then value is the Y value of the point
     * @returns {undefined}
     */
    addPoint: function(mixed,value){
        
        if(mixed instanceof KhronosJs.point)
            this.points.push(mixed);
        else
            this.points.push(new KhronosJs.point(mixed,value));
        
    },
    
    draw: function(graph,origineDate){
        this.points.sort(KhronosJs.handler.sortDateAsc());
    }
            
};