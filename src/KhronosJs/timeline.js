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
    
    
     var label = new Kinetic.Label({
        text: {
          text: this.legend,
          fontFamily: 'Arial',
          fontSize: 10,
          fontStyle:"bold",
          padding: 2,
          fill: 'white'
        },
        rect: {
          fill: this.color,
          pointerDirection: 'right',

          pointerWidth: 3,
          pointerHeight: 5,
        }
    });
    
    this.label=label;
    
};

KhronosJs.timeline.prototype={
    
    getGroup: function(){
        return this.group;
    },
    getLabel: function(){
        return this.label;
    },
    
    /**
     * Refresh the postion of the label associated with the graph
     * @param {type} date
     * @param {type} config
     * @returns {unresolved}
     */
    refreshLabelPos:function(date,config){

        
        var before=this.points[0];
        var after=before;
        var last=this.points[this.points.length-1];
        
        if(date.getTime()<=before.date.getTime()){
            this.label.setY(config.yVal(before.value));
            return;
        }
        
        if(date.getTime()>=last.date.getTime()){
            this.label.setY(config.yVal(last.value));
            return;
        }

        
        var i=0; 

        while(i<this.points.length &&  after.date<date){
            
            if(this.points[i].date.getTime()<=date.getTime()){
                before=this.points[i];
                
                if(this.points[i+1].date>date)
                    after=this.points[i+1];
                    
            }
            i++;
        }
        
        // y=ax+b
        var x2= config.diffX(after.date,false)-config.diffX(before.date,false);
        

        var y2= after.value-before.value;
        var a = y2/x2;
        
        this.label.setY( config.yVal(before.value) + config.yVal((config.diffX(date,false)-config.diffX(before.date,false))*a)  );

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