/**
 * 
 * @param {type} params 
 *  - color : hexa color e.g #000000
 *  - hoverColor : hexa color e.g #ffffff
 * @returns {undefined}
 */
KhronosJs.timeline = function( params ){
    
    this.layer = new Kinetic.Layer();
    
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
            this.points.push(new KhronosJs.point({
                date  : mixed,
                value : value
            }));
        
    },
    
    draw: function(config){
        this.points.sort(KhronosJs.handler.sortDateAsc);
        
        var lastRect=null;
        
        for(var k in this.points){
            
            var point=this.points[k];
            
            var xCoor=config.diffX(point.date);
            
            var rect = new Kinetic.Rect({
                x: xCoor,
                y: point.value,
                width: 5,
                height: 5,
                fill: this.color,
                strokeWidth: 0
            });
            
            rect.on("mouemove",function(){
               alert('ll'); 
            });
            
            
            if(lastRect !== null){
                
                
                var line = new Kinetic.Line({
                    points: [lastRect.getX()+lastRect.getWidth()/2, lastRect.getY()+lastRect.getHeight()/2, rect.getX()+rect.getWidth()/2, rect.getY()+rect.getHeight()/2],
                    stroke: 'red',
                    strokeWidth: 2,
                    lineCap: 'round',
                    lineJoin: 'round'
                });
                
                line.on('mouseout', function() {
                    alert('ll');
                });
                
                this.layer.add(line);
                
            }
            
            lastRect=rect;
            
            
            
            this.layer.add(rect);
            
            
            

        }
        
    }
            
};