/**
 * 
 * @param {type} params 
 *  - color : hexa color e.g #000000
 *  - overColor : hexa color e.g #ffffff
 * @returns {undefined}
 */
KhronosJs.timeline = function( params ){
    
    this.group = new Kinetic.Group();
    
    this.legend = params.legend;
    
    this.color = params.color;
    this.overColor = params.overColor;
    
    this.points = new Array();
    
    
    /**************************
     = CREATION OF THE EVENTS *
     =========================*/
    var self=this;
    this.group.on("mouseenter",function(){
       self.recolor(self.overColor);
    });
    
    this.group.on("mouseleave",function(){
       self.recolor(self.color);
    });
    
    
};

KhronosJs.timeline.prototype={
    
    getGroup: function(){
        return this.group;
    },
    
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
        
        var self=this;
        
        this.group.removeChildren();
        
        this.points.sort(KhronosJs.handler.sortDateAsc);
        
        var lastRect=null;
        
        for(var k in this.points){
            
            var point=this.points[k];
            
            var xCoor=config.diffX(point.date);
            
            var squareSize=5;
            var rect = new Kinetic.Rect({
                x: xCoor-squareSize/2,
                y: config.yVal(point.value),
                width: squareSize,
                height: squareSize,
                fill: this.color,
                strokeWidth: 0
            });
            

            
            
            if(lastRect !== null){
                
                
                var line = new Kinetic.Line({
                    points: [lastRect.getX()+lastRect.getWidth()/2, lastRect.getY()+lastRect.getHeight()/2, rect.getX()+rect.getWidth()/2, rect.getY()+rect.getHeight()/2],
                    stroke: this.color,
                    strokeWidth: 2,
                    lineCap: 'round',
                    lineJoin: 'round'
                });
                

                
                this.group.add(line);
                
            }
            
            lastRect=rect;
            
            
            
            this.group.add(rect);
        }
        
    },
    
    
    recolor: function(newColor){
        var children=this.group.children;
        


        for( var k in children){
            
            if(children[k] instanceof Kinetic.Line)
                children[k].setStroke(newColor);
            else
                children[k].setFill(newColor);

            
        }
        this.group.getParent().draw();
    }
            
};